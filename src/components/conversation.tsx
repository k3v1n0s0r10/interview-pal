"use client";
import { useRef, useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import { useAppSelector } from "@/hooks/redux";

export default function Conversation() {
  //   const micPermission = useAppSelector((state) => state.permissions.microphone);

  return (
    <div>
      {/* {micPermission && (
        <button>{isMicActive ? "Stop" : "Start"} conversation</button>
      )} */}
    </div>
  );
}
