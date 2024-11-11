export interface Account  {
  username: string;
  password:string
  registerDate: Date;
  userType: "resident" | "helper"
};

export interface AccountDTO{
  USERNAME: string;
  PASSWORD: string;
  REGISTER_DATE: Date;
  USER_TYPE: "resident" | "helper";
}