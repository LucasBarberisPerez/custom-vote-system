export class AccountService {
    //TODO: Add account service
  constructor() {}
  async getAccountList(): Promise<any> {
    const response = await fetch("/api/account");
    return response.json();
  }
  async login(email: string, password: string): Promise<boolean> {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await fetch("/api/account/login", {
      method: "POST",
      body: formData,
    });
    return response.ok;
  }
}
