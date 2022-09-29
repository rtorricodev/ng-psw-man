import MainController from '../controllers/MainController';
import { MainRouter } from './../routes/MainRouter';
import PasswordCardController from '../controllers/PasswordCardController';
import { PasswordCardRouter } from './../routes/PasswordCardRouter';
import bodyParser from "body-parser";
import express from "express";

export default class ExpressServer {

    app: express.Application = express();

    initialize(port: number): void {
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.defineRoutes();
        if(port) {
            this.app.listen(port, () => console.log(`Express is listening to port: ${port}`));
        }
    }

    private defineRoutes(): void {
        this.app.use('/', (new MainRouter(new MainController)).router);
        this.app.use('/password-cards', (new PasswordCardRouter(new PasswordCardController)).router);
    }
}