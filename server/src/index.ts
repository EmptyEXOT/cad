import 'dotenv/config';

import express from 'express'
import {main} from "./main";
import {router} from "./router";

const app = express();

app.use(express.json())
app.use('/api', router)

main(app)