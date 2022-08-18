export function postJSON(url, data, method = 'POST') {
    return fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}
