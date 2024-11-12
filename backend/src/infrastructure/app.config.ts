const getOriginUrl = (): string =>
  process.env.NODE_ENV === "production" ? (process.env.DOMAIN as string) : "http://localhost:5173";
const getPort = (): number => Number(process.env.PORT) | 3000;

const AppConfig = { getOriginUrl, getPort };

export default AppConfig;
