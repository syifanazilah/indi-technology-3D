import { createContext, useContext, useEffect, useState } from "react";
import useCurrentHour from "../constant/currentHour";

const NightContext = createContext({
  isNight: false,
  setIsnight: () => {},
});

const NightContextProvider = ({ children }) => {
  const [isNight, setIsNight] = useState(false);
  const { hour } = useCurrentHour();

  useEffect(() => {
    if (hour >= 18 || hour <= 6) {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [hour]);

  return (
    <NightContext.Provider value={{ isNight }}>
      {children}
    </NightContext.Provider>
  );
};

export const useNightContext = () => useContext(NightContext);
export default NightContextProvider;
