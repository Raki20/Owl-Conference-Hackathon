import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Speakers from "./Speakers";
import Schedule from "./Schedule";
import Info from "./Info";
import Jobs from "./Jobs";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            location: {},
            speakers: [],
            timetable: [],
            about: {},
            isLoading: true
        };
    }

    componentDidMount () {
        this.getConferenceInfo();
    }

    getConferenceInfo = () => {
        fetch("https://api.jsonbin.io/b/5d1cc16ff467d60d75acb5bd/1")
            .then(response => response.json())
            .then(data => (
                this.setState({ ...data, isLoading: false })
            ));
    }

    render() {
        const { jobs, location, speakers, timetable, about, isLoading } = this.state;
        if (isLoading) {
            return <p>isLoading.....</p>;
        }
        return (
            <div>
                <Navbar />
                <Home />
                <Speakers />
                <Schedule schedule={timetable} />
                <Info />
                <Jobs />
            </div>
        );
    }
}

export default App;
