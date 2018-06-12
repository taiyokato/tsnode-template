import { Request, Response, NextFunction, Router } from "express";
import { body, header, cookie, validationResult  } from "express-validator/check";

// Controller
import { hashUserData  } from "../controllers/index";
import { IRequestData, IResponseData } from "../interfaces/index";

const router: Router = Router();

router.post('/hash', [
    body('username').isString().not().isEmpty(),
    body('password').isAlphanumeric().not().isEmpty()
], async function(req: Request, res: Response, next: NextFunction) {
    try {
        // 上記のvalidation実行
        const errors = validationResult(req);
        // エラーが空っぽを確認。
        if (!errors.isEmpty()) {
            return next(errors.mapped());
        }
        
        // Request BodyをInterfaceに落とし込む
        const request: IRequestData = {
            username: req.body.username,
            password: req.body.password
        };

        // Main logic
        const hashed: string = await hashUserData(request);
        const response: IResponseData = {
            success: true,
            message: hashed
        }
        
        // Response
        res.json(response);
    } catch (error) {
        next(error); 
    }
});


export = router;
