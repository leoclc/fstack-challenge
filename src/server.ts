import App from './app';
import ExampleRoute from './routes/example.route';
import './databases/index';

const app = new App([new ExampleRoute()]);

app.listen();
