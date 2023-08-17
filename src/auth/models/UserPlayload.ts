export interface UserPlayload {
  sub: number;
  name: string;
  email: string;
  iat?: number;
  exp?: number;
}
