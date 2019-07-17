import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: {},
            location: {},
            speakers: {},
            timetable: {},
            about: {}
        };
    }

    componentDidMount () {
        this.getConferenceInfo();
    }

    getConferenceInfo = () => {
        fetch("https://api.jsonbin.io/b/5d1cc16ff467d60d75acb5bd/1")
            .then(response => response.json())
            .then(data => (
                this.setState(data)
            ));
    }

    render() {
        const { jobs, location, speakers, timetable, about } = this.state;
        return (
            <div>
                <h1>
                    Hello from
                    <span>
                        { ` ${process.env.HOME_URL}`}
                    </span>
                </h1>
            </div>
        );
    }
}

export default App;
