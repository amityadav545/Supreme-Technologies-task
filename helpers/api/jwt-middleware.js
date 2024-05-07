import { expressjwt } from 'express-jwt';
import util from 'util';



export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: "testing", algorithms: ['HS256'] }).unless({
        path: [
            '/api/users/register',
            '/api/users/authenticate'
        ]
    });

    return util.promisify(middleware)(req, res);
}