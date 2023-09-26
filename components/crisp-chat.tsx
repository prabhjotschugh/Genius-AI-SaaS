"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e780dcf8-1fd4-4f71-81a1-26fe12355e85");
  }, []);

  return null;
};
