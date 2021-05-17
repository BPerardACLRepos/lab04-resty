export default async function ({
    url,
    method,
    body = null,
}) {
    const myInit = {
        method: method,
    }

    if (method === 'PUT' || method === 'POST' && body) {
        myInit.body = body;
    }

    const res = await fetch(url, myInit);
    return res.json();
}