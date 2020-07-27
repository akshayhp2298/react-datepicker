import React from "react";
import PropTypes from "prop-types";
import { addZero, isValid } from './date_utils';

export default class inputTime extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    timeString: PropTypes.string,
    timeInputLabel: PropTypes.string,
    customTimeInput: PropTypes.element,
  };

  constructor(props) {
    super(props);

    this.state = {
      time: this.props.timeString
    };
  }

  onTimeChange = (time , type) => {
    this.setState({ time });
    const date = new Date();
    if(type === 'hour'){
      date.setHours(time);
    }
    if(type === 'minutes'){
      date.setMinutes(time);
    }
    this.setState({time: date});
    this.props.onChange(date);
  };

  renderTimeInput = () => {
    const { time } = this.state;
    const hourValue = addZero(time.getHours()) ;
    const minutesValue = addZero(time.getMinutes()) ;
    const { timeString, customTimeInput } = this.props;

    if (customTimeInput) {
      return React.cloneElement(customTimeInput, {
        value: time,
        onChange: this.onTimeChange
      });
    }

    return (
      <>
        <input className="numInput react-datepicker-time__input react-datepicker__hour"
          type="number"
          aria-label="Hour"
          tabIndex="-1"
          min="1"
          max="12"
          onChange={ev => {
            this.onTimeChange(ev.target.value, 'hour');
          }}
          required
          defaultValue={hourValue}
        />

        <input
        className="numInput react-datepicker-time__input react-datepicker__minute"
        type="number"
        aria-label="Minute"
        tabIndex="-1"
        defaultValue={minutesValue}
        onChange={ev => {
          this.onTimeChange(ev.target.value, 'minutes');
        }}
        required
        min="0"
        max="59" />
      </>
    );
  };

  render() {
    return (
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
    );
  }
}
