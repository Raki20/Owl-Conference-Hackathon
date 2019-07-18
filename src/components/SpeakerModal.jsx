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
                <p>Talk: <strong>{speaker.topic}</strong></p>
                {
                    speaker.intern ? <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563403251/MBio_logo_dark_ylgbfb.png" alt="mercedes-io logo" /> : null
                }
            </div>

            <div className="speaker-modal-content">
                <div className="speaker-modal-about">
                    <p>{speaker.about}</p>
                </div>
                <div className="speaker-modal-picture">
                    <img src={speaker.image} alt={speaker.name} />
                </div>
            </div>

        </Modal>
    );
};

export default SpeakerModal;
