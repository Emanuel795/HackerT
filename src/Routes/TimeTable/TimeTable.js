import React, { Fragment } from "react";
import "./TimeTable.css";

function TimeTable() {
  return (
    <Fragment>
      <h2 id="schedule-heading">Conference Schedule</h2>
      <div className="schedule" aria-labelledby="schedule-heading">
        <span
          className="track-slot"
          aria-hidden="true"
          style="grid-column: track-1; grid-row: tracks;"
        >
          Track 1
        </span>
        <span
          className="track-slot"
          aria-hidden="true"
          style="grid-column: track-2; grid-row: tracks;"
        >
          Track 2
        </span>
        <span
          className="track-slot"
          aria-hidden="true"
          style="grid-column: track-3; grid-row: tracks;"
        >
          Track 3
        </span>
        <span
          className="track-slot"
          aria-hidden="true"
          style="grid-column: track-4; grid-row: tracks;"
        >
          Track 4
        </span>

        <h2 className="time-slot" style="grid-row: time-0800;">
          8:00am
        </h2>

        <div
          className="session session-1 track-1"
          style="grid-column: track-1; grid-row: time-0800 / time-0900;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 9:00</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-2 track-2"
          style="grid-column: track-2; grid-row: time-0800 / time-0830;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 8:30</span>
          <span className="session-track">Track: 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-3 track-3"
          style="grid-column: track-3; grid-row: time-0800 / time-0830;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 8:30</span>
          <span className="session-track">Track: 3</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-4 track-4"
          style="grid-column: track-4; grid-row: time-0800 / time-1000;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:00 - 10:00</span>
          <span className="session-track">Track: 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot" style="grid-row: time-0830;">
          8:30am
        </h2>

        <div
          className="session session-5 track-3"
          style="grid-column: track-3; grid-row: time-0830 / time-1000;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">8:30 - 10:00</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot" style="grid-row: time-0900;">
          9:00am
        </h2>

        <div
          className="session session-6 track-1"
          style="grid-column: track-1-start / track-2-end; grid-row: time-0900 / time-1000;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">9:00 - 10:00</span>
          <span className="session-track">Track: 1 & 2</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot" style="grid-row: time-1000;">
          10:00am
        </h2>

        <div
          className="session session-7 track-all"
          style="grid-column: track-1-start / track-4-end; grid-row: time-1000 / time-1030;"
        >
          <h3 className="session-title">Take a break!</h3>
        </div>

        <h2 className="time-slot" style="grid-row: time-1030;">
          10:30am
        </h2>

        <div
          className="session session-8 track-1"
          style="grid-column: track-1; grid-row: time-1030 / time-1130;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:30</span>
          <span className="session-track">Track: 1</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-9 track-2"
          style="grid-column: track-2-start / track-3-end; grid-row: time-1030 / time-1100;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:00</span>
          <span className="session-track">Track: 2 & 3</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <div
          className="session session-10 track-4"
          style="grid-column: track-4; grid-row: time-1030 / time-1100;"
        >
          <h3 className="session-title">
            <a href="#">Talk Title</a>
          </h3>
          <span className="session-time">10:30 - 11:00</span>
          <span className="session-track">Track: 4</span>
          <span className="session-presenter">Presenter</span>
        </div>

        <h2 className="time-slot" style="grid-row: time-1100;">
          11:00am
        </h2>

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