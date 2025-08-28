import { check, validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Usuarios
export const validarRegistroUsuario = [
  check("nombre").notEmpty().withMessage("Nombre obligatorio")
    .isLength({ max: 20 }).withMessage("Nombre demasiado largo"),
  check("apellido").notEmpty().withMessage("Apellido obligatorio")
    .isLength({ max: 20 }).withMessage("Apellido demasiado largo"),
  check("email").isEmail().withMessage("El correo no es valido"),
  check("password").isLength({ min: 6 }).withMessage("La contraseña debe tener mínimo 6 caracteres"),
  validarCampos
];

export const validarLoginUsuario = [
  check("email").isEmail().withMessage("Correo inválido"),
  check("password").notEmpty().withMessage("Contraseña obligatoria"),
  validarCampos
];

// Cliente
export const validarCrearCliente = [
  check("nombre").notEmpty().withMessage("EL nombre es obligatorio"),
  check("apellido").notEmpty().withMessage("El apellido obligatorio"),
  check("cedula").isLength({ min: 10, max: 10 }).withMessage("La cédula debe contener 10 digitos"),
  check("telefono").isLength({ min: 10, max: 10 }).withMessage("Ingrese un telefono valido"),
  check("ciudad").notEmpty().withMessage("Debe ingresar la ciudad"),
  check("direccion").notEmpty().withMessage("Debe ingresar su dirección"),
  check("fechaNacimiento").notEmpty().withMessage("Debe ingresar su fecha de nacimiento"),
  check("email").isEmail().withMessage("Correo no valido"),
  validarCampos
];

// Vehiculos
export const validarCrearVehiculo = [
  check("marca").notEmpty().withMessage("El nombre de la marca es obligatorio"),
  check("modelo").notEmpty().withMessage("El modelo del vehiculo es obligatorio"),
  check("anio_fabricacion").notEmpty().withMessage("El año de fabricación es obligatorio"),
  check("placa").notEmpty().withMessage("Debe registrar la placa obligatoriamente"),
  check("color").notEmpty().withMessage("Ingrese el color del vehiculo!"),
  check("tipo_vehiculo").notEmpty().withMessage("Ingrese el tipo de vehiculo!"),
  check("kilometraje").notEmpty().withMessage("Debe ingresar el kilometraje"),
  check("descripcion").notEmpty().withMessage("Añada una descripcion detallada del vehiculo!"),
  validarCampos
];

// Reservas
export const validarCrearReserva = [
  check("codigo").notEmpty().withMessage("El código de la reserva es obligatorio!"),
  check("cliente").notEmpty().withMessage("Debe indicar el id del cliente"),
  check("vehiculo").notEmpty().withMessage("Debe indicar el id del vehiculo que se está reservando"),
  validarCampos
];