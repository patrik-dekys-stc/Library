"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const utils_1 = require("../utils");
const fs_1 = __importDefault(require("fs"));
const Register = (req, res) => {
    const registerBody = req.body;
    if ('name' in registerBody && 'surname' in registerBody && 'email' in registerBody && 'password' in registerBody) {
        const [hashedEmail, hashedPassword] = (0, utils_1.hashLoginDetails)(registerBody.email, registerBody.password);
        const hashedRegister = {
            name: registerBody.name,
            surname: registerBody.surname,
            email: registerBody.email,
            password: hashedPassword
        };
        if (!fs_1.default.existsSync('users')) {
            fs_1.default.mkdirSync('users');
        }
        if (fs_1.default.existsSync(('/users/' + hashedEmail + '.json'))) {
            console.log("Zadaný e-mail je už použitý");
            res.sendStatus(403);
        }
        else {
            fs_1.default.writeFileSync('users/' + hashedEmail + '.json', JSON.stringify(hashedRegister));
            res.sendStatus(201);
        }
    }
    else {
        res.sendStatus(400);
    }
};
exports.Register = Register;
/*
{
    "name": "Patrik",
    "surname": "Dekys",
    "email": "patrik.dekys@studentstc.sk",
    "password": "ToBySiChcelVedietXD"
}
*/ 
