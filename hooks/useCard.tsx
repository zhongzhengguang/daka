import React, { createContext, useEffect, useState } from 'react';

type CardContextProps = {
  dropDownList: boolean;
  setDropDownList: React.Dispatch<React.SetStateAction<boolean>>;
  workPlace: string;
  setWorPlace: React.Dispatch<React.SetStateAction<string>>;
  handleChoose: () => void;
  Office: () => void;
  Remote: () => void;
};

export const CardContext = createContext<CardContextProps>({
  dropDownList: false,
  setDropDownList: () => {},
  workPlace: 'Office',
  setWorPlace: () => {},
  handleChoose: () => {},
  Office: () => {},
  Remote: () => {},
});

interface CardProviderProps {
  children: React.ReactNode;
}

function CardProvider({ children }: CardProviderProps) {
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
  return (
    <CardContext.Provider
      value={{ dropDownList, setDropDownList, workPlace, setWorPlace, handleChoose, Office, Remote }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
