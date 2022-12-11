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
exports.Login = void 0;
const utils_1 = require("../utils");
const fs_1 = __importStar(require("fs"));
const uuid_1 = require("uuid");
const __1 = require("../..");
const Login = (req, res) => {
    const loginBody = req.body;
    if ('email' in loginBody && 'password' in loginBody) {
        const [hashedEmail, hashedPassword] = (0, utils_1.hashLoginDetails)(loginBody.email, loginBody.password);
        if (!fs_1.default.existsSync('users')) {
            fs_1.default.mkdirSync('users');
        }
        if ((0, fs_1.existsSync)('users/' + hashedEmail + '.json')) {
            const rawData = fs_1.default.readFileSync('users/' + hashedEmail + '.json');
            const registerType = JSON.parse(rawData.toString());
            if (registerType.password === hashedPassword && registerType.email === loginBody.email) { //nefunguje tak ako by malo
                const key = (0, uuid_1.v4)();
                __1.accessKeys.push(key);
                res.json({ key: key });
            }
            else {
                res.sendStatus(401);
            }
        }
    }
    else {
        res.sendStatus(400);
    }
}; /*
{
    "email": "patrik.dekys@studentstc.sk",
    "password": "ToBySiChcelVedietXD"
}
*/
exports.Login = Login;
