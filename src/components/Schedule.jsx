import React, { Component } from 'react';
import ScheduleTab from "./ScheduleTab";
import ScheduleDay from "./ScheduleDay";

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: "12.10.2019"
        };
    }

    markAsSelectTab = (selectedDay) => {
        this.setState({ selectedDay });
    }

    getFilteredTimeslot = () => {
        const { timetable } = this.props;
        const { selectedDay } = this.state;
        const filteredTimetable = timetable.filter(time => time.date === selectedDay);
        return filteredTimetable[0].timeslot;
    }

    render() {
        const { timetable } = this.props;
        return (
            <section id="speakers">
                <h2>Schedule</h2>
                {
                    timetable.map(day => (
                        <ScheduleTab
                            dayTitle={day.date}
                            dayName={day.name}
                            key={day.date}
                            handleSelectTab={this.markAsSelectTab}
                        />
                    ))
                }
                <ScheduleDay dayTimeslot={this.getFilteredTimeslot()} />
            </section>
        );
    }
};

export default Schedule;
