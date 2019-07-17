import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            // style={}
            contentLabel="Example Modal"
        >
            <h2>Hello</h2>
        </Modal>

    );
};

export default SpeakerModal;
