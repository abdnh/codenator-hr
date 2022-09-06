import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"

import { saveProfile, getProfile } from "../../lib/profile";

export default withIronSessionApiRoute(profileRoute, sessionOptions)

async function profileRoute(req, res) {
    let profile;
    if (req.method === "GET") {
        profile = req.query;
    }
    else if (req.method === "POST") {
        profile = await req.body;
    }
    else {
        res.status(405).json(null);
        return;
    }

    if (profile.id != req.session.user.id) {
        res.status(403).json(null);
        return;
    }

    if (req.method === "POST") {
        try {
            await saveProfile(profile);
            res.status(200).json({ ok: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    else if (req.method === "GET") {
        try {
            res.status(200).json(await getProfile(profile.id));
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
