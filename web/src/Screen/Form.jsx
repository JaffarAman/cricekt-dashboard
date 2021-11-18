import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
import { baseURI } from "./core";
const Form = () => {
  const [seriesName, setSeriesName] = useState(null);
  const [teamOneName, setTeamOneName] = useState(null);
  const [teamTwoName, setTeamTwoName] = useState(null);
  const [teamOneScore, setTeamOneScore] = useState(null);
  const [teamTwoScore, setTeamTwoScore] = useState(null);
  const [btOne, setBtOne] = useState(null);
  const [btTwo, setBtTwo] = useState(null);
  const [btOneScore, setBtOneScore] = useState(null);
  const [btTwoScore, setBtTwoScore] = useState(null);

  const [bowOne, setBowOne] = useState(null);
  const [bowTwo, setBowTwo] = useState(null);
  const [bowTwoScore, setBowTwoScore] = useState(null);
  const [bowOneScore, setBowOnescore] = useState(null);
  const submitHandler = () => {
    console.log("hit");
    const dataObj = {
      seriresName: seriesName,
      teamOne: teamOneName,
      teamTwo: teamTwoName,
      teamOneScore: teamOneScore,
      teamTwoScore: teamTwoScore,
      batsOne: btOne,
      batsTwo: btTwo,
      batsOneScore: btOneScore,
      batsTwoScore: btTwoScore,
      bowlerOne: bowOne,
      bowlerTwo: bowTwo,
      bowlerOneScore: bowTwoScore,
      bowlerTwoScore: bowOneScore
      
    };
    axios.post(`${baseURI}/api/v1/stats` , dataObj)
    .then( res =>{
        console.log(res.data)
    })
    .catch( err => {
        console.log(err)
    })
  };

  return (
    <div className="formBox">
      <section className="inputsFieldBox">
        <h1>ADMIN PANEL CRICKET DASHBOARD</h1>

        <input
          type="text"
          onChange={(e) => {
            setSeriesName(e.target.value);
          }}
          placeholder="series name"
          id=""
        />

        <input
          type="text"
          onChange={(e) => {
            setTeamOneName(e.target.value);
          }}
          placeholder="Team 1 name"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setTeamTwoName(e.target.value);
          }}
          placeholder="Team 2 name"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setTeamOneScore(e.target.value);
          }}
          placeholder="team1Score"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setTeamTwoScore(e.target.value);
          }}
          placeholder="Team 2 score"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBtOne(e.target.value);
          }}
          placeholder="Batting Player 1"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBtTwo(e.target.value);
          }}
          placeholder="Batting Player 2"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBtOneScore(e.target.value);
          }}
          placeholder="Batting Player 1 Score"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBtTwoScore(e.target.value);
          }}
          placeholder="Batting Player 2 Score"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBowOne(e.target.value);
          }}
          placeholder="Bowler Player 1"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBowTwo(e.target.value);
          }}
          placeholder="Bowler Player 2"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBowOnescore(e.target.value);
          }}
          placeholder="Bowler Player Stats 1"
          id=""
        />
        <input
          type="text"
          onChange={(e) => {
            setBowTwoScore(e.target.value);
          }}
          placeholder="Bowler Player Stats 2"
          id=""
        />

        <button onClick={submitHandler}>SUBMIT</button>
      </section>
    </div>
  );
};

export default Form;
