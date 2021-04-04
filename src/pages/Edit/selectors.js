import { createSelector } from "reselect";

// const selectAsyncCallStatus = (state) => state.get("asyncCallStatus") || {};

export const selectState = (state) => state;

export const petsDetails = createSelector(selectState, (state) => {
  const petInfo = state.get("pets");
  const pets = {
    pets: petInfo,
  };
  return pets;
});

export const routerDetails = createSelector(selectState, (state) => {
  const router = state.get("router");
  // TODO SOE Mapping when Data points are available from the redux state.
  const routerData = {
    router: router,
  };
  return routerData;
});
