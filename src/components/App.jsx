import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Info from "./Info";
import Jobs from "./Jobs";
import SpeakerModal from "./SpeakerModal";

// import apiStuff from '../../mercedesapi.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            location: {},
            speakers: [],
            timetable: [],
            about: {},
            isModalOpen: false,
            currentSpeaker: {},
        };
    }

    componentDidMount () {
        this.getConferenceInfo();
        // this.setState(apiStuff);
    }

    getConferenceInfo = () => {
        fetch("https://api.jsonbin.io/b/5d2f4c5450ba093dda160d01/3")
            .then(response => response.json())
            .then(data => (
                this.setState(data)
            ));
    }

    handleCloseModal = () => this.setState({ isModalOpen: false })

    handleClickSpeaker = speaker => this.setState({ 
        isModalOpen: true,
        currentSpeaker: speaker
    })

    render() {
        const {
            jobs,
            location,
            speakers,
            timetable,
            about,
            isModalOpen,
            currentSpeaker
        } = this.state;

        return (
            <div>
                <Navbar />
                <Home />
                <Speakers speakers={speakers} onClickCard={this.handleClickSpeaker} />
                <Schedule />
                <Info />
                <Jobs />
                <SpeakerModal isOpen={isModalOpen} speaker={currentSpeaker} onClose={this.handleCloseModal} />
            </div>
        );
    }
}

export default App;
