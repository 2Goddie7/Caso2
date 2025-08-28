import mongoose, { Schema, model } from "mongoose";

const reservaSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    },
    vehiculo: {
        type: Schema.Types.ObjectId,
        ref: "Vehiculo",
        required: true
    }
}, {
    timestamps: true,
    collection: 'reservas'
});

export default model('Reserva', reservaSchema);
