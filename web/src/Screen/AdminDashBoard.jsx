import React, { useState } from "react";
import styles from "./AdminDashBoard.module.css";
const AdminDashBoard = ({formSubmit , setformSubmit}) => {
  
  const [seriesName, setSeriesName] = useState("");
  const [teamOneName, setTeamOneName] = useState("");
  const [teamTwoName, setTeamTwoName] = useState("");
  const [matchNumber, setmatchNumber] = useState("");
  
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
              // onChange={(e) => setSeriesName(e.target.value)}
              placeholder="Series Name..."
            />
          </div>

          <div>
            <label htmlFor="">Match Number</label>
            <input
              type="text"
              //   onChange={(e)=>setmatchNumber(e.target.value)}
              placeholder="Match Number..."
            />
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="">Team One Name</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamOneName(e.target.value)}
              placeholder="Team One Name..."
            />
          </div>
          <div>
            <label htmlFor="">Team Two Name</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamTwoName(e.target.value)}
              placeholder="Team Two Name..."
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="">MATCH Live?</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamOneName(e.target.value)}
              placeholder="Match is live? T/F"
            />
          </div>
          <div>
            <label htmlFor="">Toss Description</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamTwoName(e.target.value)}
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
              // onChange={(e) => setSeriesName(e.target.value)}
              placeholder="Team One Score"
            />
          </div>

          <div>
            <label htmlFor="">Team One Wickets</label>
            <input
              type="text"
              //   onChange={(e)=>setmatchNumber(e.target.value)}
              placeholder="Team One Wickets"
            />
          </div>

          <div>
            <label htmlFor="">Team One Wickets Overs</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamOneName(e.target.value)}
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
              //   onChange={(e)=>setTeamTwoName(e.target.value)}
              placeholder="Team Two Score"
            />
          </div>

          <div>
            <label htmlFor="">Team Two Wickets</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamOneName(e.target.value)}
              placeholder="Team Two Wickets"
            />
          </div>
          <div>
            <label htmlFor="">Team Two Overs</label>
            <input
              type="text"
              //   onChange={(e)=>setTeamTwoName(e.target.value)}
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
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman One Name"
              />
            </div>
            <div>
              <label htmlFor="">Batsman One Runs</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman One Runs"
              />
            </div>
            <div>
              <label htmlFor="">Batsman One Balls</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman One Balls"
              />
            </div>
          </section>

          <section className={styles.battwoBox}>
            <div>
              <label htmlFor="">Batsman Two Name</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman Two Name"
              />
            </div>
            <div>
              <label htmlFor="">Batsman Two Runs</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman Two Runs"
              />
            </div>
            <div>
              <label htmlFor="">Batsman Two Balls</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
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
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler One Name"
              />
            </div>
            <div>
              <label htmlFor="">Bowler One Runs</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler One Runs"
              />
            </div>
            <div>
              <label htmlFor="">Bowler One Overs</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler One Overs"
              />
            </div>
            <div>
              <label htmlFor="">Bowler One Wickets</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler One Wickets"
              />
            </div>
          </section>

          <section className={styles.battwoBox}>
            <div>
              <label htmlFor="">Bowler Two Name</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler Two Name"
              />
            </div>
            <div>
              <label htmlFor="">Bowler Two Runs</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler Two Runs"
              />
            </div>
            <div>
              <label htmlFor="">Bowler Two Balls</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Bowler Two Balls"
              />
            </div>
            <div>
              <label htmlFor="">Bowler Two Wickets</label>
              <input
                type="text"
                //   onChange={(e)=>setTeamTwoName(e.target.value)}
                placeholder="Batsman Two Wickets"
              />
            </div>
          </section>
          </div>
        </section>
            {/* ///bowling statsss end// */}

      </section>

      <section className={styles.updateBtn}>
          <button>

          UPDATE SCORE
          </button>
          <button>
        NEW MATCH?
      </button>
      </section>

    </div>
  );
};

export default AdminDashBoard;
