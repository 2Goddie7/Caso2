import { Router } from 'express'
import { crearReserva, listarReserva, obtenerReserva, actualizarReserva, eliminarReserva } from '../controllers/reserva_controller.js'
import { validarCrearReserva } from '../middleware/validarCampos.js'
import autorizacion from '../middleware/JWT.js'

const router = Router()

router.post('/',autorizacion, validarCrearReserva, crearReserva)
router.get('/',autorizacion, listarReserva)
router.get('/:id',autorizacion, obtenerReserva)
router.put('/:id',autorizacion, validarCrearReserva, actualizarReserva)
router.delete('/:id',autorizacion, eliminarReserva)

export default router
