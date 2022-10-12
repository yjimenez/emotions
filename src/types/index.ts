export interface AuthTokenPayload {
  auth_time: number;
  client_id: string;
  cognitoGroups: string[];
  event_id: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  scope: string;
  sub: string;
  token_use: string;
  username: string;
}
