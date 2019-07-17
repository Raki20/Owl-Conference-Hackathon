import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={}
            contentLabel="Speaker Modal"
        >
            <div>
            <p>{speaker.name}</p>
            <p> {speaker.role}</p>
            <p> {speaker.about}</p>
            </div>

            <div>
                <img src={speaker.image} />
            </div>
        </Modal>
    );
};

export default SpeakerModal;
