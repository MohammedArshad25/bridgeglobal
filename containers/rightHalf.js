import React from "react";
import arrow from '../logos/arrow-right.svg';
var stylingObject = {
    container : {
        display : "flex",
        height : "100vh",
        flexDirection : "column",
        alignContent : "flex-start",
        gap : "0px",
    },
    top :{
        display : "block",
        height : "50vh"
    },
    EImage:{
        width : "100%",
        height : "50vh"
    },
    PImage:{
        flex : "50%",
        height : "50vh"
    },
    bottomImage : {
        width : "50%"
    },
    bottom : {
            display : "flex",
            height : "100%"
    }
 
}
const rightHalf = (props) =>{
    return (
            <div style={stylingObject.container}>
                <div style={stylingObject.top}>
                    <img style={stylingObject.EImage} src={props.EImage}/>
                </div>
                <div style={stylingObject.bottom}>
                    <div style={stylingObject.bottomImage}>
                        <img src={props.PImage} style={stylingObject.PImage} />
                    </div>
                    <div style={{backgroundColor :props.lBGcolor, width : "100%", color : "white", }}>
                        <div style={{display : "block", marginRight : "50px" ,marginTop : "50px",position:"relative", textAlign : "right"}}>
                            <h2>{props.LBtitle}</h2>
                            <h2>{props.LText}</h2>
                        </div>
                        <div style={{display : "block", right : "50px" ,bottom : "50px", position:"absolute",}}>
                            <div><span ><a href={props.link}><img style={{color: "white", height: "2rem",paddingRight :"4rem",}}src={arrow}></img></a></span>
                            <span style={{position: "relative" , bottom: "0.5rem"}}>{props.LText}</span></div>
                        </div>
                           
                    </div>

                </div>
            </div>
        )  
}

export default rightHalf;
