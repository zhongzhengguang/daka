import React, { createContext, useEffect, useState } from 'react';
import moment from 'moment';
import { useSession } from 'next-auth/react';
type TimeContextProps = {
  currentTime: moment.Moment;
  setCurrentTime: React.Dispatch<React.SetStateAction<moment.Moment>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  card: boolean;
  setCard: React.Dispatch<React.SetStateAction<boolean>>;
  dropDownList: boolean;
  setDropDownList: React.Dispatch<React.SetStateAction<boolean>>;
  workPlace: string;
  setWorPlace: React.Dispatch<React.SetStateAction<string>>;
  handleChoose: () => void;
  Office: () => void;
  Remote: () => void;
};

export const TimeContext = createContext<TimeContextProps>({
  seconds: 0,
  setSeconds: () => {},
  isRunning: false,
  setIsRunning: () => {},
  card: false,
  setCard: () => {},
  currentTime: moment(),
  setCurrentTime: () => {},
  dropDownList: false,
  setDropDownList: () => {},
  workPlace: 'Office',
  setWorPlace: () => {},
  handleChoose: () => {},
  Office: () => {},
  Remote: () => {},
});

interface TimeProviderProps {
  children: React.ReactNode;
}

function TimeProvider({ children }: TimeProviderProps) {
  const { data: session } = useSession();
  const [currentTime, setCurrentTime] = useState(moment());
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [card, setCard] = useState<boolean>(false);
  const [dropDownList, setDropDownList] = useState(false);
  const [workPlace, setWorPlace] = useState('Office');

  const handleChoose = () => {
    setDropDownList(!dropDownList);
  };
  const Office = () => {
    setDropDownList(!dropDownList);
    setWorPlace('Office');
  };
  const Remote = () => {
    setDropDownList(!dropDownList);
    setWorPlace('Remote');
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    const elapsedSeconds: NodeJS.Timeout | null =
      isRunning && seconds < 28800
        ? setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }, 1000)
        : null;

    return (): void => clearInterval(elapsedSeconds as NodeJS.Timeout);
  }, [isRunning, seconds]);

  return (
    <TimeContext.Provider
      value={{
        currentTime,
        setCurrentTime,
        seconds,
        setSeconds,
        isRunning,
        setIsRunning,
        card,
        setCard,
        dropDownList,
        setDropDownList,
        workPlace,
        setWorPlace,
        handleChoose,
        Office,
        Remote,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}

export default TimeProvider;
