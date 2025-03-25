import { useEffect, useState } from "react";

export type DeviceType = "movil" | "tablet" | "desktop";

const useDeviceType = () => {
  const [device, setDevice] = useState<DeviceType>("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width <= 768) setDevice("movil");
      else if (width <= 1040) setDevice("tablet");
      else setDevice("desktop");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return device;
};

export default useDeviceType;
