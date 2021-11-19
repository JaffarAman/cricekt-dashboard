import React, { useEffect, useState } from "react";
import styles from "./BatingScreen.module.css";
import { baseURI } from "../Screen/core";
import axios from "axios";
import io from "socket.io-client";
import LivePic from "../Images/live.png";
import PakPic from "../Images/pak.png";

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
    const socket = io("http://localhost:5000");

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
        <h1>WORLD CUP MATCH</h1>
        <h3>PAKISTAN VS INDIA Match # 22</h3>
      </div>
      <section className={styles.appMainBox}>
        <div className={styles.scoreBox}>
            <small className={styles.tossHEading}>PAKISTAN WON THE TOSS AND ELECTRIC TO BOWL FIRST</small>
          <div className={styles.liveBox}>
            <h4>LIVE MATCH</h4>
            <img src={LivePic} width="50" alt="" />
          </div>
          <div className={styles.teamScoreBox}>
            <section className={styles.teamOneBox}>
              <img src={PakPic} width="50" alt="" />
              <h5>PAKISTAN</h5>
              <p>115 / 4 </p>
              <small>43.5 Overs</small>
            </section>

            <section className={styles.versis}>
              <h1>VS</h1>
            </section>

            <section className={styles.teamTwoBox}>
              <img src={PakPic} width="50" alt="" />
              <h5>INDIA</h5>
              <p>114 / 10 </p>
              <small>25.5 Overs</small>
            </section>
          </div>

          <div className={styles.winingLine}>
            <marquee behavior="" direction="">
              PAKISTAN WON THE MATCH
            </marquee>
          </div>
        </div>
      </section>

      <section className={styles.statsBox}>
        <section className={styles.batingStats}>
          <h2>Bating Stats</h2>
          <div>
            <h3>Babar Azam</h3>
            <p>35 / <small>12 *</small> </p>
          </div>

          <div>
            <h3>Muhammad Rizwan</h3>
            <p>40 / <small>12 *</small></p>
          </div>
        </section>

        <section className={styles.bowlingStats}>
        <h2>Bowling Stats</h2>
          <div>
            <h3>ravi </h3>
            <p>2 - 12 <small>2.4(over)</small></p>
          </div>

          <div>
            <h3>Muhammad Rizwan</h3>
            <p>2 - 12 <small>2.4(over)</small></p>

          </div>
        </section>
      </section>
    </section>
  );
};

export default BatingScreen;
