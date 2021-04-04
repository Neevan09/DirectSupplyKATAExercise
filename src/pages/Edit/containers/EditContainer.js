import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';

// import { asyncCallStatus, home, company } from "../reducer";
import PageComponent from '../../../components/Edit/PageComponent'
import * as newSelectors from '../selectors';
import { apiCallStatus } from "../reducers";
import { pets } from "../../New/reducers";

const mapStateToProps = (state) => {
  const petsDetails = newSelectors.petsDetails(state);
//   const asyncCallStatusObj = state.toJS() ? state.toJS().asyncCallStatus : null;
  const routerDetails = newSelectors.routerDetails(state);

  return {
    petsDetails,
    routerDetails,
    // ...asyncCallStatusObj,
  };
};

const withSaga = injectSaga({ key: 'new', saga });

const withReducer = compose(
   injectReducer({ key: "pets", reducer: pets  }),
   injectReducer({ key: "apiCallStatus", reducer: apiCallStatus })
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const EditPage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent)); 


export default EditPage;