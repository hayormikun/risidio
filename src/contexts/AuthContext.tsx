"use client";
import React, { createContext, useState } from "react";

type AuthType = {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthType>({
  signedIn: false,
  setSignedIn: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        setSignedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
