import { useEffect, useState } from "react";

export type DeviceType = "movil" | "tablet" | "small-desktop" | "desktop";
export type DeviceWidthType = number | undefined;

export interface DeviceTypes {
  device: DeviceType;
  deviceWidth: DeviceWidthType;
}

const useDeviceType = (): DeviceTypes => {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [deviceWidth, setDeviceWith] = useState<DeviceWidthType>()
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setDeviceWith(width)

      if (width <= 770) setDevice("movil");
      else if (width <= 1040) setDevice("tablet");
      else if (width <= 1280 + 1) setDevice("small-desktop");
      else setDevice("desktop");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return { device, deviceWidth };
};

export default useDeviceType;
