import React, { Component } from 'react';
import ScheduleTab from "./ScheduleTab";
import ScheduleDay from "./ScheduleDay";

class Schedule extends Component {
    constructor(props) {
        const { timetable } = props;
        super(props);
        this.state = {
            selectedDay: timetable[0].date
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
            <section id="schedule" className="schedule">
                <div className="schedule-days-list">
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
                </div>
                <div className="schedule-details">
                    <ScheduleDay dayTimeslot={this.getFilteredTimeslot()} />
                </div>
            </section>
        );
    }
};

export default Schedule;
