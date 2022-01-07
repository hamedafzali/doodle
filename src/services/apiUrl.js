import { apiUrl, apiUrlDev } from "../config.json";
const api = process.env.REACT_APP_ENV === "development" ? apiUrlDev : apiUrl;
export default api;
