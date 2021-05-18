export default async function ({
    url,
    method,
    body = null,
}) {

    const myInit = {
        method,
    }

    if (method === 'PUT' || method === 'POST' && body) {
        myInit.body = body;
    }

    const res = await fetch(url, myInit);
    const json = res.json();
    return json;
}