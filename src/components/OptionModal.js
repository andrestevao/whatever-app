import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
        ariaHideApp={false}
        onRequestClose={props.handleCloseModal}
        className="
            p-10
            bg-blue-800
            absolute
            inset-0
            text-center
        "
    >
        <h3 className="
            text-white
            text-3xl
            font-black
        ">Selected Option:</h3>
        {props.selectedOption && <p className="
            text-white
            text-xl
        ">{props.selectedOption}</p>}
        <br></br>
        <button className="
            text-white
            bg-blue-500
            border-b-4
            border-blue-700
            py-2
            px-4
        " onClick={props.handleCloseModal}>Okay</button>
    </Modal>
); 

export default OptionModal;