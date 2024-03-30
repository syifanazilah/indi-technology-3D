import { useNightContext } from "../context/nightContext";

const adjustAngle = () => {
    const { isNight } = useNightContext()
    let angle = 0;

    if (isNight) {
        if (window.innerWidth < 768) {
            angle = 0.07
        } else {
            angle = 0.1

        }
    } else {
        angle = 0.23
    }

    return angle;
}

export default adjustAngle;