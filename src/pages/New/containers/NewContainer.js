import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';

// import { asyncCallStatus, home, company } from "../reducer";
import PageComponent from '../../../components/New/PageComponent'
import * as homeSelectors from '../selectors';

const mapStateToProps = (state) => {
//   const userDetails = homeSelectors.getUserDetails(state);
//   const asyncCallStatusObj = state.toJS() ? state.toJS().asyncCallStatus : null;
//   const routerDetails = homeSelectors.routerDetails(state);

  return {
    // userDetails,
    // routerDetails,
    // ...asyncCallStatusObj,
  };
};

// const withSaga = injectSaga({ key: 'home', saga });

// const withReducer = compose(
// //   injectReducer({ key: "asyncCallStatus", reducer: asyncCallStatus }),
// //   injectReducer({ key: 'UserInfo', reducer: home }),
// //   injectReducer({ key: 'CompanyInfo', reducer: company }),
// );

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const HomePage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent));
const NewPage = withRouter(compose(withConnect)(PageComponent));


export default NewPage;