import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./AdminDashBoard.module.css";
import { baseURI } from "./core";
const AdminDashBoard = ({ setformSubmit, matchData }) => {
  const history = useHistory()
  const [seriesName, setSeriesName] = useState("");
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");
  const [matchNumber, setmatchNumber] = useState("");
  const [matchLive, setMatchLive] = useState("");
  const [tossDes, setTossDes] = useState("");
  console.log(matchData);
  ///Team One///
  const [teamOneScore, setteamOneScore] = useState("");
  const [teamOneWkt, setteamOneWkt] = useState("");
  const [teamOneOver, setteamOneOver] = useState("");

  ///team two
  const [teamTwoScore, setteamTwoScore] = useState("");
  const [teamTwoWkt, setteamTwoWkt] = useState("");
  const [teamTwoOver, setteamTwoOver] = useState("");

  ///Batsman One///
  const [batsOneName, setbatsOneName] = useState("");
  const [batsOneRuns, setbatsOneRuns] = useState("");
  const [batsOneBalls, setbatsOneBalls] = useState("");
  ///Batsman TWO///
  const [batsTwoName, setbatsTwoName] = useState("");
  const [batsTwoRuns, setbatsTwoRuns] = useState("");
  const [batsTwoBalls, setbatsTwoBalls] = useState("");

  ///BOWLER ONE///
  const [bowlerOneName, setbowlerOneName] = useState("");
  const [bowlerOneRuns, setbowlerOneRuns] = useState("");
  const [bowlerOneOvers, setbowlerOneOvers] = useState("");
  const [bowlerOneWk, setbowlerOneWk] = useState("");

  ///BOWLER TWO///
  const [bowlerTwoName, setbowlerTwoName] = useState("");
  const [bowlerTwoRuns, setbowlerTwoRuns] = useState("");
  const [bowlerTwoOvers, setbowlerTwoOvers] = useState("");
  const [bowlerTwoWk, setbowlerTwoWk] = useState("");

  const upDateHandler = async () => {
    console.log("submit handler");
    if(
      seriesName == "" ||
teamOneName == "" ||
teamTwoName == "" ||
matchNumber == "" ||
matchLive == "" ||
tossDes == "" ||
teamOneScore == "" ||
teamOneWkt == "" ||
teamOneOver == "" ||
teamTwoScore == "" ||
teamTwoWkt == "" ||
teamTwoOver == "" ||
batsOneName == "" ||
batsOneRuns == "" ||
batsOneBalls == "" ||
batsTwoName == "" ||
batsTwoRuns == "" ||
batsTwoBalls == "" ||
bowlerOneName == "" ||
bowlerOneRuns == "" ||
bowlerOneOvers == "" ||
bowlerOneWk == "" ||
bowlerTwoName == "" ||
bowlerTwoRuns == "" ||
bowlerTwoOvers == "" ||
bowlerTwoWk == "" 
    ){
      alert("Please Enter All Fields...")
    }else{
      const userObj = {
        seriesName,
        teamOneName,
        teamTwoName,
        matchNumber,
        matchLive,
        tossDes,
        teamOneScore,
        teamOneWkt,
        teamOneOver,
        teamTwoScore,
        teamTwoWkt,
        teamTwoOver,
        batsOneName,
        batsOneRuns,
        batsOneBalls,
        batsTwoName,
        batsTwoRuns,
        batsTwoBalls,
        bowlerOneName,
        bowlerOneRuns,
        bowlerOneOvers,
        bowlerOneWk,
        bowlerTwoName,
        bowlerTwoRuns,
        bowlerTwoOvers,
        bowlerTwoWk,
      };
  
      await axios.post(`${baseURI}/api/v1/stats` , userObj)
      .then(res=>{
        console.log(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    };
    }
    

  useEffect(() => {
    axios
      .get(`${baseURI}/api/v1/stats`)
      .then((res) => {
        console.log("get data", res.data[0]);
        setSeriesName(res.data[0].seriesName);
        setTeamOneName(res.data[0].teamOneName);
        setTeamTwoName(res.data[0].teamTwoName);
        setmatchNumber(res.data[0].matchNumber);
        setMatchLive(res.data[0].matchLive);
        setTossDes(res.data[0].tossDes);
        setteamOneScore(res.data[0].teamOneScore);
        setteamOneWkt(res.data[0].teamOneWkt);
        setteamOneOver(res.data[0].teamOneOver);
        setteamTwoScore(res.data[0].teamTwoScore);
        setteamTwoWkt(res.data[0].teamTwoWkt);
        setteamTwoOver(res.data[0].teamTwoOver);
        setbatsOneName(res.data[0].batsOneName);
        setbatsOneRuns(res.data[0].batsOneRuns);
        setbatsOneBalls(res.data[0].batsOneBalls);
        setbatsTwoName(res.data[0].batsTwoName);
        setbatsTwoRuns(res.data[0].batsTwoRuns);
        setbatsTwoBalls(res.data[0].batsTwoBalls);
        setbowlerOneName(res.data[0].bowlerOneName);
        setbowlerOneRuns(res.data[0].bowlerOneRuns);
        setbowlerOneOvers(res.data[0].bowlerOneOvers);
        setbowlerOneWk(res.data[0].bowlerOneWk);
        setbowlerTwoName(res.data[0].bowlerTwoName);
        setbowlerTwoRuns(res.data[0].bowlerTwoRuns);
        setbowlerTwoOvers(res.data[0].bowlerTwoOvers);
        setbowlerTwoWk(res.data[0].bowlerTwoWk);
      })
      .catch((err) => {
        console.log("get data", err);
      });
  }, []);

  return (
    <div className={styles.mainBox}>
      <div className={styles.topHEading}>
        <h1>Cricket DashBoard</h1>
      </div>

      <section className={styles.matchInfo}>
        <h2>Match Info</h2>

        <section>
          <div>
            <label htmlFor="">Series Name</label>
            <input
              type="text"
              value={seriesName}
              onChange={(e) => setSeriesName(e.target.value)}
              placeholder="Series Name..."
            />
          </div>

          <div>
            <label htmlFor="">Match Number</label>
            <input
              type="text"
              value={matchNumber}
              onChange={(e) => setmatchNumber(e.target.value)}
              placeholder="Match Number..."
            />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="">Team One Name</label>
            <input
              type="text"
              value={teamOneName}
              onChange={(e) => setTeamOneName(e.target.value)}
              placeholder="Team One Name..."
            />
          </div>
          <div>
            <label htmlFor="">Team Two Name</label>
            <input
              type="text"
              value={teamTwoName}
              onChange={(e) => setTeamTwoName(e.target.value)}
              placeholder="Team Two Name..."
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="">MATCH Live?</label>
            <input
              type="text"
              value={matchLive}
              onChange={(e) => setMatchLive(e.target.value)}
              placeholder="Match is live? T/F"
            />
          </div>
          <div>
            <label htmlFor="">Toss Description</label>
            <input
              type="text"
              value={tossDes}
              onChange={(e) => setTossDes(e.target.value)}
              placeholder="Toss..."
            />
          </div>
        </section>
      </section>

      {/* ///batting info */}
      <section className={styles.teamInfo}>
        <section>
          <h2>Team One Score</h2>
          <div>
            <label htmlFor="">Team One Score</label>
            <input
              type="text"
              value={teamOneScore}
              onChange={(e) => setteamOneScore(e.target.value)}
              placeholder="Team One Score"
            />
          </div>

          <div>
            <label htmlFor="">Team One Wickets</label>
            <input
              type="text"
              value={teamOneWkt}
              onChange={(e) => setteamOneWkt(e.target.value)}
              placeholder="Team One Wickets"
            />
          </div>

          <div>
            <label htmlFor="">Team One Overs</label>
            <input
              type="text"
              value={teamOneOver}
              onChange={(e) => setteamOneOver(e.target.value)}
              placeholder="Team One Overs"
            />
          </div>
        </section>

        <section>
          <h2>Team Two Score</h2>

          <div>
            <label htmlFor="">Team Two Score</label>
            <input
              type="text"
              value={teamTwoScore}
              onChange={(e) => setteamTwoScore(e.target.value)}
              placeholder="Team Two Score"
            />
          </div>

          <div>
            <label htmlFor="">Team Two Wickets</label>
            <input
              type="text"
              value={teamTwoWkt}
              onChange={(e) => setteamTwoWkt(e.target.value)}
              placeholder="Team Two Wickets"
            />
          </div>
          <div>
            <label htmlFor="">Team Two Overs</label>
            <input
              type="text"
              value={teamTwoOver}
              onChange={(e) => setteamTwoOver(e.target.value)}
              placeholder="Team Two Overs"
            />
          </div>
        </section>
      </section>

      <section className={styles.statsMainBox}>
        {/* ///bating statsss start// */}
        <section className={styles.batingStats}>
          <h2>Bating Stats</h2>

          <div className={styles.batingStatsBOx}>
            <section className={styles.batOneBox}>
              <div>
                <label htmlFor="">Batsman One Name</label>
                <input
                  type="text"
                  value={batsOneName}
                  onChange={(e) => setbatsOneName(e.target.value)}
                  placeholder="Batsman One Name"
                />
              </div>
              <div>
                <label htmlFor="">Batsman One Runs</label>
                <input
                  type="text"
                  value={batsOneRuns}
                  onChange={(e) => setbatsOneRuns(e.target.value)}
                  placeholder="Batsman One Runs"
                />
              </div>
              <div>
                <label htmlFor="">Batsman One Balls</label>
                <input
                  type="text"
                  value={batsOneBalls}
                  onChange={(e) => setbatsOneBalls(e.target.value)}
                  placeholder="Batsman One Balls"
                />
              </div>
            </section>

            <section className={styles.battwoBox}>
              <div>
                <label htmlFor="">Batsman Two Name</label>
                <input
                  type="text"
                  value={batsTwoName}
                  onChange={(e) => setbatsTwoName(e.target.value)}
                  placeholder="Batsman Two Name"
                />
              </div>
              <div>
                <label htmlFor="">Batsman Two Runs</label>
                <input
                  type="text"
                  value={batsTwoRuns}
                  onChange={(e) => setbatsTwoRuns(e.target.value)}
                  placeholder="Batsman Two Runs"
                />
              </div>
              <div>
                <label htmlFor="">Batsman Two Balls</label>
                <input
                  type="text"
                  value={batsTwoBalls}
                  onChange={(e) => setbatsTwoBalls(e.target.value)}
                  placeholder="Batsman Two Balls"
                />
              </div>
            </section>
          </div>
        </section>
        {/* ///bating statsss end// */}

        {/* ///bowling statsss start// */}

        <section className={styles.bowlingStats}>
          <h2>Bowling Stats</h2>

          <div className={styles.batingStatsBOx}>
            <section className={styles.batOneBox}>
              <div>
                <label htmlFor="">Bowler One Name</label>
                <input
                  type="text"
                  value={bowlerOneName}
                  onChange={(e) => setbowlerOneName(e.target.value)}
                  placeholder="Bowler One Name"
                />
              </div>
              <div>
                <label htmlFor="">Bowler One Runs</label>
                <input
                  type="text"
                  value={bowlerOneRuns}
                  onChange={(e) => setbowlerOneRuns(e.target.value)}
                  placeholder="Bowler One Runs"
                />
              </div>
              <div>
                <label htmlFor="">Bowler One Overs</label>
                <input
                  type="text"
                  value={bowlerOneOvers}
                  onChange={(e) => setbowlerOneOvers(e.target.value)}
                  placeholder="Bowler One Overs"
                />
              </div>
              <div>
                <label htmlFor="">Bowler One Wickets</label>
                <input
                  type="text"
                  value={bowlerOneWk}
                  onChange={(e) => setbowlerOneWk(e.target.value)}
                  placeholder="Bowler One Wickets"
                />
              </div>
            </section>

            <section className={styles.battwoBox}>
              <div>
                <label htmlFor="">Bowler Two Name</label>
                <input
                  type="text"
                  value={bowlerTwoName}
                  onChange={(e) => setbowlerTwoName(e.target.value)}
                  placeholder="Bowler Two Name"
                />
              </div>
              <div>
                <label htmlFor="">Bowler Two Runs</label>
                <input
                  type="text"
                  value={bowlerTwoRuns}
                  onChange={(e) => setbowlerTwoRuns(e.target.value)}
                  placeholder="Bowler Two Runs"
                />
              </div>
              <div>
                <label htmlFor="">Bowler Two Balls</label>
                <input
                  type="text"
                  value={bowlerTwoOvers}
                  onChange={(e) => setbowlerTwoOvers(e.target.value)}
                  placeholder="Bowler Two Balls"
                />
              </div>
              <div>
                <label htmlFor="">Bowler Two Wickets</label>
                <input
                  type="text"
                  value={bowlerTwoWk}
                  onChange={(e) => setbowlerTwoWk(e.target.value)}
                  placeholder="Batsman Two Wickets"
                />
              </div>
            </section>
          </div>
        </section>
        {/* ///bowling statsss end// */}
      </section>

      <section className={styles.updateBtn}>
        <button onClick={upDateHandler}>UPDATE SCORE</button>
        <button onClick={() => {
              history.push("/adminpanel")
        }}>NEW MATCH?</button>
      </section>
    </div>
  );
};

export default AdminDashBoard;
