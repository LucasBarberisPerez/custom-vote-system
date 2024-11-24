import { createContext, useEffect, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean | null;
  checkLogin: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider({ children }: AuthContextProviderProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authenticate="))
        ?.split("=")[1];
      if (!authCookie) {
        throw new Error("User is not logged");
      }
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkLogin }}>{children}</AuthContext.Provider>
  );
}
