// https://github.com/vercel/next.js/tree/canary/examples/with-iron-session

import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from "../../lib/session"

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
    if (req.session.user && req.session.user.loggedIn) {
        res.status(200).json({...req.session.user, loggedIn: true})
    } else {
        res.status(200).json({loggedIn: false})
    }
}
