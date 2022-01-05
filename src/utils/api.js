export default {
    post(url, data) {
        return fetch(process.env.VUE_APP_API_URL + url, {
            method: 'POST',
            headers: {
                'Client-Id': `${process.env.VUE_APP_CLIENT_ID}`,
                'Client-Key': `${process.env.VUE_APP_CLIENT_KEY}`,
                'Client-Secret': `${process.env.VUE_APP_CLIENT_SECRET}`,
                'Content-type': 'application/json;',
            },
            body: JSON.stringify(data),
        });
    },
};
