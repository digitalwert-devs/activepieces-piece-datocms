"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatoCMSFetchAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const client_1 = require("../common/client");
exports.DatoCMSFetchAction = (0, pieces_framework_1.createAction)({
    name: 'datocms_fetch',
    displayName: 'Fetch Data from DatoCMS',
    description: 'Fetches data from a DatoCMS project using a Read-Only API Token',
    props: {
        recordID: pieces_framework_1.Property.ShortText({
            displayName: 'Record ID',
            description: 'The ID of the record you wish to fetch',
            required: true,
        }),
    },
    run({ auth, propsValue }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { recordID } = propsValue;
            const client = (0, client_1.makeDatoClient)(auth);
            try {
                const data = yield client.fetchData(recordID);
                return data;
            }
            catch (error) {
                console.error('Error fetching data from DatoCMS:', error);
                throw error;
            }
        });
    },
});
//# sourceMappingURL=fetchData.js.map