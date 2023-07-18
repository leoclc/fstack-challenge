import { getExample } from '../databases/example';
import { NextFunction, Request, Response } from 'express';

class ExampleController {
  public getExample = (req: Request, res: Response, next: NextFunction) => {
    try {
      const examples = getExample()
      res.json(examples).sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default ExampleController;
