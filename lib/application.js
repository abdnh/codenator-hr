const SERVER = process.env.JSON_SERVER;

export async function getApplication(userID, jobID) {
    const results = await (await fetch(`${SERVER}/applications?userID=${userID}&jobID=${jobID}`)).json();
    const application = results[0];
    return application ? application : null;
}

export async function postApplication(application) {
    await fetch(`${SERVER}/applications`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application),
    });
}

export async function updateApplication(application) {
    await fetch(`${SERVER}/applications/${application.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(application),
    });
}
