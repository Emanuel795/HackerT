import React, { Fragment } from "react";

function TimeTable() {
  return (
    <Fragment>
      <div className="schedule" aria-labelledby="schedule-heading">
        <span className="track-slot" aria-hidden="true">
          Track 1
        </span>
        <span className="track-slot" aria-hidden="true">
          Track 2
        </span>
        <span className="track-slot" aria-hidden="true">
          Track 3
        </span>
        <span className="track-slot" aria-hidden="true">
          Track 4
        </span>

        <h2 className="time-slot">8:00am</h2>

        <div className="session session-1 track-1">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 9:00</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div className="session session-2 track-2">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 8:30</span>
          <span className="session-track">Track: 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div className="session session-3 track-3">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 8:30</span>
          <span className="session-track">Track: 3</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div className="session session-4 track-4">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 10:00</span>
          <span className="session-track">Track: 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot">8:30am</h2>

        <div className="session session-5 track-3">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:30 - 10:00</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot">9:00am</h2>

        <div className="session session-6 track-1">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">9:00 - 10:00</span>
          <span className="session-track">Track: 1 & 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot">10:00am</h2>

        <div className="session session-7 track-all">
          <h3 className="session-title">Take a break!</h3>
        </div>

        <h2 className="time-slot">10:30am</h2>

        <div className="session session-8 track-1">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:30</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div className="session session-9 track-2">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:00</span>
          <span className="session-track">Track: 2 & 3</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div className="session session-10 track-4">
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:00</span>
          <span className="session-track">Track: 4</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot">11:00am</h2>

        <div
          className="session session-11 track-2"
          style="grid-column: track-2; grid-row: time-1100 / time-1200;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">11:00 - 12:00</span>
          <span className="session-track">Track: 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-11 track-3"
          style="grid-column: track-3; grid-row: time-1100 / time-1200;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">11:00 - 12:00</span>
          <span className="session-track">Track: 3</span>
          <span className="session-presenter">Presenter</span>
        </div>
      </div>
    </Fragment>
  );
}

export default TimeTable;
