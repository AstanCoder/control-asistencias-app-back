import { Request, Response, NextFunction } from 'express';

export const isRoot = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const role = {name: ""}
        if (role.name !== 'root')
            return res.status(401).json({ message: 'Unauthorized' });
        return next();
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: 'Internal err server ' + e });
    }
};