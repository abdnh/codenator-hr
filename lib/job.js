
const SERVER = process.env.JSON_SERVER;

export async function getJob(id) {
    const results = await (await fetch(`${SERVER}/jobs?id=${id}`)).json();
    const job = results[0];
    return job;
}

export async function getAllJobs() {
    const jobs = await (await fetch(`${SERVER}/jobs`)).json();
    return jobs;
}
