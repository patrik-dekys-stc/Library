import { LoginType, RegisterType } from "../types"
import { hashLoginDetails, hashString } from "../utils"
import fs, { access, existsSync } from 'fs'
import {v4 as uuidv4, v4} from 'uuid'
import { accessKeys } from "../.."

export const Login = (req: any, res: any) => {
    const loginBody: LoginType = req.body
    if ('email' in loginBody && 'password' in loginBody) {
        
        const [hashedEmail, hashedPassword] = hashLoginDetails(loginBody.email, loginBody.password)


        if (!fs.existsSync('users')) {
            fs.mkdirSync('users');
        }

        if (existsSync('users/' + hashedEmail + '.json')) {
            const rawData = fs.readFileSync('users/' + hashedEmail + '.json')
            const registerType: RegisterType = JSON.parse(rawData.toString())

            if(registerType.password === hashedPassword && registerType.email === loginBody.email) { //nefunguje tak ako by malo
                const key = v4()
                accessKeys.push(key)
                res.json({key: key})
            } else {
                res.sendStatus(401)
            }
        }

    } else {
        res.sendStatus(400)
    }
}/*
{
    "email": "patrik.dekys@studentstc.sk",
    "password": "ToBySiChcelVedietXD"
}
*/