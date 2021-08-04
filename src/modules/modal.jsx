import {React, useState, useRef} from 'react';
import ReactDOM from "react-dom";
import useOutsideClick from './useOutsideClick';

export default function Modal(props){
    const [isOpen, setOpen] = useState(true);
    const ref = useRef();
  useOutsideClick(ref, () => {
    setOpen(false);
  });
    if(!isOpen) return null;
    return ReactDOM.createPortal(
        <>
        <div className="modalWindow">
            <div ref={ref} className="modalOuter">
                <div className="modalContent">
                <div className="modalTitle">
                <h4>Modal heading</h4>
                <span className="modalClose" onClick={props.func}>⨉</span>
                </div>
                <div className="modalText">
                <p className="subTitle">Woohoo, you're reading this text in a modal!</p>
                </div>
                <div className="modalButtons">
                    <button className="actionButtonGray" onClick={props.func}>Close</button>
                    <button className="actionButton" onClick={props.func}>Save Changes</button>
                </div>
                </div>
            </div>
        </div>
        </>, document.getElementById("modalRoot")
    )
}

