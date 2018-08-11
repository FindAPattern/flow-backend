import express, {
  type $Application,
  type $Request,
  type $Response,
  Router,
} from 'express';
import path from 'path';

import { type Message } from 'shared/types';

const PORT: number = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 8080;

const app: $Application = express();

app.get('/api/message', (req: $Request, res: $Response): void => {
  const message: Message = {
    message: 'Hello, World!',
  };

  res.json(message);
})

app.use(express.static(
  path.join(__dirname, '..', '..', 'build'),
  { index : false }
));

app.get('*', (req: $Request, res: $Response) => {
  res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
