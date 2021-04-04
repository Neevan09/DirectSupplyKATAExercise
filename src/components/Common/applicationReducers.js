import {
  PET_DETAILS_PERSISTED,
  RESET_PETS_DEFAULT,
  POST_PETS_ERROR_RECEIVED,
  POST_PETS_RESPONSE_RECEIVED,
  PUT_PETS_RESPONSE_RECEIVED,
  PUT_PETS_ERROR_RECEIVED,
  API_FETCH,
  API_FETCH_COMPLETE,
  API_FETCH_FAILURE,
  API_NETWORK_FAILURE,
  GET_PETS_RESPONSE_RECEIVED,
  GET_PETS_ERROR_RECEIVED,
  DELETE_PETS_RESPONSE_RECEIVED,
  DELETE_PETS_ERROR_RECEIVED,
} from "./applicationConstants";

const apiCallStatusInitialState = {
  isFetching: false,
  error: false,
  showErrNotification: false,
  errNotificationMsg: "",
  pageLoadError: false,
  isOrderFailure: false,
};

const petInitialState = {
  pets: [],
};

export const pets = (state = petInitialState, action) => {
  switch (action.type) {
    case POST_PETS_RESPONSE_RECEIVED: {
      return {
        ...state,
        httpStatus: action.response.httpStatus,
        pets: [
          { name: action.response.name, photoUrl: action.response.photoUrls },
        ],
        id: action.response.id,
      };
    }
    case POST_PETS_ERROR_RECEIVED: {
      return { ...state, ...action.response };
    }
    case PUT_PETS_RESPONSE_RECEIVED: {
      return {
        ...state,
        putPetsSuccess: true,
        httpStatus: action.response.httpStatus,
        pets: [
          { name: action.response.name, photoUrl: action.response.photoUrls },
        ],
        id: action.response.id,
      };
    }
    case PUT_PETS_ERROR_RECEIVED: {
      return { ...state, ...action.response };
    }
    case GET_PETS_RESPONSE_RECEIVED: {
      return {
        ...state,
        httpStatus: action.response.httpStatus,
        pets: [
          { name: action.response.name, photoUrl: action.response.photoUrls },
        ],
        id: action.response.id,
      };
    }
    case GET_PETS_ERROR_RECEIVED: {
      return { ...state, ...action.response };
    }
    case DELETE_PETS_RESPONSE_RECEIVED: {
      return {
        ...state,
        ...action.response,
        pets: []
      };
    }
    case DELETE_PETS_ERROR_RECEIVED: {
      return { ...state, ...action.response };
    }
    case RESET_PETS_DEFAULT: {
      return { ...state, httpStatus: "", putPetsSuccess: false };
    }
    case PET_DETAILS_PERSISTED: {
      return {
        ...state,
        pets: action.payload.pets,
        id: action.payload.id
      };
    }
    default:
      return state;
  }
};

export const apiCallStatus = (state = apiCallStatusInitialState, action) => {
  switch (action.type) {
    case API_FETCH:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case API_FETCH_COMPLETE:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case API_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case API_NETWORK_FAILURE:
      return {
        ...state,
        showErrNotification: true,
        errNotificationMsg: action.response,
      };
    default:
      return state;
  }
};
