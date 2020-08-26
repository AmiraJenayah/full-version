import http from "../http-common";
class DataServices {
    getAll() {
        return http.get("/match");
      }
      create(data) {
        return http.post("/match", data);
      }
}




export default new DataServices;