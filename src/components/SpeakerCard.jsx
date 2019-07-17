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
                <p>
                    {speaker.name}
                </p>
                <p>
                    {speaker.role}
                </p>
            </div>
        </div>
    );
};

export default SpeakerCard;
