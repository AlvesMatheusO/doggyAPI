import express from "express"; 
import cors from 'cors';
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js"

const CONNECTION = await connectDatabase();

CONNECTION.on("Error", (error) => {
    console.error("erro da conexao: ", error);

});

CONNECTION.once("Open", () => {
    console.log("Conexão feita com sucesso")
});

const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
    next();
});

routes(app);
export default app;
