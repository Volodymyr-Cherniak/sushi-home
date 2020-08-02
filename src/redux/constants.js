export const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};
