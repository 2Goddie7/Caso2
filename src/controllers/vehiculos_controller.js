import Vehiculo from "../models/Vehiculos.js"

const crearVehiculo = async (req, res) => {
  try {
    const vehiculo = new Vehiculo(req.body)
    await vehiculo.save()
    res.status(201).json(vehiculo)
  } catch (error) {
    console.log(error)
  }
}

const listarVehiculos = async (req, res) => {
  const vehiculos = await Vehiculo.find()
  res.json(vehiculos)
}

const obtenerVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) return res.status(404).json({ msg: "No se encuentra tal vehiculo" })
    res.json(vehiculo)
  } catch (error) {
    console.log(error)
  }
};

const actualizarVehiculo = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({msg:"Vehiculo actualizado correctamente!", vehiculo})
  } catch (error) {
    console.log(error)
  }
}

const eliminarVehiculo = async (req, res) => {
  try {
    await Vehiculo.findByIdAndDelete(req.params.id)
    res.json({ msg: "Vehiculo eliminado de forma exitosa" })
  } catch (error) {
    console.log(error)
  }
}

export { 
    crearVehiculo, 
    listarVehiculos,
    obtenerVehiculo, 
    actualizarVehiculo, 
    eliminarVehiculo 
}
