// import {
//   POST_PETS_ERROR_RECEIVED,
//   POST_PETS_RESPONSE_RECEIVED,
//   PUT_PETS_RESPONSE_RECEIVED,
//   PUT_PETS_ERROR_RECEIVED
// } from "./constants";
// import {
//   API_FETCH,
//   API_FETCH_COMPLETE,
//   API_FETCH_FAILURE,
//   API_NETWORK_FAILURE,
// } from "./constants";

// const apiCallStatusInitialState = {
//   isFetching: false,
//   error: false,
//   showErrNotification: false,
//   errNotificationMsg: "",
//   pageLoadError: false,
//   isOrderFailure: false,
// };

// const petInitialState = {
//   pets: [],
// };

// export const pets = (state = petInitialState, action) => {
//   console.log("Pets =======reducer: ", action);
//   switch (action.type) {
//     case POST_PETS_RESPONSE_RECEIVED: {
//       return {
//         ...state,
//         httpStatus: action.response.httpStatus,
//         pets: [{ name: action.response.name, photoUrl: action.response.photoUrls }],
//       };
//     }
//     case POST_PETS_ERROR_RECEIVED: {
//       return { ...state, ...action.response };
//     }
//     case PUT_PETS_RESPONSE_RECEIVED: {
//       return {
//         ...state,
//         httpStatus: action.response.httpStatus,
//         putPetsSuccess: true,
//         pets: [{ name: action.response.name, photoUrl: action.response.photoUrls }],
//       };
//     }
//     case PUT_PETS_ERROR_RECEIVED: {
//       return { ...state, ...action.response };
//     }
//     case 'RESET_PETS_DEFAULT': {
//       return { ...state, httpStatus: '', putPetsSuccess: false };
//     }
//     case 'PET_DETAILS_PERSISTED':{
//       return{
//         ...state,
//         ...action.payload
//       }
//     }
//     default:
//       return state;
//   }
// };

// export const apiCallStatus = (state = apiCallStatusInitialState, action) => {
//   switch (action.type) {
//     case API_FETCH:
//       return {
//         ...state,
//         isFetching: true,
//         error: false,
//       };
//     case API_FETCH_COMPLETE:
//       return {
//         ...state,
//         isFetching: false,
//         error: false,
//       };
//     case API_FETCH_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         error: true,
//       };
//     case API_NETWORK_FAILURE:
//       return {
//         ...state,
//         showErrNotification: true,
//         errNotificationMsg: action.response,
//       };
//     default:
//       return state;
//   }
// };
