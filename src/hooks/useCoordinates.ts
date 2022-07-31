import { useEffect, useState } from "react";

const LONDON_LATITUDE = 38.7259284;
const LONDON_LONGITUDE = -9.137382;

const useCoordinates = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const window = global.window;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => {
          setLatitude(LONDON_LATITUDE);
          setLongitude(LONDON_LONGITUDE);
        }
      );
    }
  }, [window]);

  return { latitude, longitude };
};

export default useCoordinates;
