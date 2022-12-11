import crypto from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'

export const hashString = (value: string): string => {
    let hashedValue = Base64.stringify(crypto.SHA256(value))
    hashedValue = hashedValue.replace('/','').replace('/\\/', '')
    return hashedValue
}