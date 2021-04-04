import { PET_SERVICE_API_URL, POST_PET_URL } from "../../services/UrlMapperService";
import { LOAD_POST_PETS} from './constants'
import { HttpService } from '../../services/HttpService';

export const loadPostPets = (request) => ({
  type: LOAD_POST_PETS,
  request
});

export const postPets = (request) => {
let requestPayload = request;
  return HttpService.put('/v2/pet', requestPayload);
};

export const setPetData = state => ({
    type: 'PET_DETAILS_PERSISTED',
    payload: state
})