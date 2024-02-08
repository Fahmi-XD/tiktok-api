const { TiktokDL } = require('@tobyg74/tiktok-api-dl');
const axios = require('axios');

const TiktokController = {
    postTiktok: async (req, res) => {
        const { tiktokUrl } = req.body;

        try {
            TiktokDL(tiktokUrl, {
                version: 'v1' //  version: "v1" | "v2" | "v3"
            }).then(result => {
                res.json(result);
            });
        } catch (error) {
            console.error('Errro', error);
        }
    },

    dlTiktok: async (req, res) => {
        const { url } = req.query;

        try {
            const response = await axios.get(url, {
                responseType: 'stream'
            });
            await res.set(response.headers);
            response.data.pipe(res);
        } catch (error) {
            res.status(404).json({
                error: 'Error Masbro'
            });
        }
    }
};

module.exports = TiktokController;
