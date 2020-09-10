import React from "react";
import PropTypes from "prop-types";
import set from "date-fns";
import {
  addZero,
  isValid,
  formatDate,
  getHours,
  getMinutes,
  addMinutes,
  newDate,
  getStartOfDay
} from "./date_utils";
import TimeArrowDown from "./Icons/time-arrow-down";
import TimeArrowUp from "./Icons/time-arrow-up";

export default class inputTime extends React.Component {
  static propTypes = {
    onTimeChange: PropTypes.func,
    timeString: PropTypes.string,
    timeInputLabel: PropTypes.string,
    customTimeInput: PropTypes.element,
    timeFormat: PropTypes.string,
    id: PropTypes.string
  };

  constructor(props) {
    super(props);
    const time = this.props.timeString;
    let activeState;
    let hourValue = time.getHours();
    if (this.props.timeFormat === "12") {
      activeState = parseInt(hourValue, 10) > 12 ? "PM" : "AM";
    }
    let timeFormat = this.props.timeFormat === "12" ? "hh:mm" : "HH:mm";
    this.state = {
      time: formatDate(time, timeFormat),
      activeState,
      notValid: false,
      timeFormat
    };
  }

  componentDidMount() {
    window.addEventListener("click", this.handleoutsideClick, true);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleoutsideClick, true);
  }

  resetInputBox = date => {
    let activeState;
    let hourValue = date.getHours();
    if (this.props.timeFormat === "12") {
      activeState = parseInt(hourValue, 10) > 12 ? "PM" : "AM";
    }
    let timeFormat = this.props.timeFormat === "12" ? "hh:mm" : "HH:mm";
    this.setState({
      time: formatDate(date, timeFormat),
      activeState,
      notValid: false
    });
  };

  handleoutsideClick = event => {
    if (
      !event.target.className.includes("react-datepicker-time-inputbox") &&
      !event.target.className.includes("time-section-item")
    ) {
      const element = document.getElementById(`time-menu-${this.props.id}`);
      if (element) {
        element.classList.add("d-none");
      }
      this.setTimeValue();
    }
  };

  handleTimeInput = event => {
    const timeValue = event.target.value;
    const { timeFormat } = this.props;
    let notValid = this.state.notValid;
    // timeValue = timeValue.replace(":", "");
    // if (timeValue && !timeValue.match("^[0-9]*$")) {
    //   notValid = true;
    // } else if (timeValue && timeValue.length > 4) {
    //   notValid = true;
    // } else if (timeValue && timeValue.length === 1) {
    //   if (timeFormat === "12") {
    //     notValid = parseInt(timeValue, 10) > 12 ? true : false;
    //   } else {
    //     notValid =
    //       parseInt(timeValue, 10) > 23 && parseInt(timeValue, 10) < 0
    //         ? true
    //         : false;
    //   }
    // } else if (timeValue && timeValue.length === 2) {
    //   if (timeFormat === "12") {
    //     notValid = parseInt(timeValue, 10) > 12 ? true : false;
    //   } else {
    //     notValid = parseInt(timeValue, 10) > 23 ? true : false;
    //   }
    // } else if (timeValue && timeValue.length === 3) {
    //   if (timeFormat === "12") {
    //     notValid =
    //       parseInt(timeValue.substring(0, 1), 10) > 12 ||
    //       parseInt(timeValue.substring(1, 3), 10) > 60
    //         ? true
    //         : false;
    //   } else {
    //     notValid =
    //       parseInt(timeValue.substring(0, 1), 10) > 23 ||
    //       parseInt(timeValue.substring(1, 3), 10) > 60
    //         ? true
    //         : false;
    //   }
    // } else if (timeValue && timeValue.length === 4) {
    //   if (timeFormat === "12") {
    //     notValid =
    //       parseInt(timeValue.substring(0, 2), 10) > 12 ||
    //       parseInt(timeValue.substring(2, 4), 10) > 60
    //         ? true
    //         : false;
    //   } else {
    //     notValid =
    //       parseInt(timeValue.substring(0, 2), 10) > 23 ||
    //       parseInt(timeValue.substring(2, 4), 10) > 60
    //         ? true
    //         : false;
    //   }
    // }

    const timeArray = timeValue.split(":");
    let hour = parseInt(timeArray[0], 10);
    let min = parseInt(timeArray[1], 10);
    if (!(min >= 0 && min <= 59)) notValid = true;
    else {
      if (timeFormat === "12" && hour >= 1 && hour <= 12) notValid = false;
      else if (timeFormat === "24" && hour >= 0 && hour <= 23) notValid = false;
      else notValid = true;
    }
    if (isNaN(hour)) hour = "";
    if (isNaN(min)) min = "";
    // hour = hour.toString().length === 1 ? `0${hour}` : hour.toString()
    // min = min.toString().length === 1 ? `0${min}` : min.toString()
    const time = `${hour}:${min}`;
    this.setState(
      {
        time: event.target.value,
        notValid
      },
      () => {
        if (notValid) {
          const element = document.getElementById(`time-menu-${this.props.id}`);
          if (element) {
            element.classList.add("d-none");
          }
        }
      }
    );
    console.log("not valid", notValid);
    console.log("from handleInputTime");
    if (!notValid) {
      this.props.onTimeChange(event.target.value);
    } else {
      this.props.onTimeChange("InvalidDate");
    }
  };

  handleTimeSelectionClick = timeValue => {
    this.setState(
      {
        time: formatDate(timeValue, this.state.timeFormat)
      },
      () => {
        let hourValue = this.state.time.split(":")[0] || "00";
        const minsValue = this.state.time.split(":")[1] || "00";
        if (this.props.timeFormat === "12") {
          if (parseInt(hourValue, 10) < 12 && this.state.activeState === "PM") {
            hourValue = parseInt(hourValue, 10) + 12;
          }
          if (
            parseInt(hourValue, 10) >= 12 &&
            this.state.activeState === "AM"
          ) {
            hourValue = parseInt(hourValue, 10) - 12;
          }
        }
        this.props.onTimeChange(`${hourValue}:${minsValue}`);
      }
    );
  };

  setTimeValue = () => {
    let timeValue = this.state.time;
    const { notValid } = this.state;
    console.log("return from setTimeValue");
    if (notValid) {
      this.props.onTimeChange("InvalidDate");
      return;
    }
    let hourValue = timeValue.split(":")[0] || "00";
    const minsValue = timeValue.split(":")[1] || "00";
    if (this.props.timeFormat === "12") {
      if (parseInt(hourValue, 10) === 0) hourValue = 12;
      if (parseInt(hourValue, 10) < 12 && this.state.activeState === "PM") {
        hourValue = parseInt(hourValue, 10) + 12;
      }
      if (parseInt(hourValue, 10) >= 12 && this.state.activeState === "AM") {
        hourValue = parseInt(hourValue, 10) - 12;
      }
    }
    const time = `${addZero(parseInt(hourValue, 10))}:${addZero(
      parseInt(minsValue)
    )}`;
    this.setState(
      {
        time
      },
      () => {
        this.props.onTimeChange(
          `${addZero(parseInt(hourValue, 10))}:${minsValue}`
        );
      }
    );
  };

  renderTimeInput = () => {
    const { time, notValid } = this.state;
    const { id, timeFormat } = this.props;
    const { hour, mins } = this.state;
    const { timeString, customTimeInput } = this.props;
    let times = [];
    let intervals = 15;
    let totalSection = 1440;
    // if (timeFormat === '12') {
    //   totalSection = 720;
    // }
    let base = getStartOfDay(newDate());
    const multiplier = totalSection / intervals;
    for (let i = 0; i < multiplier; i++) {
      const currentTime = addMinutes(base, i * intervals);
      times.push(currentTime);
    }
    return (
      <>
        <div className="time-input-wrapper">
          <input
            type="text"
            onChange={this.handleTimeInput}
            value={time}
            id={`datepicker-time-input-${id}`}
            key={`datepicker-time-input-${id}`}
            className="react-datepicker-time-inputbox"
            maxLength={5}
            onClick={() => {
              const element = document.getElementById(
                `time-menu-${this.props.id}`
              );
              if (element) {
                element.classList.remove("d-none");
              }
            }}
            onKeyDown={event => {
              if (event.keyCode === 13) {
                this.setTimeValue();
              }
            }}
          />
          {notValid && <p className="text-danger">Invalid time entered</p>}
          <div className="time-selection-menu  d-none" id={`time-menu-${id}`}>
            <ul className="time-selection-ul">
              {timeFormat === "24"
                ? times.map((timeValue, i) => (
                    <li
                      key={i}
                      onClick={this.handleTimeSelectionClick.bind(
                        this,
                        timeValue
                      )}
                      className={"time-section-item"}
                    >
                      {formatDate(timeValue, "HH:mm")}
                    </li>
                  ))
                : times.map((timeValue, i) => (
                    <li
                      key={i}
                      onClick={this.handleTimeSelectionClick.bind(
                        this,
                        timeValue
                      )}
                      className={"time-section-item"}
                    >
                      {formatDate(timeValue, "hh:mm a")}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        {timeFormat !== "24" && (
          <div className="react-datepicker-am-pm-switch">
            <span
              className={`${this.state.activeState === "AM" ? "active" : ""}`}
              onClick={() => {
                this.setState(
                  {
                    activeState: "AM"
                  },
                  () => {
                    this.setTimeValue();
                  }
                );
              }}
            >
              AM
            </span>
            <span
              className={`${this.state.activeState === "PM" ? "active" : ""}`}
              onClick={() => {
                this.setState(
                  {
                    activeState: "PM"
                  },
                  () => {
                    this.setTimeValue();
                  }
                );
              }}
            >
              PM
            </span>
          </div>
        )}
      </>
    );
  };

  render() {
    return (
      <div className="react-datepicker-time-section">
        <div className="react-datepicker__input-time-container">
          <div className="react-datepicker-time__caption">
            {this.props.timeInputLabel}
          </div>
          <div className="react-datepicker-time__input-container">
            <div className="react-datepicker-time__input">
              {this.renderTimeInput()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
