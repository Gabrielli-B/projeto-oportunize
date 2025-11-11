import { Router } from "express";
import Empresa from "./app/models/Empresa.js";
import EmpresaController from "./app/controllers/EmpresaController.js";
import authMiddleware from "./app/middlewares/auth.js"; 

const routes = new Router();


routes.get("/teste", async (req, res) => {
  try {
    const empresa = await Empresa.create({
      nome: "Dell",
      cnpj: "12345678000199",
      email: "dell@gmail.com",
      password: "123123", 
    });

    return res.json(empresa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar empresa" });
  }
});

routes.post("/empresa", EmpresaController.store);

routes.use(authMiddleware);

routes.put("/empresa", EmpresaController.update);

export default routes;


