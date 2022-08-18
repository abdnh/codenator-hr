import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"

import { postApplication, getApplication, updateApplication } from "../../lib/application";

export default withIronSessionApiRoute(applicationRoute, sessionOptions)

async function applicationRoute(req, res) {
    let application;
    if (req.method === "GET") {
        application = req.query;
    }
    else if (["POST", "PATCH"].includes(req.method)) {
        application = await req.body;
    }
    else {
        res.status(405).json(null);
        return;
    }

    if (application.userID != req.session.user.id) {
        res.status(403).json(null);;
        return;
    }

    if (["POST", "PATCH"].includes(req.method)) {
        try {
            if (req.method === "POST") {
                await postApplication(application);
            } else {
                await updateApplication(application);
            }
            res.status(200).json({ ok: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    else if (req.method === "GET") {
        try {
            res.status(200).json(await getApplication(application.userID, application.jobID));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
