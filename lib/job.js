
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

// Fisher–Yates shuffle: https://javascript.info/array-methods#shuffle-an-array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export async function getRandomJobs(limit) {
    const alljobs = await getAllJobs();
    shuffle(alljobs);
    return alljobs.slice(0, limit);
}
