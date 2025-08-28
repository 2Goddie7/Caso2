import Reserva from "../models/Reservas.js"

const crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva(req.body)
    await reserva.save()
    res.status(201).json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const listarReserva = async (req, res) => {
  const reservas = await Reserva.find()
    .populate("cliente", "nombre apellido email")
    .populate("vehiculo", "nombre codigo")
  res.json(reservas)
}

const obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id)
      .populate("cliente", "nombre apellido")
      .populate("vehiculo", "nombre codigo")
    if (!reserva) return res.status(404).json({ msg: "Matrícula no encontrada" })
    res.json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(reserva)
  } catch (error) {
    console.log(error)
  }
}

const eliminarReserva = async (req, res) => {
  try {
    await Reserva.findByIdAndDelete(req.params.id)
    res.json({ msg: "Matrícula eliminada" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearReserva,
    listarReserva,
    obtenerReserva, 
    actualizarReserva, 
    eliminarReserva
}