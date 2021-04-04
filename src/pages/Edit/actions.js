import { LOAD_PUT_PETS} from './constants'
import { HttpService } from '../../services/HttpService';

export const loadPutPets = (request) => ({
  type: LOAD_PUT_PETS,
  request
});

export const putPets = (request) => {
let requestPayload = request;
  return HttpService.put('/v2/pet', requestPayload);
};

