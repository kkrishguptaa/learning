"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_to_json_schema_1 = require("zod-to-json-schema");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const schema_1 = require("../lib/schema");
const zod_1 = require("zod");
const jsonSchema = Object.fromEntries(Object.entries(schema_1.schema).map(([name, schema]) => {
    return [
        name,
        (0, zod_to_json_schema_1.zodToJsonSchema)(zod_1.z.object({
            data: schema
        }), {
            name,
        })
    ];
}));
Object.entries(jsonSchema).forEach(([name, schema]) => {
    fs.writeFileSync(path.join(__dirname, `../../../.vscode/models/${name}.json`), JSON.stringify(schema, null, 2));
});
