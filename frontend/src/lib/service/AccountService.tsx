export class AccountService {
  constructor() {}
  async getAccountList(): Promise<any> {
    const response = await fetch("/api/account");
    return response.json();
  }
  async login(username: string, password: string): Promise<boolean> {
    const formData = new FormData();
    console.log(username, password);
    formData.append("username", username);
    formData.append("password", password);
    const response = await fetch("/api/auth/authenticate", {
      method: "POST",
      body: formData,
    });
    return response.ok;
  }

  async logout(): Promise<boolean> {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Error logging out");
      }
      return true;
    } catch (error) {
      return false;
    }
  }
}
