import { getCities } from "../../lib/country";

export default function handler(req, res) {
    const { countryCode, stateCode } = req.query;
    if (!countryCode || !stateCode) {
        return res.status(400);
    }
    const cities = getCities(countryCode, stateCode);
    return res.status(200).json(cities);
}

