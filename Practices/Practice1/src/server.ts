import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  await mongoose.connect(config.dbURI as string);
  app.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`);
  });
}

main();
