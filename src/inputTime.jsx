import React from "react";
import PropTypes from "prop-types";
import { addZero, isValid } from './date_utils';
import TimeArrowDown from './Icons/time-arrow-down';
import TimeArrowUp from './Icons/time-arrow-up';

export default class inputTime extends React.Component {
  static propTypes = {
    onTimeChange: PropTypes.func,
    timeString: PropTypes.string,
    timeInputLabel: PropTypes.string,
    customTimeInput: PropTypes.element,
    timeFormat: PropTypes.string,
    id: PropTypes.string,
  };

  constructor(props) {
    super(props);
    const time = this.props.timeString;
    let activeState;
    let hourValue = time.getHours();
    if (this.props.timeFormat === '12') {
      hourValue = time.getHours();
      activeState = hourValue >= 12 ? 'PM' : 'AM';
      if (parseInt(hourValue, 10) > 12) {
        hourValue = parseInt(hourValue, 10) - 12;
        hourValue = hourValue || 12;
      }
      time.setHours(addZero(hourValue));
    }

    this.state = {
      time,
      activeState,
      hour: addZero(hourValue),
      mins: addZero(time.getMinutes()),
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timeString !== this.props.timeString) {
      const time = this.props.timeString;
      const { id } = this.props;
      let activeState;
      let hourValue = addZero(time.getHours());
      if (this.props.timeFormat === '12' && parseInt(hourValue,10) !== 12) {

        activeState = parseInt(hourValue,10) > 12  ? 'PM' : 'AM';
        if(activeState !== this.state.activeState){
          this.setState({
            activeState,
          });
        }
      }
      this.setState({
        time,
      });
    }
  }

  onTimeChange = (time, type) => {
    let timeValue = time !== 'NAN' && time ? time : this.props.timeFormat === '12' ? '12' : '24';
    const date = this.props.timeString;
    if (this.props.timeFormat === '12') {
      if (this.state.activeState === 'PM' && parseInt(timeValue, 10) < 12) {
        timeValue = addZero(parseInt(timeValue, 10) + 12);
      }

      if (this.state.activeState === 'AM' && parseInt(timeValue, 10) > 12) {
        timeValue = parseInt(timeValue, 10) - 12;
        timeValue = addZero(parseInt(timeValue, 10)) || 12;
      }

      if(parseInt(timeValue, 10) === 12){
        timeValue = '00';
      }
    }

    if (type === 'hour') {
      date.setHours(timeValue);
      this.setState({
        hour: time !== 'NAN' ? time : timeValue,
      });
    }
    if (type === 'minutes') {
      date.setMinutes(time);
      this.setState({
        mins: time !== 'NAN' ? time : '00',
      });
    }
    this.setState({ time: date, }, () => {
      this.props.onTimeChange(date);
    });
  };

  renderTimeInput = () => {
    const { time } = this.state;
    const { id, timeFormat } = this.props;
    const { hour, mins } = this.state;
    const { timeString, customTimeInput } = this.props;
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
            min="0"
            id={`datepicker-hour-input-${id}`}
            key={`datepicker-hour-input-${id}`}
            max={`${timeFormat === '24' ? `${parseInt(timeFormat, 10) - 1}` : '12'}`}
            onChange={ev => {
              if (ev.target.value) {
                let hourValue = parseInt(ev.target.value, 10);
                if (timeFormat === '12' && hourValue > 12) {
                  hourValue = hourValue % 12;
                  hourValue = hourValue == 0 ? 12 : hourValue;
                }
                if (timeFormat === '24' && hourValue > 24) {
                  hourValue = hourValue % 24;
                  hourValue = hourValue == 0 ? '00' : hourValue;
                }

                if(timeFormat === '12' && ev.target.value === '00'){
                  hourValue = 12;
                }
                if(timeFormat === '24' && hourValue === 24){
                  hourValue = '00';
                }
                if(ev.nativeEvent.inputType !== 'deleteContentForward' && ev.nativeEvent.inputType !== 'deleteContentBackward'  && ev.nativeEvent.inputType !== 'insertText'){
                  hourValue = addZero(hourValue);
                }
                  this.onTimeChange(hourValue, 'hour');
              } else {
                this.onTimeChange(ev.target.value, 'hour');
              }
            }}
            required
            value={hour}
          />
          <span className="hour-arrow-up input-arrows">
            <TimeArrowUp onClick={() => {
              let hourValue = parseInt(hour, 10);
              if (timeFormat === '24') {
                hourValue = hourValue === 24 ? '00' : hourValue;
              }

              if (timeFormat === '12') {
                hourValue = hourValue === 12 ? '00' : hourValue;
              }
              const setHour = addZero(parseInt(hourValue, 10) + 1);
              if(setHour === '24'){
                setHour = '00';
              }
              this.onTimeChange(setHour, 'hour');
            }}
            />
          </span>
          <span className="hour-arrow-down input-arrows">
            <TimeArrowDown onClick={() => {
              let hourValue = parseInt(hour, 10);
              if (timeFormat === '24') {
                hourValue = hourValue === 0 ? '24' : hourValue;
              }

              if (timeFormat === '12') {
                hourValue = hourValue === 0 ? '12' : hourValue;
              }
              const setHour = addZero(parseInt(hourValue, 10) - 1);
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
            key={`datepicker-mins-input-${id}`}
            value={mins}
            onChange={ev => {
              if (ev.target.value) {
                let minsValue = parseInt(ev.target.value, 10);
                if (minsValue < 61) {
                  minsValue = minsValue == 60 ? '00' : minsValue;
                } else{
                  minsValue = '00';
                }
                if(ev.nativeEvent.inputType !== 'deleteContentForward' && ev.nativeEvent.inputType !== 'deleteContentBackward'  && ev.nativeEvent.inputType !== 'insertText'){
                  minsValue = addZero(minsValue);
                }
                  this.onTimeChange(minsValue, 'minutes');
              } else {
                this.onTimeChange(ev.target.value, 'minutes');
              }
            }}
            required
            min="0"
            max="59" />
          <span className="mins-arrow-up input-arrows">
            <TimeArrowUp onClick={() => {
              let minsValue = parseInt(mins, 10);
              minsValue = minsValue === 60 ? '00' : minsValue;
              const setMins = addZero(minsValue + 1);
              this.onTimeChange(setMins, 'minutes');
            }}
            />
          </span>
          <span className="mins-arrow-down input-arrows">
            <TimeArrowDown onClick={() => {
              let minsValue = parseInt(mins, 10);
              minsValue = minsValue === 0 ? '60' : minsValue;
              const setMins = addZero(minsValue - 1);
              this.onTimeChange(setMins, 'minutes');
            }}
            />
          </span>

        </div>
        {timeFormat !== '24' &&
          <div className="react-datepicker-am-pm-switch">
            <span className={`${this.state.activeState === 'AM' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeState: 'AM',
              }, () => {
                this.onTimeChange(hour, 'hour');
              });
            }}>AM</span>
            <span className={`${this.state.activeState === 'PM' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeState: 'PM',
              }, () => {
                this.onTimeChange(hour, 'hour');
              });
            }}>PM</span>
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
