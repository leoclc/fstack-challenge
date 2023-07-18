import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import ExampleController from '../controllers/example.controller';

class ExampleRoute implements Routes {
  public path = '/example';
  public router = Router();
  public exampleController = new ExampleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.exampleController.getExample);
  }
}

export default ExampleRoute;
