"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datoCms = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const auth_1 = require("./lib/common/auth");
const fetchData_1 = require("./lib/actions/fetchData");
exports.datoCms = (0, pieces_framework_1.createPiece)({
    displayName: "DatoCMS",
    auth: auth_1.DatoCmsAuth,
    minimumSupportedRelease: '0.9.0',
    logoUrl: "https://www.datocms.com/images/brand-assets/main-icon.svg",
    authors: ["Sami Salih"],
    actions: [fetchData_1.DatoCMSFetchAction],
    triggers: [],
});
//# sourceMappingURL=index.js.map