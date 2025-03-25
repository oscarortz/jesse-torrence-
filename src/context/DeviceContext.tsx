"use client";
import useDeviceType, { DeviceType } from "@/hooks/useDeviceType";
import { createContext, useContext, type ReactNode } from "react";

const DeviceContext = createContext<DeviceType>("desktop");

export const useDevice = () => useContext(DeviceContext);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {

  const device = useDeviceType()

  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
};
