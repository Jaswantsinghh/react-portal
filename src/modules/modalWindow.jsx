import {React, useState} from 'react';
import Modal from './modal';
import Toast from './toast';

export default function ModalWindow(){
    let [isOpen, setOpen] = useState(false);
    let [isToastOpen, setToastOpen] = useState(false);
    const handleToast = () => {setToastOpen(!isToastOpen);}
    const handleClick = () => {setOpen(!isOpen);}
return(
    <> 
    <button className="actionButton" onClick={handleClick}>Launch modal</button>
    { isOpen && (
    <Modal func={handleClick} />
    )
    }
    <button className="actionButton" onClick={handleToast}>Toggle toast</button>
    { isToastOpen && (
        <Toast funcOpen = {handleToast} />
    )
    }
    </>
);
}