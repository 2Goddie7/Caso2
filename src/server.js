//Importación de modulos
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import routerUsuarios from './routes/usuario_routes.js'
import routerClientes from './routes/cliente_routers.js'
import routerVehiculos from './routes/vehiculo_routes.js'
import routerReservas from './routes/reserva_routes.js'

//Inicalizaciones
const app = express()
dotenv.config()

//Configuraciones
app.set('port',process.env.PORT || 3000)
app.use(cors())

//Middleware
app.use(express.json());

//Rutas
app.get(
    '/', (req,res)=>{
        res.send("Servidor Activo")
})

//Rutas usuario
app.use('/api',routerUsuarios)
//Rutas clientes
app.use('/api',routerClientes)
//Rutas vehiculos
app.use('/api',routerVehiculos)
//Rutas reservas
app.use('/api',routerReservas)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor!')
})

export default app