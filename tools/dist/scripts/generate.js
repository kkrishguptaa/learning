"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const data_1 = require("../lib/data");
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
handlebars_1.default.registerHelper('urlify', (str) => encodeURIComponent(str));
fs_1.default.readdirSync(path_1.default.join(__dirname, '../../../templates')).forEach(file => {
    const template = fs_1.default.readFileSync(path_1.default.join(__dirname, `../../../templates/${file}`), 'utf8');
    const compiled = handlebars_1.default.compile(template);
    fs_1.default.writeFileSync(path_1.default.join(__dirname, `../../../${file}`), compiled(data_1.data));
});
