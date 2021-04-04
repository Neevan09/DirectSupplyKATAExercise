import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';
import PageComponent from '../../../components/New/PageComponent'
import * as newSelectors from '../../../components/Common/applicationSelectors';
import { apiCallStatus, pets } from "../../../components/Common/applicationReducers";
import { ApplicationKeys, SagaKeys } from "../../../components/Common/applicationConstants";
import { resetPets, setPetData } from "../../../components/Common/applicationActions";

const mapStateToProps = (state) => {
  const petsDetails = newSelectors.petsDetails(state);
  const routerDetails = newSelectors.routerDetails(state);

  return {
    petsDetails,
    routerDetails
  };
};

const withSaga = injectSaga({ key: SagaKeys.new, saga });

const withReducer = compose(
   injectReducer({ key: ApplicationKeys.pets, reducer: pets  }),
   injectReducer({ key: ApplicationKeys.apiCallStatus, reducer: apiCallStatus })
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions, resetPets, setPetData }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const NewPage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent)); 


export default NewPage;