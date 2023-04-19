import { createContext, useEffect, useRef, useState } from "react";

import { StreamContextT } from "./types";

const initialState = {};

export const StreamContext = createContext<StreamContextT>(initialState);

export const StreamProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<null | Error>(null);
  const [audioSource, setAudioSource] = useState<string>("");
  const [audioSourceOptions, setAudioSourceOptions] = useState<
    Record<string, string>[]
  >([]);

  const streamRef = useRef<null | MediaStream>(null);

  const getStream = async () => {
    try {
      stopStream();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: audioSource ? { exact: audioSource } : undefined,
        },
        video: false,
      });
      streamRef.current = stream;
      stopStream();
    } catch (error: any) {
      setError(error);
    }
  };

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };

  const setDevices = async () => {
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();

    const audioSourceOptions = [];
    for (const deviceInfo of mediaDevices) {
      if (deviceInfo.kind === "audioinput") {
        audioSourceOptions.push({
          value: deviceInfo.deviceId,
          label: deviceInfo.label || `Microphone ${deviceInfo.deviceId}`,
        });
      }
    }
    setAudioSourceOptions(audioSourceOptions);
  };

  return (
    <StreamContext.Provider value={initialState}>
      {children}
    </StreamContext.Provider>
  );
};
