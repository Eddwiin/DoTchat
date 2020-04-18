import { NestMiddleware, Injectable } from "@nestjs/common";
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Request, Response} from 'express';

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: Function) {
        jwt({
            secret: expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-know/jwks.json`
            }),
            issuer:`https://${process.env.AUTH0_DOMAIN}/.well-know/jwks.json`,
            algorithm: ['RS256'],
        })(req, res, (err) => {

            if (err) {
                const status = err.status || 500;
                const message = err.message || 'Sorry we were unable to process your request.';
                return res.status(status).send( {
                    message
                });
            }

            next();    
        })
    }
}