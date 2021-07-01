export type LoginAPIParameters = {
  email?: string;
  password?: string;
};

export type LoginResponse = {
  access_token: string;
};
