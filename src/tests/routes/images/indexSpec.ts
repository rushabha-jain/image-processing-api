import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

describe("/api/images end point test", () => {
  it("Should give bad request message", (done) => {
    request.get("/api/images").expect(401, done);
  });
  it("Should give status 404 for invalid file", (done) => {
    request
      .get("/api/images")
      .query({
        filename: "randomFile",
        width: 300,
        height: 400,
      })
      .expect(404, done);
  });
  it("Should return the resize image", (done) => {
    request
      .get("/api/images")
      .query({
        filename: "palmtunnel",
        width: 300,
        height: 400,
      })
      .expect(200, done);
  });
});
