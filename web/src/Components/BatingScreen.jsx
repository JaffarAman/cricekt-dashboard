import React, { useEffect, useState } from 'react'
import "./BatingScreen.css"
import { baseURI } from "../Screen/core";
import axios  from 'axios';
import io from "socket.io-client"

const BatingScreen = () => {
    
    useEffect( async ()=>{
        await axios.get(`${baseURI}/api/v1/stats`)
        .then(res=>{
            console.log(res.data)
            setDataObj(...res.data)
        })
        .catch(err=>{
            console.log(err)
        })


    } , [])

    useEffect(()=>{

        

    } , [])
    const [dataObj , setDataObj] = useState({})
    console.log(dataObj)
    return (
        <div className="batingMainBox">

            <div className="heading">
                <h3>{
                     
                    dataObj?.seriresName 
                    }</h3>
            </div>

            <section className="scorenBox">
                <section className="innerbOx">

                <div className="team1Box">
                        <p>{dataObj?.teamOne}</p>
                        <h1>176 / 8 *</h1>

                </div>

                    <div className="vsbox">
                        <h1>VS</h1>
                    </div>

                <div className="team2Box">
                <p>{dataObj?.teamTwo}</p>

                <h1>{dataObj?.teamTwoScore}*</h1>


                </div>

                </section>
                <div className="det">
                    India need 35 runs  in 19 balls to win
                </div>

                <div className="DetailsBox">
                    
                    <div className="batingBOx">
                        <h1>BATTING</h1>
                    <h1>{dataObj?.batsOne}</h1>
                         <p>{dataObj?.batsOneScore}*</p>   
                        
                         <h1>{dataObj?.batsTwo}</h1>
                         <p>{dataObj?.batsTwoScore}*</p>   
                        
                    </div>     

                    <div className="bowingBox">
                    <h1>Bowling</h1>
                    <h1>{dataObj?.bowlerOne}</h1>
                         <p>{dataObj?.bowlerOneScore}*</p>   
                        
                         <h1>{dataObj?.bowlerTwo}</h1>
                         <p>{dataObj?.bowlerTwoScore}*</p>   
                            
                    </div>                
                </div>
    


            </section>



        </div>

    )
}

export default BatingScreen


