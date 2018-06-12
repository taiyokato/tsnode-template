import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as bodyParser from "body-parser";
import logger from "./util/logger";
import * as lusca from "lusca";

// 接続を催す
import './services/mongo';

// Create Express server
const app = express();

app.disable('X-Powered-By');
// Express configuration
app.set("port", process.env.PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

import * as index from "./routes/index";
app.use('/', index);

// routesはここにどんどん追加

// error handler
app.use(function (error: any, req: Request, res: Response, next: NextFunction) {

    console.log(JSON.stringify(error, undefined, 3));
    res.status(404).json(error);
});

export default app;