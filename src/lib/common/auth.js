"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatoCmsAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
exports.DatoCmsAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    props: {
        apiToken: pieces_framework_1.Property.ShortText({
            displayName: 'DatoCMS API Token',
            required: true,
        }),
    },
});
//# sourceMappingURL=auth.js.map