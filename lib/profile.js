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

// Convert an object in the form `{data, type, name}` to the file structure used by Ant Design's Upload component
export function uploadDataToAntFile(upload) {
    const data = window.atob(upload.data);
    const arr = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        arr[i] = data.charCodeAt(i);
    }
    const file = new File([arr.buffer], upload.name, {
        type: upload.type,
    });
    return {
        originFileObj: file,
        name: upload.name,
        type: upload.type,
    }
}
