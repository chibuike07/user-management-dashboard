import React, { useState } from "react";

const UserContext = React.createContext([{}, () => {}]);

const ContextProvider = (props) => {
  const [state, setState] = useState({
    widthFlag: true,
    tag: "dashboard",
    totalProgress: 0,
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext };
