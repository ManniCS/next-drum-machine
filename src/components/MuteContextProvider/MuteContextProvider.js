'use client';
import React from "react";

const MuteContext = React.createContext({}); 

function MuteContextProvider({children}) { 

  const [soundEnabled, setSoundEnabled] = React.useState(true);

  function toggleSoundEnabled() { 
    setSoundEnabled(!soundEnabled)
  }
  return <MuteContext.Provider value={{soundEnabled, toggleSoundEnabled}}>
    {children}
  </MuteContext.Provider>
}

export function useMuteContext() { 
  const data = React.useContext(MuteContext)

  if (!data) { 
    throw new Error('Cannot consume a Mute context without a MuteContextProvider')
  }

  return data;
}

export default MuteContextProvider;
