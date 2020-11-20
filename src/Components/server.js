import { createServer, Model } from "miragejs";

export default function () {
  createServer({
    models: {
      task: Model,
    },
    routes() {
      this.namespace = "/api";
      this.get("/task", (request, schema) => {
        return schema.tasks.all();
      });

      this.post("/task", (request, schema) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.tasks.create(attrs);
      });
    },
  });
}
