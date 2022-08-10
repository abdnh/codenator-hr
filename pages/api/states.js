import { getStates } from "../../lib/country";

export default function handler(req, res) {
    const { countryCode } = req.query;
    if (!countryCode) {
        return res.status(400);
    }
    const states = getStates(countryCode);
    return res.status(200).json(states);
}
