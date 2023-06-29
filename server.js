import Express from "express";
import cors from "cors";
import ProdukRoute from './routes/ProdukRoute.js';

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(ProdukRoute);



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App launcher on ${PORT}`);
});
