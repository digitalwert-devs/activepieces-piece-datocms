"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDatoClient = void 0;
const tslib_1 = require("tslib");
const API_ENDPOINT = 'https://site-api.datocms.com/items/';
const makeDatoClient = (auth) => {
    return {
        fetchData: (recordID) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const { apiToken } = auth;
            try {
                const response = yield fetch(API_ENDPOINT + recordID, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${apiToken}`,
                        'Accept': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                return yield response.json();
            }
            catch (error) {
                console.error('Error fetching data from DatoCMS:', error);
                throw error;
            }
        })
    };
};
exports.makeDatoClient = makeDatoClient;
//# sourceMappingURL=client.js.map