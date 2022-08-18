import { getJob, getAllJobs } from "../../lib/job";

export default async function handler(req, res) {
    const { id } = req.query;
    let result;
    if (id) {
        // Search by ID
        result = await getJob(id);
    }
    else {
        result = await getAllJobs();
    }
    return res.status(200).json(result);
}
