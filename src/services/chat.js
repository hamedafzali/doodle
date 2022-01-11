import http from "./httpService";
import apiUrl from "./apiUrl";
const token = "BMVQckhGtdMt";
export function getMessages() {
  return http.get(apiUrl + `?token=${token}`);
}
export function getMessagesLimited(timeStamp, limit) {
  return http.get(apiUrl + `?token=${token}&since=${timeStamp}&limit=${limit}`);
}
export function sendMessages(data) {
  http.setToken(token);
  return http.post(apiUrl, data);
}
