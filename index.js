import { express } from "express";
import usuarioRoutes from './routes/usuarioRoutes.js'

// crear la app
const app = express()

// Routing
app.use('/', usuarioRoutes)


const port = 3000;
app.listen(port, ()=>{
    console.log('servidor prueba')
})