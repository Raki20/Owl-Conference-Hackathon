import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Speaker Modal"
        >
            <div className="speaker-modal-text">
                <h2>{speaker.name}</h2>
                <p>{speaker.role}</p>
                <p>{speaker.topic}</p>
            </div>

            <div className="speaker-modal">
                <p>{speaker.about}</p>
                
                <div className="speaker-modal-picture">
                    <img src={speaker.image} alt={speaker.name} />
                </div>
            </div>
        </Modal>
    );
};

export default SpeakerModal;
