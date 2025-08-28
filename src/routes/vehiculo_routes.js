import { Router } from "express"
import { crearVehiculo, listarVehiculos, obtenerVehiculo, actualizarVehiculo, eliminarVehiculo } from "../controllers/vehiculos_controller.js"
import { validarCrearVehiculo } from "../middleware/validarCampos.js"
import autorizacion from "../middleware/JWT.js"

const router = Router()

router.post('/',autorizacion, validarCrearVehiculo,crearVehiculo)
router.get('/',autorizacion,listarVehiculos)
router.get('/:id',autorizacion,obtenerVehiculo)
router.put('/:id',autorizacion,validarCrearVehiculo,actualizarVehiculo)
router.delete('/:id',autorizacion,eliminarVehiculo)

export default router