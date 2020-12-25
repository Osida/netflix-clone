import React, { createContext, useState } from "react";

export const ToggleContext = createContext();
// other context for updating ToggleContext
export const ToggleUpdateContent = createContext();

export function AccordionProvider({ children }) {
  const [toggleBody, setToggleBody] = useState(false);

  function showBody() {
    setToggleBody((prevToggleBody) => !prevToggleBody);
  }

  return (
    <ToggleContext.Provider value={toggleBody}>
      <ToggleUpdateContent.Provider value={showBody}>
        {children}
      </ToggleUpdateContent.Provider>
    </ToggleContext.Provider>
  );
}
