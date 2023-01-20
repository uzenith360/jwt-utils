import { sign } from 'jsonwebtoken';
import jwtTokenTypeEnum from './jwt-token-type.enum';
import JwtInterface from './jwt.interface';

export class JwtUtils {
    private static _instance: JwtUtils;

    private constructor(private readonly jwtSecret: string) {
        this.jwtSecret = jwtSecret;
    }

    public sign<T>(
        payload: T extends object ? T : object,
        type: jwtTokenTypeEnum = jwtTokenTypeEnum.bearer,
    ): JwtInterface {
        return {
            access_token: sign(payload, this.jwtSecret),
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
