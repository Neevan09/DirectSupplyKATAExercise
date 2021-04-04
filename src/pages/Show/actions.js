import { HttpService } from '../../services/HttpService';
import { LOAD_DELETE_PETS } from '../../components/Common/applicationConstants';

export const loadDeletePets = (request) => ({
  type: LOAD_DELETE_PETS,
  request
});

export const deletePets = (id) => {
  return HttpService.delete(`/v2/pet/${id}`);//${id}
};

