import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';
import PageComponent from '../../../components/Show/PageComponent'
import * as homeSelectors from '../../../components/Common/applicationSelectors';
import { pets } from "../../../components/Common/applicationReducers"; 
import { ApplicationKeys, SagaKeys } from "../../../components/Common/applicationConstants";
import { setPetData, resetPets } from "../../../components/Common/applicationActions";

const mapStateToProps = (state) => {
  const petsDetails = homeSelectors.petsDetails(state); 
  const routerDetails = homeSelectors.routerDetails(state);

  return {
    petsDetails,
    routerDetails
  };
};

const withSaga = injectSaga({ key: SagaKeys.show, saga });

const withReducer = compose(
  injectReducer({ key: ApplicationKeys.pets, reducer: pets  }),
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions, setPetData, resetPets }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const ShowPage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent));


export default ShowPage;