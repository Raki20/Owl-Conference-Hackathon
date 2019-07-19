import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyle = {
    content: {
        display: 'flex',
        padding: 0,
        border: 'none',
        backgroundColor: 'black',
    }
};

const SpeakerModal = ({ isOpen, onClose, speaker }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Speaker Modal"
            style={modalStyle}
            overlayClassName="overlay"
        >
            <div className="speaker-modal">
                <div className="modal-content">
                    <div className="modal-content-title">
                        <div className="modal-content-close" role="presentation" onClick={onClose}>x</div>
                        <h2>{speaker.name}</h2>
                        <p style={{ fontFamily: "DaimlerCS-Light"}}>{speaker.role}</p>
                        <p>Talk: <strong>{speaker.topic}</strong></p>
                        {
                            speaker.intern ? <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563403251/MBio_logo_dark_ylgbfb.png" alt="mercedes-io logo" /> : null
                        }
                    </div>
                    <div className="modal-content-about">
                        <p>{speaker.about}</p>
                    </div>
                </div>

                <div className="modal-image">
                    <img src={speaker.image} alt={speaker.name} />
                </div>
            </div>
        </Modal>
    );
};

export default SpeakerModal;
