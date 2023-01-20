import { sign } from 'jsonwebtoken';
import { jwtTokenTypeEnum } from './jwt-token-type.enum';
import { JwtInterface } from './jwt.interface';

export class JwtUtils {
    private static _instance: JwtUtils;

    private constructor(private readonly jwtSecret: string) {
        this.jwtSecret = jwtSecret;
    }

    /**
     * Synchronously sign the given payload into a JSON Web Token string payload - Payload to sign, 
     * could be an literal, buffer or string secretOrPrivateKey - Either the secret for HMAC algorithms, 
     * or the PEM encoded private key for RSA and ECDSA. 
     * returns - A JwtInterface object
     * 
     * @param payload object
     * @param expiresIn expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d"
     * @param type jwtTokenTypeEnum defaulting to 'bearer'
     * @returns
     */
    public sign<T>(
        payload: T extends object ? T : object,
        expiresIn: string | number = '8h',
        type: jwtTokenTypeEnum = jwtTokenTypeEnum.bearer,
    ): JwtInterface {
        return {
            access_token: sign(payload, this.jwtSecret, { expiresIn, }),
            token_type: type,
        };
    }

    public static getInstance(jwtSecret: string): JwtUtils {
        if (!JwtUtils._instance) {
            JwtUtils._instance = new JwtUtils(jwtSecret);
        }

        return JwtUtils._instance;
    }
}
