import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';
import PageComponent from '../../../components/Home/PageComponent'
import * as homeSelectors from '../../../components/Common/applicationSelectors';
import { ApplicationKeys, SagaKeys } from "../../../components/Common/applicationConstants";
import { pets } from "../../../components/Common/applicationReducers";
import { setPetData } from "../../../components/Common/applicationActions";

const mapStateToProps = (state) => {
  const petsDetails = homeSelectors.petsDetails(state);
  const routerDetails = homeSelectors.routerDetails(state);

  return {
    petsDetails,
    routerDetails
  };
};

const withSaga = injectSaga({ key: SagaKeys.home, saga });

const withReducer = compose(
  injectReducer({ key: ApplicationKeys.pets, reducer: pets  }),
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions, setPetData }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const HomePage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent));

export default HomePage;