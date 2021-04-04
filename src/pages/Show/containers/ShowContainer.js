import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as homeActions from "../actions";
import saga from "../sagas";
import {injectSaga, injectReducer} from 'redux-injectors';

// import { asyncCallStatus, home, company } from "../reducer";
import PageComponent from '../../../components/Show/PageComponent'
import * as homeSelectors from '../../New/selectors';
import { pets } from "../../New/reducers";

const mapStateToProps = (state) => {
  const petsDetails = homeSelectors.petsDetails(state);
//   const asyncCallStatusObj = state.toJS() ? state.toJS().asyncCallStatus : null;
  const routerDetails = homeSelectors.routerDetails(state);

  return {
    petsDetails,
    routerDetails,
    // ...asyncCallStatusObj,
  };
};

// const withSaga = injectSaga({ key: 'home', saga });

const withReducer = compose(
  injectReducer({ key: "pets", reducer: pets  }),
);

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...homeActions }, dispatch);
  }

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const ShowPage = withRouter(compose(withReducer, withSaga, withConnect)(PageComponent));
const ShowPage = withRouter(compose(withConnect, withReducer)(PageComponent));


export default ShowPage;