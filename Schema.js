const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
        seriresName : {
            type : String,
            required : true
        },
        teamOne : {
            type : String,
            required : true
        },
        teamTwo : {
            type : String,
            required : true
        },
        teamOneScore : {
            type : String,
            required : true
        },
        teamTwoScore : {
            type : String,
            required : true
        },
        batsOne : {
            type : String,
            required : true
        },
        batsTwo : {
            type : String,
            required : true
        },
        batsOneScore: {
            type : String,
            required : true
        },
        batsTwoScore : {
            type : String,
            required : true
        },
        
        bowlerOne : {
            type : String,
            required : true
        },
        bowlerTwo : {
            type : String,
            required : true
        },
        bowlerOneScore :{
            type : String,
            require : true
        },
        
        bowlerTwoScore :{
            type : String,
            require : true
        },
        create_on :{
            type : Date,
            default : Date.now 

        }
        
})

const stateModel = mongoose.model("cricketDash" , statsSchema )

module.exports = stateModel