import { useEffect, useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

export const useGeolocation = (): Coordinates | null => {
  const [location, setLocation] = useState<Coordinates | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: Number(position.coords.latitude.toFixed(6)),
          lng: Number(position.coords.longitude.toFixed(6)),
        });
      },
      (error) => {
        console.error("Geolocation error", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }, []);

  return location;
};
