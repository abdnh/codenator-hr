const SERVER = process.env.JSON_SERVER;

export async function getProfile(userID) {
    const results = await (await fetch(`${SERVER}/profiles?id=${userID}`)).json();
    const profile = results[0];
    return profile;
}

export async function saveProfile(profile) {
    await fetch(`${SERVER}/profiles/${profile.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
    });
}
