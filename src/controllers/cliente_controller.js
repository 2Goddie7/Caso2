import Cliente from "../models/Clientes.js"

const crearCliente = async (req,res)=>{
    try {
        const cliente = new Cliente(req.body)
        await cliente.save()
        res.status(201).json(cliente)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const listarClientes = async (req, res) => {
  const clientes = await Cliente.find()
  res.json(clientes)
}

const obtenerCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id)
    if (!cliente) return res.status(404).json({ msg: "Cliente no encontrado" })
    res.json(cliente)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(cliente)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id)
    res.json({ msg: "Cliente eliminado correctamente" })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

export { 
    crearCliente,
    listarClientes, 
    obtenerCliente, 
    actualizarCliente, 
    eliminarCliente 
}