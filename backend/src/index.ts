import { Elysia } from "elysia";

const port = Number(Bun.env.PORT ?? 3000);

export const app = new Elysia()
  .get("/health", () => ({
    status: "ok",
    message: "MedicalFlow API is running",
  }))
  .listen(port);

console.log(`MedicalFlow API listening on ${app.server?.hostname}:${app.server?.port}`);