import React from "react";
import SpeakerCard from "./SpeakerCard";

const Speakers = ({ speakers, onClickCard }) => {
    return (
        <section id="speakers" className="speakers-section">
            <h2>Speakers</h2>
            <div className="speakers-list">
                {
                    speakers.map(speaker => (
                        <SpeakerCard speaker={speaker} key={speaker.name} onClick={onClickCard} />
                    ))
                }
            </div>
        </section>
    );
};

export default Speakers;
