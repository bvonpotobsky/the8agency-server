const supertest = require("supertest");

const { app, server } = require("../app");

const api = supertest(app);

test("assistants are returned as json", async () => {
  await api
    .get("/api/v1/assistant")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("a valid assistant can be added", async () => {
  // Length of the array before the new assistant is added
  const initalState = await (await api.get("/api/v1/assistant")).body.length;

  const newAssistant = {
    firstName: "test",
    lastName: "jest",
    email: "test@test.com",
    country: "test",
    phone: "123456789",
    jobTitle: "test",
  };

  // Add new assistant
  await api
    .post("/api/v1/assistant")
    .send(newAssistant)
    .expect("Content-Type", /application\/json/);

  // Verify that the new assistant has been added
  const response = await api.get("/api/v1/assistant");
  expect(response.body.length).toBe(initalState + 1);

  // Verify that the new assistant has the correct properties
  const value = response.body.map((assistant) => assistant.firstName);
  expect(value).toContain(newAssistant.firstName);
});

test("all fields must be completed", async () => {
  const newAssistant = {
    firstName: "test",
    lastName: "jest",
    country: "test",
    phone: "123456789",
    jobTitle: "test",
  };

  await api.post("/api/v1/assistant").send(newAssistant).expect(400);
});

test("email must be unique", async () => {
  const newAssistant = {
    firstName: "test",
    lastName: "jest",
    email: "test@test.com", // This email is already in the database
    country: "test",
    phone: "123456789",
    jobTitle: "test",
  };

  await api.post("/api/v1/assistant").send(newAssistant).expect(409);
});

// Close server after tests
afterAll(() => {
  server.close();
});
