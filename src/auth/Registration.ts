import { RegisterType } from "../types"
import { hashLoginDetails, hashString } from "../utils"
import Path from "path"

const fs = require('fs')

export const Register = (req: any, res: any) => {
    const registerBody: RegisterType = req.body
    if ('name' in registerBody && 'surname' in registerBody && 'email' in registerBody && 'password' in registerBody) {

        const [hashedEmail, hashedPassword] = hashLoginDetails(registerBody.email, registerBody.password)

        const hashedRegister: RegisterType = {
            name: registerBody.name,
            surname: registerBody.surname,
            email: registerBody.email,
            password: hashedPassword
        }

        if (!fs.existsSync('users')) {
            fs.mkdirSync('users');
        }

        if (fs.existsSync(('users/' + hashedEmail + '.json'))) {
            console.log("Zadaný e-mail je už použitý")
            res.sendStatus(403)
        } else {
            fs.writeFileSync('users/' + hashedEmail + '.json', JSON.stringify(hashedRegister))
            res.sendStatus(201)
        }
        
    } else {
        res.sendStatus(400)
    }
}

/* 
{
    "name": "Patrik",
    "surname": "Dekys",
    "email": "patrik.dekys@studentstc.sk",
    "password": "ToBySiChcelVedietXD"
}
*/