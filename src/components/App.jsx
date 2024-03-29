import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Info from "./Info";
import Jobs from "./Jobs";
import SpeakerModal from "./SpeakerModal";
import Loading from "./Loading";
import Footer from "./Footer";


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
            isLoading: true
        };
    }

    componentDidMount () {
        setTimeout(() => {
            this.getConferenceInfo();
        }, 500);
        this.reportWindowSize();
        window.addEventListener('resize', this.reportWindowSize);
    }

    getConferenceInfo = () => {
        fetch("https://api.jsonbin.io/b/5d2f4c5450ba093dda160d01/3")
            .then(response => response.json())
            .then(data => (
                this.setState({ ...data, isLoading: false })
            ));
    }

    reportWindowSize = () => {
        if (window.innerWidth < 780) {
            this.setState({ screen: "mobile" });
        } else {
            this.setState({ screen: "laptop" });
        }
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
            currentSpeaker,
            isLoading,
            screen
        } = this.state;

        if (isLoading) {
            return (
                <div className="loader">
                    <Loading />
                </div>
            );
        }
        return (
            <Fragment>
                <Navbar screen={screen} />
                <Home about={about} />
                <Speakers speakers={speakers} onClickCard={this.handleClickSpeaker} />
                <Schedule timetable={timetable} />
                <Info location={location} />
                <Jobs jobs={jobs} />
                <Footer />
                <SpeakerModal
                    isOpen={isModalOpen}
                    speaker={currentSpeaker}
                    onClose={this.handleCloseModal}
                />
            </Fragment>
        );
    }
}

export default App;
