import { useEffect, useState } from "react";

export type DeviceType = "movil" | "tablet" | "small-desktop" | "desktop";
export type DeviceHeightType = "small-desktop" | "desktop";
export type DeviceWidthType = number | undefined;

export interface DeviceTypes {
  device: DeviceType;
  deviceWidth: DeviceWidthType;
  deviceHeight: DeviceHeightType;
}

const useDeviceType = (): DeviceTypes => {
  const [device, setDevice] = useState<DeviceType>("desktop");
  const [deviceWidth, setDeviceWith] = useState<DeviceWidthType>()
  const [deviceHeight, setDevicHeight] = useState<DeviceHeightType>("desktop")
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDeviceWith(width)

      if (height) {
        if (height <= 800) setDevicHeight("small-desktop")
        else if (height > 801) setDevicHeight("desktop")
      }

      if (width) {
        if (width <= 770) setDevice("movil");
        else if (width <= 1040) setDevice("tablet");
        else if (width <= 1280 + 1) setDevice("small-desktop");
        else setDevice("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return { device, deviceWidth, deviceHeight };
};

export default useDeviceType;
