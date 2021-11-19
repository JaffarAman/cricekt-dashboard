import React from "react";
import styles from "./AdminDashBoard.module.css";
const AdminDashBoard = () => {
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




    </div>
  );
};

export default AdminDashBoard;
