import React from 'react';

const Speakers = (speakers) => {
    return (
        <section id="speakers">
            <h2>Meet ours amazing speakers...</h2>

            {speakers.map((speaker) => {
                <SpeakerCard speaker={speaker} />
            })
            }
        </section>
    );
};

export default Speakers;
