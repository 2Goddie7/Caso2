import { Router } from "express"
import { crearCliente, listarClientes, obtenerCliente, actualizarCliente, eliminarCliente } from "../controllers/cliente_controller.js"
import autorizacion from "../middleware/JWT.js"
import { validarCrearCliente } from "../middleware/validarCampos.js"

const router = Router()

router.post("/", autorizacion,validarCrearCliente, crearCliente);
router.get("/", autorizacion, listarClientes);
router.get("/:id", autorizacion, obtenerCliente);
router.put("/:id", autorizacion, validarCrearCliente, actualizarCliente);
router.delete("/:id", autorizacion, eliminarCliente);

export default router