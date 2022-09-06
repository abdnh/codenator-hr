import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"
import filestackClient from "../../lib/filestack";

export default withIronSessionApiRoute(downloadRoute, sessionOptions)

async function downloadRoute(req, res) {
    if (req.method !== "GET") {
        res.status(405).json(null);
        return;
    }
    const { handle, include_meta } = req.query;
    const upload = await filestackClient.download(handle);
    let metadata = {};
    if (include_meta) {
        metadata = await filestackClient.metadata(handle, { filename: true, mimetype: true });
    }
    res.status(200).json({ data: upload.data, ...metadata });
}
