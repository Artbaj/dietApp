import React from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);
  const [isIOSDevice, setIOSDevice] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
    const appleDevice = Boolean(userAgent.match(/iPhone|iPad|iPod/i));

    setMobile(mobile);
    setIOSDevice(appleDevice);
  }, []);

  return { isMobile, isIOSDevice };
}
