import mongoose, { Schema, model } from "mongoose";

const estudianteSchema = new Schema({
    marca: {
        type: String,
        required: true,
        trim: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    anio_fabricacion: {
        type: String,
        required: true,
        trim: true
    },
    placa: {
        type: String,
        unique:true,
        required: true
    },
    color: {
        type: String,
        required:true,
        trim: true
    },
    tipo_vehiculo: {
        type: String,
        required:true,
        trim: true
    },
    kilometraje: {
        type: String,
        required:true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true,
    collection: 'vehiculos'
});

export default model('Estudiante', estudianteSchema);
