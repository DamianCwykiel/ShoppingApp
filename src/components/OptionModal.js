import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handlerClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
        >
            <h4 className = "modal__title">Let's start with:</h4>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button
            className="button"
            onClick={props.handlerClearSelectedOption}>Back</button>
    </Modal>
);

export default OptionModal;
