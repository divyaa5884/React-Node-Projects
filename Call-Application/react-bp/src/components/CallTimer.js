import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import ConnectContact from './ConnectContact';

const minuteSeconds = 60;
const timerProps = {
  isPlaying: true,
  size: 150,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
export default function CallTimer(props) {
  const hourSeconds = parseInt(props.hourSeconds) * 60;
  const remainingTime = hourSeconds - 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;

  const [renderCall, setRenderCall] = useState(false);
  const renderCallComp = () => {
    setRenderCall(true);
  }
  return (
    <div className="outer-wrapper">
      {!renderCall &&
        <div className="inner-wrapper">
          <div className="timer-wrapper">
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#EF798A"]]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#218380"]]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > 0
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))
              }
            </CountdownCircleTimer>
          </div>
          <div className="ui info message large text-msg">
            <p>Countdown Timer</p>
          </div>
          <button className="ui primary button large goToFormBtn"
            onClick={() => renderCallComp()} >
              Make another call?
          </button>
        </div>
      }
      {renderCall && 
      <ConnectContact />} 
    </div>
  );
}
