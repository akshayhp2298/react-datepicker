import React from "react";
import PropTypes from "prop-types";
import set from 'date-fns'
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
    timeValue: PropTypes.string,
  };

  constructor(props) {
    super(props);
    const time = this.props.timeString;
    let activeState;
    let hourValue = time.getHours();
    if (this.props.timeFormat === '12') {
      activeState = parseInt(hourValue, 10) > 12 ? 'PM' : 'AM';
    }
    let timeFormat = this.props.timeFormat === '12' ? 'hh:mm' : 'HH:mm'
    this.state = {
      time: formatDate(time, timeFormat),
      activeState,
      notValid: false,
      timeFormat
    };
  }

  componentDidMount() {
    console.log(this.props, this.state);
    window.addEventListener('click', this.handleoutsideClick, true);
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeValue !== prevProps.timeValue) {
      let { activeState, time } = this.state;
      if (this.props.timeFormat === '12') {
        const hourValue = this.props.timeString.getHours();
        activeState = parseInt(hourValue, 10) > 12 ? 'PM' : this.state.activeState;
        if (activeState !== this.state.activeState) {
          this.setState({
            activeState,
          });
        }
      }

      let timeValue = formatDate(this.props.timeString, this.state.timeFormat);
      if (timeValue !== time) {
        this.setState({
          time: timeValue,
        });
      }

    }
  }


  componentWillUnmount() {
    window.removeEventListener('click', this.handleoutsideClick, true);
  }

  handleoutsideClick = event => {
    if (event.target.className !== 'react-datepicker-time-inputbox' || event.target.classList !== 'time-section-item') {
      const element =  document.getElementById(`time-menu-${this.props.id}`);
      if (element) {
        element.classList.add('d-none');
        this.setTimeValue();
      }
    }
  }

  handleTimeInput = event => {
    let timeValue = event.target.value;
    const { timeFormat } = this.props;
    let notValid = this.state.notValid;
    timeValue = timeValue.replace(':', '');

    if (timeValue && !timeValue.match('^[0-9]*$')) {
      notValid = true;
    } else if (timeValue && (timeValue.length > 4)) {
      notValid = true;
    } else if (timeValue && timeValue.length === 1) {
      if (timeFormat === '12') {
        notValid = parseInt(timeValue, 10) > 12 ? true : false;
      } else {
        notValid = parseInt(timeValue, 10) > 24 ? true : false;
      }
    } else if (timeValue && timeValue.length === 2) {
      if (timeFormat === '12') {
        notValid = parseInt(timeValue, 10) > 12 ? true : false;
      } else {
        notValid = parseInt(timeValue, 10) > 24 ? true : false;
      }
    } else if (timeValue && timeValue.length === 3) {
      if (timeFormat === '12') {
        notValid = parseInt(timeValue.substring(0, 1), 10) > 12 || parseInt(timeValue.substring(1, 3), 10) > 60 ? true : false
      } else {
        notValid = parseInt(timeValue.substring(0, 1), 10) > 24 || parseInt(timeValue.substring(1, 3), 10) > 60 ? true : false
      }
    } else if (timeValue && timeValue.length === 4) {
      if (timeFormat === '12') {
        notValid = parseInt(timeValue.substring(0, 2), 10) > 12 || parseInt(timeValue.substring(2, 4), 10) > 60 ? true : false
      } else {
        notValid = parseInt(timeValue.substring(0, 2), 10) > 24 || parseInt(timeValue.substring(2, 4), 10) > 60 ? true : false
      }
    }
    this.setState({
      time: event.target.value,
      notValid,
    }, () => {
      if (notValid) {
        const element = document.getElementById(`time-menu-${this.props.id}`);
        if (element) {
          element.classList.add('d-none');
        }
      }
    });
    // if (!notValid) {
    //   if (event.nativeEvent.inputType !== 'deleteContentBackward' && event.nativeEvent.inputType !== 'deleteContentForward' && event.nativeEvent.inputType !== 'insertText') {
    //     this.props.onTimeChange(event.target.value);
    //   }
    // }
  };

  handleTimeSelectionClick = (timeValue) => {
    this.setState({
      time: formatDate(timeValue, this.state.timeFormat)
    }, () => {
      let hourValue = this.state.time.split(':')[0] || '00';
      const minsValue = this.state.time.split(':')[1] || '00';
      if (this.props.timeFormat === '12') {
        if(parseInt(hourValue, 10) < 12 && this.state.activeState=== 'PM'){
          hourValue = parseInt(hourValue, 10) + 12
        }
        if(parseInt(hourValue, 10) > 12 && this.state.activeState=== 'AM'){
          hourValue = parseInt(hourValue, 10) - 12
        }
      }
      this.props.onTimeChange(`${addZero(hourValue)}:${minsValue}`);
    });
  };

  setTimeValue = () => {
    let timeValue = this.state.time;
    if (timeValue.toString().length === 1) {
      timeValue = `0${timeValue}:00`;
    } else if (timeValue.toString().length === 2) {
      timeValue = `${timeValue}:00`;
    } else if (timeValue.toString().length === 3) {
      timeValue = `0${timeValue.substring(0, 1)}:${timeValue.substring(1, 3)}`;
    } else if (timeValue.toString().length === 4) {
      timeValue = `${timeValue.substring(0, 2)}:${timeValue.substring(2, 4)}`;
    }
    this.setState({
      time: timeValue,
    }, () => {
      let hourValue = timeValue.split(':')[0] || '00';
      const minsValue = timeValue.split(':')[1] || '00';
      if (this.props.timeFormat === '12') {
        if(parseInt(hourValue, 10) < 12 && this.state.activeState=== 'PM'){
          hourValue = parseInt(hourValue, 10) + 12
        }
        if(parseInt(hourValue, 10) > 12 && this.state.activeState=== 'AM'){
          hourValue = parseInt(hourValue, 10) - 12
        }
      }
      this.props.onTimeChange(`${addZero(parseInt(hourValue, 10))}:${minsValue}`);
    });
  }

  renderTimeInput = () => {
    const { time, notValid } = this.state;
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
              const element = document.getElementById(`time-menu-${this.props.id}`);
              if (element) {
                console.log(element);
                element.classList.remove('d-none');
              }
            }}
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                this.setTimeValue();
              }
            }}
          />
          {notValid && <p className="text-danger">Invalid time entered</p>}
          <div className="time-selection-menu  d-none" id={`time-menu-${id}`}>
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
        {timeFormat !== '24' &&
          <div className="react-datepicker-am-pm-switch">
            <span className={`${this.state.activeState === 'AM' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeState: 'AM',
              }, () => {
                this.setTimeValue();
              });
            }}>AM</span>
            <span className={`${this.state.activeState === 'PM' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeState: 'PM',
              }, () => {
                this.setTimeValue();
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
