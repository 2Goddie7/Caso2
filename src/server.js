//Importación de modulos
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import routerUsuarios from './routes/usuario_routes.js'
import routerMaterias from "./routes/materia_routes.js"
import routerEstudiantes from "./routes/estudiante_routes.js"
import routerMatriculas from "./routes/matricula_routes.js"

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor!')
})