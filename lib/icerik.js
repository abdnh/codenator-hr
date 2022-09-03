const SERVER = process.env.JSON_SERVER;

export async function postIcerik(icerik) {
    await fetch(`${SERVER}/icerik`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(icerik),
    });
}

export async function updateIcerik(icerik) {
    await fetch(`${SERVER}/icerik/${icerik.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(icerik),
    });
}
export async function deleteIcerik(icerik) {
    await fetch(`${SERVER}/icerik/${icerik.id}`, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(icerik),
    });
}
