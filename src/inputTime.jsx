import React from "react";
import PropTypes from "prop-types";
import { addZero, isValid } from './date_utils';
import TimeArrowDown from './Icons/time-arrow-down';
import TimeArrowUp from './Icons/time-arrow-up';

export default class inputTime extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    timeString: PropTypes.string,
    timeInputLabel: PropTypes.string,
    customTimeInput: PropTypes.element,
    timeFormat: PropTypes.string,
    id: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      time: this.props.timeString
    };
  }

  onTimeChange = (time, type) => {
    console.log(time, type);
    const date = this.props.timeString;
    if (type === 'hour') {
      date.setHours(time);
    }
    if (type === 'minutes') {
      date.setMinutes(time);
    }
    this.setState({ time: date }, () => {
      this.props.onChange(date);
    });
  };

  renderTimeInput = () => {
    const { time } = this.state;
    const { id } = this.props;
    const hourValue = addZero(time.getHours());
    const minutesValue = addZero(time.getMinutes());
    const { timeString, customTimeInput, timeFormat } = this.props;
    if (customTimeInput) {
      return React.cloneElement(customTimeInput, {
        value: time,
        onChange: this.onTimeChange
      });
    }

    return (
      <>
        <div className="numInputWrapper">
          <input className="numInput react-datepicker-time__input react-datepicker__hour"
            type="number"
            aria-label="Hour"
            tabIndex="-1"
            min="1"
            id={`datepicker-hour-input-${id}`}
            max={`${parseInt(timeFormat, 10) - 1}`}
            onChange={ev => {
              this.onTimeChange(ev.target.value, 'hour');
            }}
            required
            defaultValue={hourValue}
          />
          <span className="hour-arrow-up input-arrows">
            <TimeArrowUp onClick={() => {
              const setHour = addZero(hourValue + 1);
              if (document.getElementById(`datepicker-hour-input-${id}`)) {
                document.getElementById(`datepicker-hour-input-${id}`).value = setHour;
              }
              this.onTimeChange(setHour, 'hour');
            }}
            />
          </span>
          <span className="hour-arrow-down input-arrows">
            <TimeArrowDown onClick={() => {
              const setHour = addZero(hourValue - 1);
              if (document.getElementById(`datepicker-hour-input-${id}`)) {
                document.getElementById(`datepicker-hour-input-${id}`).value = setHour;
              }
              this.onTimeChange(setHour, 'hour');
            }}
            />
          </span>
        </div>
        <span className="react-datepicker-time-separator">:</span>
        <div className="numInputWrapper">
          <input
            className="numInput react-datepicker-time__input react-datepicker__minute"
            type="number"
            aria-label="Minute"
            tabIndex="-1"
            id={`datepicker-mins-input-${id}`}
            defaultValue={minutesValue}
            onChange={ev => {
              this.onTimeChange(ev.target.value, 'minutes');
            }}
            required
            min="0"
            max="59" />
          <span className="mins-arrow-up input-arrows">
            <TimeArrowUp onClick={() => {
              const setMins = addZero(minutesValue + 1);
              if (document.getElementById(`datepicker-mins-input-${id}`)) {
                document.getElementById(`datepicker-mins-input-${id}`).value = setMins;
              }
              this.onTimeChange(setMins, 'minutes');
            }}
            />
          </span>
          <span className="mins-arrow-down input-arrows">
            <TimeArrowDown onClick={() => {
              const setMins = addZero(minutesValue -1);
              if (document.getElementById(`datepicker-mins-input-${id}`)) {
                document.getElementById(`datepicker-mins-input-${id}`).value = setMins;
              }
              this.onTimeChange(setMins, 'minutes');
            }}
            />
          </span>

        </div>
        {timeFormat !== '24' &&
          <div className="react-datepicker-am-pm-switch">
            <span className="active">AM</span>
            <span>PM</span>
          </div>}
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
