import React from "react";

const SpeakerCard = ({ speaker, onClick }) => {
    const handleClickCard = (e) => {
        e.preventDefault();
        onClick(speaker);
    };

    return (
        <div className="speaker-card" role="presentation" onClick={handleClickCard}>
            <img src={speaker.image} alt={speaker.name} />
            <div className="speaker-card-text">
                <div className="speaker-card-text-align">

                    <strong>{speaker.name}</strong>

                    {
                        speaker.intern ? <img src="https://res.cloudinary.com/dciypbwrh/image/upload/v1563403251/MBio_logo_dark_ylgbfb.png" alt="mercedes-io logo" /> : null
                    }
                </div>
                <p>
                    {speaker.role}
                </p>
            </div>
        </div>
    );
};

export default SpeakerCard;
