import React,{useEffect, useState } from "react";
import logo from "../logos/logo.svg";
import bars from "../logos/bars.svg";
import cross from "../logos/times.svg";


var stylingObject = {
    container : {
        display : "block",
        border : "1px solid black",
        height : "100vh",
        position : "relative"
    },
    top :{
        display : "flex",

    },
    logo:{
        display : "block",
        marginTop : "50px",
        marginLeft : "50px",
        width : "10rem",
        height : "5rem",
    }
    ,
    bars : {
        display : "block",
        marginTop : "50px",
        marginRight : "50px",
        width : "3rem",
        marginLeft : "auto",
        cursor : "pointer"
    },
    body:{
        display : "block",
        position : "absolute",
        width : "50%",
        marginLeft : "25%",
        marginTop : "17vh"
    },
    bodytwo:{
        display : "block",
        position : "absolute",
        textAlign : "center",
        width : "50%",
        marginLeft : "25%",
        marginTop : "17vh",
        cursor : "pointer"
    },
    para : {
        display : "block",
        marginTop : "50px"
    },
    images : {
        width : "3rem",
        height : "3rem"
    }
}
   


const LeftHalf = (props) =>{

    const [clicked, setclicked]=useState(true);

    const handleclick = () => {
        setclicked(!clicked)
    }

    const handleProduct = (e, props) => {
            props.changeProd(e.target.id)
            setclicked(!clicked)
    }
    return (<div style={stylingObject.container}>
            <div style={stylingObject.top}>
                <div style={stylingObject.logo}>
                    <img src={logo} />
                </div>
                <div style={stylingObject.bars}>
                    {(clicked)? 
                    <img onClick={handleclick} src={bars} style={stylingObject.images}/>
                    :<img onClick={handleclick} src={cross} style={stylingObject.images}/>}
                </div>
            </div>
            {
                (!clicked)?
                <div style={stylingObject.bodytwo}>
                        <h3 id="p1"onClick={(e)=>{handleProduct(e,props)}}>PRODUCT 1</h3>  
                        <h3 id="p2"onClick={(e)=>{handleProduct(e,props)}}>PRODUCT 2</h3>  
                        <h3 id="p3"onClick={(e)=>{handleProduct(e,props)}}>PRODUCT 3</h3>  
                        <h3 id="p4"onClick={(e)=>{handleProduct(e,props)}}>PRODUCT 4</h3>  
                </div>
                :
                <div style={stylingObject.body}>
                    <h1>{props.prodName}</h1>
                    <h3>{props.prodSub}</h3>  
                    <p style={stylingObject.para}>{props.prodDesc}</p>
                </div>
             
            }
            
            </div>
        )  
}

export default LeftHalf;
