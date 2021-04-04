import { PET_SERVICE_API_URL, POST_PET_URL } from "../../services/UrlMapperService";
import { LOAD_PUT_PETS, RESET_PETS_DEFAULT} from './constants'
import { HttpService } from '../../services/HttpService';

export const loadPutPets = (request) => ({
  type: LOAD_PUT_PETS,
  request
});

export const putPets = (request) => {
let requestPayload = request;
  return HttpService.put('/v2/pet', requestPayload);
};



export const setPetData = state => ({
  type: 'PET_DETAILS_PERSISTED',
  payload: state
})

export const resetPets = () => ({
  type: RESET_PETS_DEFAULT
})