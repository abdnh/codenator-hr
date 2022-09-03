import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"

import { deleteIcerik, postIcerik, updateIcerik} from "../../lib/icerik";

export default withIronSessionApiRoute(icerikAdmin, sessionOptions)

async function icerikAdmin(req, res) {
    let icerik;
    if (["POST", "PATCH","DELETE"].includes(req.method)) {
        icerik = await req.body;
    }
    else {
        res.status(405).json(null);
        return;
    }

    if (!req.session.user.admin) {
        res.status(403).json(null);;
        return;
    }

    if (["POST", "PUT","DELETE"].includes(req.method)) {
        try {
            if (req.method === "POST") {
                await postIcerik(icerik);
            } else if(req.method == "DELETE") {
                await deleteIcerik(icerik);
            }
            else {
                await updateIcerik(icerik);
            }
            res.status(200).json({ ok: true });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
