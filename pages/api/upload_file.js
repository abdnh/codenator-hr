import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"
import filestackClient from "../../lib/filestack";
import multiparty from "multiparty";

export default withIronSessionApiRoute(uploadRoute, sessionOptions)

export const config = {
    api: {
        bodyParser: false,
    },
};

async function uploadRoute(req, res) {
    if (req.method !== "POST") {
        res.status(405).json(null);
        return;
    }
    // FIXME: we should not allow users to access the upload API without restrictions 
    if (!req.session.user) {
        res.status(403).json(null);;
        return;
    }

    const form = new multiparty.Form();
    const file = await new Promise((resolve, reject) => {
        form.parse(req, function (err, fields, files) {
            if (err) reject({ err });
            resolve(files.file[0]);
        });
    });
    const upload = await filestackClient.upload(file.path);
    res.status(200).json({ handle: upload.handle });
}
