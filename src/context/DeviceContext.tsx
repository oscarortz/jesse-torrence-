"use client";
import useDeviceType, { DeviceTypes } from "@/hooks/useDeviceType";
import { createContext, useContext, type ReactNode } from "react";

const DeviceContext = createContext<DeviceTypes>({
  device: "desktop",
  deviceWidth: undefined,
  deviceHeight: "desktop"
});

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {

  const { device, deviceWidth, deviceHeight } = useDeviceType()

  const value = {
    device,
    deviceWidth,
    deviceHeight
  }

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
};
