import MainController from '../controllers/MainController';
import { MainRouter } from './../routes/MainRouter';
import bodyParser from "body-parser";
import express from "express";

export default class ExpressServer {

    app: express.Application = express();

    constructor() {

    }

    initialize(port: number): void {
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.defineRoutes();
        if(port) {
            this.app.listen(port, () => console.log(`Express is listening to port: ${port}`));
        }
    }

    private defineRoutes(): void {
        this.app.use('/', (new MainRouter(new MainController)).router)
    }

}