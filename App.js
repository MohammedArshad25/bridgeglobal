import React, {useState, useEffect} from "react";
import LeftHalf from './containers/leftHalf';
import RightHalf from './containers/rightHalf';


const prod1= "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/w3245"
const prod2= "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/be0001"
const prod3= "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/evo184"
const prod4= "https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/lamino-fatolj"
var stylingObject = {
    container : {
        display : "flex",
        height: "100%",
        minHeight: "100%",
        boxSizing: "border-box",
        
    },
    half : {
        width: "50%",
    }
}



const App = ()=> {
    const[prodId,setPid] = useState("");
    const[prodName,setPName] = useState("");
    const[prodSub,setPSub] = useState("");
    const[prodDesc,setPDesc] = useState("");
    const[prodImage,setPImage] = useState("");
    const[envImage,setEImage] = useState("");
    const[linkBtitle,setLBtitle] = useState("");
    const[linkText,setLtext] = useState("");
    const[linkBgColor,setLBcolor] = useState("");
    const[link,setLink] = useState("");
    const[height, width ] = useWindowSize();
    const[fetchLink,setFetchLink]=useState("https://86ypveeq84.execute-api.eu-central-1.amazonaws.com/production/products/be0001")
    
    const fetchResponse = async() => {
            let response =  await fetch(fetchLink)
            let data = await response.json();
            setPid(data.productId);
            setPName(data.productName);
            setPSub(data.productSub);
            setPDesc(data.productDesc);
            setPImage(data.prodImage);
            setEImage(data.envImage);
            setLBtitle(data.linkBoxTitle);
            setLtext(data.linkText);
            setLBcolor(data.linkBgColor);
            setLink(data.link);
        }   
    useEffect(()=>{
            fetchResponse()
    }, [fetchLink]);

    const handleFetch = (p) => {
        switch(p){
            case "p1" : 
                return setFetchLink(prod1);
                
            case "p2" :  
                return setFetchLink(prod2);  
            case "p3":
                console.log(p)
                return setFetchLink(prod3); 
            case "p4":
                return setFetchLink(prod4); 
            default :
                return setFetchLink(prod1); 
        }
    }

    function useWindowSize() {
        const [size,setSize] = useState([window.innerHeight, window.innerWidth]);
        useEffect(()=>{
            const handleResize = () => {
                setSize([window.innerHeight, window.innerWidth]);
            };
            window.addEventListener("resize", handleResize);
            return ()=>{
                window.removeEventListener("resize",handleResize);
            };
        },[])
        return size;
    }
    return(
       
        <div style={stylingObject.container}>
            <div style={stylingObject.half}>
                <LeftHalf prodId={prodId} prodName={prodName} prodSub={prodSub} prodDesc={prodDesc}
                changeProd={(p)=>{handleFetch(p)}} />
            </div>
            {console.log(width)}
            <div style={stylingObject.half}>
                <RightHalf EImage={envImage} PImage={prodImage}
                 LBtitle={linkBtitle} 
                 LText={linkText} 
                 link={link} 
                 lBGcolor={linkBgColor}
                 />
            </div>
    
        </div>
    )
}

export default App;
