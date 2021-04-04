import { call, put, takeLatest } from "redux-saga/effects";
import { deletePets } from "./actions";
import * as ActionTypes from "../../components/Common/applicationConstants";

function* handleDeletePets(action) {
  yield put({ type: ActionTypes.API_FETCH });
console.log("action===============",action);
  try {
    const apiResponse = yield call(deletePets, action.request);
     
    const httpStatus = apiResponse && apiResponse.status; 
    const message = apiResponse && apiResponse.data.message; 
    const code = apiResponse && apiResponse.data.code; 
   
    const data = { httpStatus, message, code };

    data
      ? yield put({
          type: ActionTypes.DELETE_PETS_RESPONSE_RECEIVED,
          response: data,
        })
      : yield put({ type: ActionTypes.DELETE_PETS_ERROR_RECEIVED });
  } catch (error) {
    const httpStatusCode = error.response && error.response.data;
    if (httpStatusCode >= 400 && httpStatusCode < 500) {
        yield put({ type: ActionTypes.DELETE_PETS_ERROR_RECEIVED });
    }else if(httpStatusCode >= 500){
        yield put({ type: ActionTypes.API_FETCH_FAILURE });
    }else{
        yield put({ type: ActionTypes.API_NETWORK_FAILURE });
    }
  }

  yield put({ type: ActionTypes.API_FETCH_COMPLETE });
}

export default function* mySaga() {
  yield takeLatest(ActionTypes.LOAD_DELETE_PETS, handleDeletePets);
}
