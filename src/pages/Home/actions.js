import { HttpService } from '../../services/HttpService';
import { LOAD_GET_PETS } from "../../components/Common/applicationConstants";

export const loadGetPets = (request) => ({
  type: LOAD_GET_PETS,
  request
});

export const getPets = (id) => {
    console.log("getPets=====request", id); 
  return HttpService.get(`/v2/pet/${id}`);
};

