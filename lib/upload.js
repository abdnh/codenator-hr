import { getJSON } from "./request";

export async function uploadHandleToAntFile(handle) {
    const res = await (await getJSON(`/api/download_file?handle=${handle}&include_meta=true`)).json();
    return {
        originFileObj: new File([new Uint8Array(res.data.data)], res.filename, { type: res.mimetype }),
        name: res.filename,
        type: res.mimetype,
        handle,
    }
}

export async function uploadHandleToObjectUrl(handle) {
    console.log('uploadHandleToObjectUrl', handle);
    if (!handle) return "";
    const res = await (await getJSON(`/api/download_file?handle=${handle}`)).json();
    return URL.createObjectURL(res.data);
}
