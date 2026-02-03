const axios = require('axios');            	

const model = [
    "yanzgpt-revolution-25b-v3.5", // Default
    "yanzgpt-legacy-72b-v3.5" // Pro
];

async function YanzGPT(query, model) {
    const response = await axios("https://api.yanzgpt.my.id/v1/chat", {
        headers: {
            authorization: "Bearer yzgpt-sc4tlKsMRdNMecNy",
            "content-type": "application/json"
        },
        data: {
            messages: [
                {
                    role: "system",
                    content: "Kamu adalah Joy Bot"
                },
                {
                    role: "user",
                    content: query
                }
            ],
            model: "yanzgpt-revolution-25b-v3.5"
        },
        method: "POST"
    });
    resolve(response.data)
}

module.exports = { YanzGPT }
