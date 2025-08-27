import mongoose, { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    ciudad: {
        type: String,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true,
    collection: 'clientes'
});

export default model('Cliente', clienteSchema);