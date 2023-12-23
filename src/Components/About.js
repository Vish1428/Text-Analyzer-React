import React from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'w/hite',
        
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36, 74, 104)':'white'
    }
 
  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"aria-controls="collapseOne">
            <strong>About Site</strong>
            </button>
            </h2>
            <div id="collapseOne"className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}><strong>Welcome to Text Analyzer:</strong> At Text Analyzer, we are passionate about the power of language and its ability to convey ideas, emotions, and information. Our mission is to empower individuals and businesses by providing cutting-edge text analysis tools that unlock the full potential of written communication.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Key Features</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>1. It shows Summary of Your Text like word and characters count, how many Minutes it will take to read.<br></br>
            2. It shows preview for your Text.<br></br>
            3. It converts text into UPPERCASE <br></br>
            4. It converts text into lowecase<br></br>
            5. It Clears all text.<br></br>
            6. It can Speak text for you.<br></br>
            7. It can Copy Text.<br></br>
            8. It can delete Extra Spaces from Text.<br></br>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Elevate Your Text, Elevate Your Message – Text  Analyzer is Where Words Matter.</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                We Hope you like!
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}
