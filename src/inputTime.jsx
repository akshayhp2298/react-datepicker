import React from "react";
import PropTypes from "prop-types";
import {
  addZero, isValid, formatDate, getHours,
  getMinutes,
  addMinutes,
  newDate,
  getStartOfDay,
} from './date_utils';
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

      if (parseInt(hourValue, 10) === 0) {
        hourValue = 12;
      }
      time.setHours(addZero(hourValue));
    }

    this.state = {
      time: formatDate(time, 'HH:mm'),
      activeState,
      hour: addZero(parseInt(hourValue, 10)),
      mins: addZero(time.getMinutes()),
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleoutsideClick, true);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.timeString !== this.props.timeString) {

    //   const time = this.props.timeString;
    //   let activeState;
    //   let hourValue = time.getHours();

    //   if (this.props.timeFormat === '12' && parseInt(hourValue, 10) !== 12) {

    //     activeState = parseInt(hourValue, 10) > 12 ? 'PM' : this.state.activeState;
    //     if (activeState !== this.state.activeState) {
    //       this.setState({
    //         activeState,
    //       });
    //     }
    //   }

    //   if (this.props.timeFormat === '12') {
    //     hourValue = time.getHours();
    //     if (parseInt(hourValue, 10) > 12) {
    //       hourValue = parseInt(hourValue, 10) - 12;
    //       hourValue = hourValue || '';
    //     }

    //     if (parseInt(hourValue, 10) === 0) {
    //       hourValue = 12;
    //     }
    //     time.setHours(addZero(hourValue));
    //   }
    //   if (parseInt(hourValue, 10) !== this.state.hour) {
    //     this.setState({
    //       hour: addZero(parseInt(hourValue, 10)),
    //     });
    //   }
    //   if (time.getMinutes() !== this.state.mins) {
    //     this.setState({
    //       mins: addZero(parseInt(time.getMinutes(), 10)),
    //     });
    //   }
    //   this.setState({
    //     time,
    //   });
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleoutsideClick, true);
  }

  handleoutsideClick = event => {
    console.log(event.target);
    if (event.target.className !== 'react-datepicker-time-inputbox' || event.target.classList !== 'time-section-item') {
      const element = document.getElementsByClassName('time-selection-menu');
      console.log(element);
      if (element && element[0]) {
        element[0].classList.add('d-none');
      }
    }
    // if (event.target.className !== 'react-datepicker-time__input' || event.target.className && event.target.className.baseVal !== 'time-input-arrow') {
    //   const { hour, mins } = this.state;
    //   const date = this.props.timeString;
    //   const hourValue = addZero(parseInt(hour, 10));
    //   const minsValue = addZero(parseInt(mins, 10));
    //   this.setState({
    //     hour: hourValue,
    //     mins: minsValue,
    //   });
    // }
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

      if (parseInt(timeValue, 10) === 12 && this.state.activeState === 'AM') {
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
      date.setMinutes(time !== 'NAN' ? time : '00');
      this.setState({
        mins: time !== 'NAN' ? time : '',
      });
    }
    if (time) {
      this.setState({ time: date, }, () => {
        this.props.onTimeChange(date);
      });
    }
  };

  handleTimeInput = event => {
    console.log(event.target.value);
    this.setState({
      time: event.target.value,
    });
  };

  handleTimeSelectionClick = (timeValue) => {
    console.log(timeValue);
    this.setState({
      time: formatDate(timeValue, 'HH:mm')
    });
  };

  renderTimeInput = () => {
    const { time } = this.state;
    const { id, timeFormat } = this.props;
    const { hour, mins } = this.state;
    const { timeString, customTimeInput } = this.props;
    let times = [];
    let intervals = 15;
    let totalSection = 1440;
    if (timeFormat === '12') {
      totalSection = 720;
    }
    let base = getStartOfDay(newDate());
    const multiplier = 1440 / intervals;
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
            onClick={() => {
              const element = document.getElementsByClassName('time-selection-menu');
              console.log(element);
              if (element) {
                element[0].classList.remove('d-none');
              }
            }}
          />
          <div className="time-selection-menu d-none">
            <ul className="time-selection-ul">
              {times.map((timeValue, i) => (
                <li
                  key={i}
                  onClick={this.handleTimeSelectionClick.bind(this, timeValue)}
                  className={'time-section-item'}
                >
                  {formatDate(timeValue, 'HH:mm')}
                </li>))
              }
            </ul>
          </div>
        </div>
        {/* <div className="numInputWrapper">
          <input className="numInput react-datepicker-time__input react-datepicker__hour"
            type="number"
            aria-label="Hour"
            min="0"
            id={`datepicker-hour-input-${id}`}
            key={`datepicker-hour-input-${id}`}
            max={`${timeFormat === '24' ? `${parseInt(timeFormat, 10) - 1}` : '12'}`}
            onChange={ev => {
              if (ev.target.value) {
                if (ev.target.value.toString().length < 3) {
                  let hourValue = parseInt(ev.target.value, 10);
                  if (timeFormat === '12' && hourValue > 12) {
                    hourValue = hourValue % 12;
                    hourValue = hourValue == 0 ? 12 : hourValue;
                  }
                  if (timeFormat === '24' && hourValue > 24) {
                    hourValue = hourValue % 24;
                    hourValue = hourValue == 0 ? '00' : hourValue;
                  }

                  if (timeFormat === '12' && ev.target.value === '00') {
                    hourValue = 12;
                  }

                  if (timeFormat === '24' && hourValue === 24) {
                    hourValue = '00';
                  }
                  if (ev.nativeEvent.inputType !== 'deleteContentForward' && ev.nativeEvent.inputType !== 'deleteContentBackward' && ev.nativeEvent.inputType !== 'insertText') {
                    hourValue = addZero(hourValue);
                  }
                  if (hourValue.toString().length > 2) {
                    hourValue = addZero(hourValue);
                  }
                  this.onTimeChange(hourValue, 'hour');
                } else {
                  const hourValue = addZero(parseInt(hour, 10));
                  this.onTimeChange(hourValue, 'hour');
                }
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
              let setHour = addZero(parseInt(hourValue, 10) + 1);
              if (setHour === '24') {
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
              let setHour = addZero(parseInt(hourValue, 10) - 1);
              if (setHour === '00') {
                setHour = '12';
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
            id={`datepicker-mins-input-${id}`}
            key={`datepicker-mins-input-${id}`}
            value={mins}
            onChange={ev => {
              if (ev.target.value) {
                if (ev.target.value.toString().length < 3) {
                  let minsValue = parseInt(ev.target.value, 10);
                  if (minsValue < 61) {
                    minsValue = minsValue == 60 ? '00' : minsValue;
                  } else {
                    minsValue = '00';
                  }
                  if (ev.nativeEvent.inputType !== 'deleteContentForward' && ev.nativeEvent.inputType !== 'deleteContentBackward' && ev.nativeEvent.inputType !== 'insertText') {
                    minsValue = addZero(minsValue);
                  }
                  this.onTimeChange(minsValue, 'minutes');
                }
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

        </div> */}
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
