import MainController from "../controllers/MainController";
import express from "express";

export class MainRouter {
  router: express.Router = express.Router();

  constructor(controller: MainController) {
    this.router.get(
      "",
      (request: express.Request, response: express.Response) => {
        controller.root(request, response);
      }
    );
  }
}
