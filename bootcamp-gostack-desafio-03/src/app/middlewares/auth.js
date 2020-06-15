import { promisify } from "util";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ error: "Token not provided." });
    }
    const [, token] = authToken.split(" ");
    try {
        const encoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = encoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: "Token Invalid." });
    }
};
