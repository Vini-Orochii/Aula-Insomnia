import express from "express";
import cors from "cors";
import { routes } from "./routes.js";

const port = process.env.PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended : true
}),
);

app.use(routes);


app.listen(4000, () => {
    console.log(`Server running on ${ port }`);
})
