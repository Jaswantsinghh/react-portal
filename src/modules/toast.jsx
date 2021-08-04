import {React,useState} from 'react';
import ReactDOM from "react-dom";
export default function Toast(props)
{
    const [setOpen] = useState(true);
    if(!setOpen) return null;
    return ReactDOM.createPortal(
        <>
        <div className="toastWindow">
            <div className="toastContent">
                <div className="toastHeader">
                    <div className="toastHeaderContainer1">
                    <div className="squareBox">
                    </div>
                    <strong className="textHeader">Bootstrap</strong>
                    </div>

                    <div className="toastHeaderContainer2">
                    <span className="time">11 min ago</span>
                    <span className="toastClose" onClick={props.funcOpen}>⨉</span>
                    </div>
                </div>
                <div className="toastBody">
                    <p className="toastP">Woohoo, you're reading this text in a Toast!</p>
                </div>
            </div>
        </div>
        
        </>, document.getElementById("toastRoot")
    )
}