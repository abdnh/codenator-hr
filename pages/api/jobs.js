import { getJob, getAllJobs, searchJobs } from "../../lib/job";

export default async function handler(req, res) {
    const { id, q } = req.query;
    let result;
    if (id) {
        // Search by ID
        result = await getJob(id);
    }
    else if (q) {
        // Full-text search
        result = await searchJobs(q);
    }
    else {
        result = await getAllJobs();
    }
    return res.status(200).json(result);
}
