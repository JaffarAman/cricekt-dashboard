import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";
import { baseURI } from "./core";
import DeshImg from "../Images/dashImg.png";
import AdminDashBoard from "./AdminDashBoard";
import { useHistory } from "react-router";
const Form = () => {
  const history = useHistory()
  const [seriesName, setSeriesName] = useState("");
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");
  const [matchNumber, setmatchNumber] = useState("");
  const [formSubmit, setformSubmit] = useState(true);
  const [matchData , setMatchData] = useState({})
  
  // const [teamOneScore, setTeamOneScore] = useState(null);
  // const [teamTwoScore, setTeamTwoScore] = useState(null);
  // const [btOne, setBtOne] = useState(null);
  // const [btTwo, setBtTwo] = useState(null);
  // const [btOneScore, setBtOneScore] = useState(null);
  // const [btTwoScore, setBtTwoScore] = useState(null);

  // const [bowOne, setBowOne] = useState(null);
  // const [bowTwo, setBowTwo] = useState(null);
  // const [bowTwoScore, setBowTwoScore] = useState(null);
  // const [bowOneScore, setBowOnescore] = useState(null);
  // const submitHandler = () => {
  //   console.log("hit");


  // };
  const formsubmitHandler = async(e) => {
    e.preventDefault();
    if (
      seriesName === "" ||
      teamOneName === "" ||
      teamTwoName === "" ||
      matchNumber === ""
    ) {
      alert("Please enter required Fields");
    }else{
      const dataObj = {
        seriesName,
        teamOneName,
        teamTwoName,
        matchNumber,
      };
      await axios
      .post(`${baseURI}/api/v1/stats`, dataObj)
      .then((res) => {
        console.log(res.data);
        setMatchData({...res.data})
        setformSubmit(false)
        history.push("/matchDet")
      })
      .catch((err) => {
        console.log(err);
      })



    }
  };
  return (
    // <div className="formBox">
    //   <section className="inputsFieldBox">
    //     <h1>ADMIN PANEL CRICKET DASHBOARD</h1>

    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setSeriesName(e.target.value);
    //       }}
    //       placeholder="series name"
    //       id=""
    //     />

    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setTeamOneName(e.target.value);
    //       }}
    //       placeholder="Team 1 name"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setTeamTwoName(e.target.value);
    //       }}
    //       placeholder="Team 2 name"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setTeamOneScore(e.target.value);
    //       }}
    //       placeholder="team1Score"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setTeamTwoScore(e.target.value);
    //       }}
    //       placeholder="Team 2 score"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBtOne(e.target.value);
    //       }}
    //       placeholder="Batting Player 1"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBtTwo(e.target.value);
    //       }}
    //       placeholder="Batting Player 2"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBtOneScore(e.target.value);
    //       }}
    //       placeholder="Batting Player 1 Score"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBtTwoScore(e.target.value);
    //       }}
    //       placeholder="Batting Player 2 Score"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBowOne(e.target.value);
    //       }}
    //       placeholder="Bowler Player 1"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBowTwo(e.target.value);
    //       }}
    //       placeholder="Bowler Player 2"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBowOnescore(e.target.value);
    //       }}
    //       placeholder="Bowler Player Stats 1"
    //       id=""
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setBowTwoScore(e.target.value);
    //       }}
    //       placeholder="Bowler Player Stats 2"
    //       id=""
    //     />

    //     <button onClick={submitHandler}>SUBMIT</button>
    //   </section>
    // </div>
    <div style={{ width: "100%" }}>
      {formSubmit ? (
        <section className={styles.mainBox}>
          <div className={styles.dashBoardForm}>
            <section className={styles.formImg}>
              <img src={DeshImg} alt="" />
            </section>

            <section className={styles.dashForm}>
              <h3>Match Details</h3>

              <form onSubmit={formsubmitHandler}>
                <div>
                  <label htmlFor="">Series Name</label>
                  <input
                    type="text"
                    onChange={(e) => setSeriesName(e.target.value)}
                    placeholder="Series Name..."
                  />
                </div>
                <div>
                  <label htmlFor="">Team One Name</label>
                  <input
                    type="text"
                    onChange={(e) => setTeamOneName(e.target.value)}
                    placeholder="Team One Name..."
                  />
                </div>
                <div>
                  <label htmlFor="">Team Two Name</label>
                  <input
                    type="text"
                    onChange={(e) => setTeamTwoName(e.target.value)}
                    placeholder="Team Two Name..."
                  />
                </div>
                <div>
                  <label htmlFor="">Match Number</label>
                  <input
                    type="text"
                    onChange={(e) => setmatchNumber(e.target.value)}
                    placeholder="Match Number..."
                  />
                </div>

                <button className={styles.startBtn} type="submit">Start Match?</button>
              </form>
            </section>
          </div>
        </section>
      ) : (
        <AdminDashBoard  matchData={matchData} setformSubmit={setformSubmit} />
      )}
    </div>
  );
};

export default Form;
