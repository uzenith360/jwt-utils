import jwtTokenTypeEnum from "./jwt-token-type.enum";

export default interface JwtInterface {
    access_token: string;
    token_type?: jwtTokenTypeEnum;
}
