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
        const { selectedDay } = this.state;
        return (
            <section id="schedule" className="schedule">
                <h2>Schedule</h2>
                <div className="schedule-days-list">
                    <div className="days">
                        {
                            timetable.map(day => (
                                <div className={selectedDay === day.date ? "day-title-selected" : "day-title" } key={day.date}>
                                    <ScheduleTab
                                        dayTitle={day.date}
                                        dayName={day.name}
                                        handleSelectTab={this.markAsSelectTab}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="schedule-details">
                        <ScheduleDay dayTimeslot={this.getFilteredTimeslot()} />
                    </div>
                </div>
            </section>
        );
    }
};

export default Schedule;
