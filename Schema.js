const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
        seriesName : {
            type : String,
            required : true
        },
        teamOneName : {
            type : String,
            required : true
        },
        teamTwoName : {
            type : String,
            required : true
        },
        matchNumber : {
            type : String,
            required : true
        },
        matchLive : {
            type : String,
            default : ""
        },
        tossDes : {
            type : String,
            default : ""
        },
        teamOneScore : {
            type : String,
            default : ""
        },
        teamOneWkt: {
            type : String,
            default : ""
        },
        teamOneOver : {
            type : String,
            default : ""
        },
        
        teamTwoScore : {
            type : String,
            default : ""
        },
        teamTwoWkt : {
            type : String,
            default : ""
        },
        teamTwoOver :{
            type : String,
            default : ""
        },
        
        batsOneName :{
            type : String,
            default : ""
        },
        batsOneRuns :{
            type : String,
            default : ""
        },
        batsOneBalls :{
            type : String,
            default : ""
        },
        batsTwoName :{
            type : String,
            default : ""
        },
        batsTwoRuns :{
            type : String,
            default : ""
        },
        batsTwoBalls :{
            type : String,
            default : ""
        },
        bowlerOneName :{
            type : String,
            default : ""
        },
        bowlerOneRuns :{
            type : String,
            default : ""
        },
        bowlerOneOvers :{
            type : String,
            default : ""
        },
        bowlerOneWk :{
            type : String,
            default : ""
        },
        bowlerTwoName :{
            type : String,
            default : ""
        },
        bowlerTwoRuns :{
            type : String,
            default : ""
        },
        bowlerTwoOvers :{
            type : String,
            default : ""
        },
        bowlerTwoWk :{
            type : String,
            default : ""
        },
        commentary :{
            type : String,
            default : ""
        },
        create_on :{
            type : Date,
            default : Date.now 

        }
        
})

const stateModel = mongoose.model("cricketDash" , statsSchema )

module.exports = stateModel