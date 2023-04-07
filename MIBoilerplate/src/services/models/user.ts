export interface ListUserReq {
  page: number;
  per_page: number;
}

export interface UserResult {
  firstName: string;
  id: number;
  lastName: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResult {
  token: string;
}
