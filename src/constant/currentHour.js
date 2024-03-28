import { useEffect, useState } from "react";

const useCurrentHour = () => {
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return {hour};
}

export default useCurrentHour;