import PasswordCardController from "../controllers/PasswordCardController";
import express from "express";

export class PasswordCardRouter {
  router: express.Router = express.Router();

  constructor(controller: PasswordCardController) {
    this.router.get(
      "",
      (request: express.Request, response: express.Response): void =>
        controller.getAll(request, response)
    );

    this.router.post(
      "",
      (request: express.Request, response: express.Response): void =>
        controller.add(request, response)
    );

    this.router.put(
      "/:id",
      (request: express.Request, response: express.Response): void => {
        controller.update(request, response);
      }
    );

    this.router.delete(
      "/:id",
      (request: express.Request, response: express.Response): void =>
        controller.delete(request, response)
    );
  }
}
