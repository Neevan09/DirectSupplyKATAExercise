import { call, put, takeLatest } from "redux-saga/effects";
import { putPets } from "./actions";
import * as ActionTypes from "./constants";

function* handlePostPets(action) {
  yield put({ type: ActionTypes.API_FETCH });
console.log("action===============",action);
  try {
    const apiResponse = yield call(putPets, action.request);
    const name = apiResponse && apiResponse.data.name;
    const photoUrls = apiResponse && apiResponse.data.photoUrls[0];
    const httpStatus = apiResponse && apiResponse.status;
    const id = apiResponse && apiResponse.data.id;
   
    const data = { name, photoUrls,httpStatus,id };

    data
      ? yield put({
          type: ActionTypes.PUT_PETS_RESPONSE_RECEIVED,
          response: data,
        })
      : yield put({ type: ActionTypes.PUT_PETS_ERROR_RECEIVED });
  } catch (error) {
    const httpStatusCode = error.response && error.response.data;
    if (httpStatusCode >= 400 && httpStatusCode < 500) {
        yield put({ type: ActionTypes.PUT_PETS_ERROR_RECEIVED });
    }else if(httpStatusCode >= 500){
        yield put({ type: ActionTypes.API_FETCH_FAILURE });
    }else{
        yield put({ type: ActionTypes.API_NETWORK_FAILURE });
    }
  }

  yield put({ type: ActionTypes.API_FETCH_COMPLETE });
}

export default function* mySaga() {
  yield takeLatest(ActionTypes.LOAD_PUT_PETS, handlePostPets);
}
