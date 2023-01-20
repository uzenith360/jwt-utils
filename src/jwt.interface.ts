import { jwtTokenTypeEnum } from "./jwt-token-type.enum";

export interface JwtInterface {
    access_token: string;
    token_type?: jwtTokenTypeEnum;
}
