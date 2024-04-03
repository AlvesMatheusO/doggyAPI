import "dotenv/config";
import app from "./src/app.js"

const PORT = 3333;

const ROTAS = {}

app.listen(PORT, () => {

    console.log("working!");
});
