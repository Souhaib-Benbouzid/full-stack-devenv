import express, { Request, Response, NextFunction } from 'express';
import { Express } from 'express';

const app: Express = express();
const { PORT = 5000 } = process.env;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to Full Stack Typescript Node Express');
});

app.listen(PORT, () => {
  console.log('Express Server Running at http://localhost:' + PORT);
});
