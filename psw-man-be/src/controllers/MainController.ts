import express from "express";

export default class MainController {
    
    root(request: express.Request, response: express.Response): void {
        response.send("The API works");
    }

}