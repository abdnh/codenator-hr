export function postJSON(url, data, method = 'POST') {
    return fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

export function getJSON(url) {
    return fetch(url, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    });
}

export function postFile(url, file) {
    const formData = new FormData();
    formData.append("file", file);
    return fetch(url, {
        method: "POST",
        body: formData,
    });
}
