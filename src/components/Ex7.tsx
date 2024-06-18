import React, { useEffect, useState } from "react";
import { createStore } from "redux";

const initialState = { isDarkMode: false };

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

const store = createStore(reducer);

const toggleTheme = () => ({
  type: "TOGGLE_THEME",
});

const Bt7: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(store.getState().isDarkMode);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsDarkMode(store.getState().isDarkMode);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleThemeChange = () => {
    store.dispatch(toggleTheme());
  };

  return (
    <div>
        <h1>bt7</h1>
      <div>
        <label htmlFor="theme-switch">Dark Mode</label>
        <input
          type="checkbox"
          id="theme-switch"
          checked={isDarkMode}
          onChange={handleThemeChange}
        />
        <div className={isDarkMode ? "dark-theme" : "light-theme"}></div>
      </div>
    </div>
  );
};
export default Bt7;