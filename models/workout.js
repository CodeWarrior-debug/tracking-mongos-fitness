const { response } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    exercises: [{
        type: {
            type: String,
            required:"Enter exercise type:",
            trim:true,
        },
        name: {
            type:String,
            required:"Enter exercise name:",
            trim:true,
        },
        weight: {
            type: Number,
        },
        distance: {
            type: Number,
        },  
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
            required:"Enter duration in minutes:"
        },
    }],
    day: {
        type: Date,
        default: () => new Date()
    }
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;