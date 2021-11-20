import React, { useEffect, useState } from "react";
import styles from "./BatingScreen.module.css";
import { baseURI } from "../Screen/core";
import axios from "axios";
import io from "socket.io-client";
import LivePic from "../Images/live.png";
import PakPic from "../Images/pak.png";
import Team1 from "../Images/team1.png";
import Team2 from "../Images/team2.png";

const BatingScreen = () => {
  const [dataObj, setDataObj] = useState({});

  useEffect(async () => {
    await axios
      .get(`${baseURI}/api/v1/stats`)
      .then((res) => {
        console.log(res.data);
        setDataObj(...res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const socket = io();

    socket.on("connect", function () {
      console.log("connected to server");
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on("cricData", function (data) {
      console.log(data);
      setDataObj(data);
    });

    return () => {
      socket.close();
    };
  }, []);
  console.log(dataObj);
  return (
    // <div className={styles.batingMainBox}>

    //     <div className={styles.heading}>
    //         <h3>{

    //             dataObj?.seriresName
    //             }</h3>
    //     </div>

    //     <section className={styles.scorenBox}>
    //         <section className={styles.innerbOx}>

    //         <div className={styles.team1Box}>
    //                 <p>{dataObj?.teamOne}</p>
    //                 <h1>176 / 8 *</h1>

    //         </div>

    //             <div className={styles.vsbox}>
    //                 <h1>VS</h1>
    //             </div>

    //         <div className={styles.team2Box}>
    //         <p>{dataObj?.teamTwo}</p>

    //         <h1>{dataObj?.teamTwoScore}*</h1>

    //         </div>

    //         </section>
    //         <div className={styles.det}>
    //             India need 35 runs  in 19 balls to win
    //         </div>

    //         <div className={styles.DetailsBox}>

    //             <div className={styles.batingBOx}>
    //                 <h1>BATTING</h1>
    //             <h1>{dataObj?.batsOne}</h1>
    //                  <p>{dataObj?.batsOneScore}*</p>

    //                  <h1>{dataObj?.batsTwo}</h1>
    //                  <p>{dataObj?.batsTwoScore}*</p>

    //             </div>

    //             <div className={styles.bowingBox}>
    //             <h1>Bowling</h1>
    //             <h1>{dataObj?.bowlerOne}</h1>
    //                  <p>{dataObj?.bowlerOneScore}*</p>

    //                  <h1>{dataObj?.bowlerTwo}</h1>
    //                  <p>{dataObj?.bowlerTwoScore}*</p>

    //             </div>
    //         </div>

    //     </section>

    // </div>
    <section className={styles.mainBox}>
      <div className={styles.seriesHeading}>
        <h1>{dataObj?.seriesName ? dataObj.seriesName : "- - - - "}</h1>
        <h3>
          {dataObj?.teamOneName ? dataObj.teamOneName : "- -"} VS
          {dataObj?.teamTwoName ? dataObj.teamTwoName : "- -"} Match #
          {dataObj?.matchNumber ? dataObj.matchNumber : "- -"}
        </h3>
      </div>
      <section className={styles.appMainBox}>
        <div className={styles.scoreBox}>
          <small className={styles.tossHEading}>
            {dataObj?.tossDes ? dataObj.tossDes : "- - - - -"}
          </small>
          <div className={styles.liveBox}>
            <h4>LIVE MATCH</h4>
            <img src={LivePic} width="50" alt="" />
          </div>
          <div className={styles.teamScoreBox}>
            <section className={styles.teamOneBox}>
              <img src={Team1} width="50" alt="" />
              <h5>{dataObj?.teamOneName ? dataObj.teamOneName : "- -"}</h5>
              <p>
               
                {dataObj?.teamOneScore ? dataObj.teamOneScore : "- -"} /
                {dataObj?.teamOneWkt ? dataObj.teamOneWkt : "- -"}
              </p>
              <small>
              
                {dataObj?.teamOneOver ? dataObj.teamOneOver : "- -"} Overs
              </small>
            </section>

            <section className={styles.versis}>
              <h1>VS</h1>
            </section>

            <section className={styles.teamTwoBox}>
              <img src={Team2} width="50" alt="" />
              <h5>{dataObj?.teamTwoName ? dataObj.teamTwoName : "- -"}</h5>
              <p>
                {dataObj?.teamTwoScore ? dataObj.teamTwoScore : "- -"} /
                {dataObj?.teamTwoWkt ? dataObj.teamTwoWkt : "- -"}
              </p>
              <small>
                {dataObj?.teamTwoOver ? dataObj.teamTwoOver : "- -"} Overs
              </small>
            </section>
          </div>

          <div className={styles.winingLine}>
            {
              dataObj?.commentary ? 
              <marquee behavior="" direction="">
              {dataObj.commentary}
            </marquee>
              :null
            }
   
          </div>
        </div>
      </section>

      <section className={styles.statsBox}>
        <section className={styles.batingStats}>
          <h2>Bating Stats</h2>
          <div>
            <h3>{dataObj?.batsOneName ? dataObj.batsOneName : "No Player"}</h3>
            <p>
              {dataObj?.batsOneRuns ? dataObj.batsOneRuns : "- -"} /
              <small>
                {dataObj?.batsOneBalls ? dataObj.batsOneBalls : "- -"}*
              </small>
            </p>
          </div>

          <div>
            <h3>{dataObj?.batsTwoName ? dataObj.batsTwoName : "No Player"}</h3>
            <p>
              {dataObj?.batsTwoRuns ? dataObj.batsTwoRuns : "- -"} /
              <small>
                {dataObj?.batsTwoBalls ? dataObj.batsTwoBalls : "- -"} *
              </small>
            </p>
          </div>
        </section>

        <section className={styles.bowlingStats}>
          <h2>Bowling Stats</h2>
          <div>
            <h3>{dataObj?.bowlerOneName ? dataObj.bowlerOneName : "No Player"}</h3>
            <p>
              {dataObj?.bowlerOneWk ? dataObj.bowlerOneWk : "0"} - {dataObj?.bowlerOneRuns ?
               dataObj.bowlerOneRuns : "0"} <small>
                {dataObj?.bowlerOneOvers ? dataObj.bowlerOneOvers : "0"}(over)
              </small>
            </p>
          </div>

          <div>
            <h3>{dataObj?.bowlerTwoName ? dataObj.bowlerTwoName : "No Player"}</h3>
            <p>
              {dataObj?.bowlerTwoWk ? dataObj.bowlerTwoWk : "0"} - {dataObj?.bowlerTwoRuns ?
               dataObj.bowlerTwoRuns : "0"} <small>
                {dataObj?.bowlerTwoOvers ? dataObj.bowlerTwoOvers : "0"}(over)
              </small>
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BatingScreen;
