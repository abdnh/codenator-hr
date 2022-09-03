import { withIronSessionApiRoute } from "iron-session/next"
import { sessionOptions } from "../../lib/session"

import { getAdmin } from "../../lib/user";

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req, res) {
    if (req.method !== "POST") {
        res.status(405)
    }
    else {
        const { email, password } = await req.body
        try {
            const user = await getAdmin(email, password)
            req.session.user = user
            await req.session.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

