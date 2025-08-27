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

