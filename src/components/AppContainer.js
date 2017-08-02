
import { connect } from 'react-redux';

import App from './App';
import { generateGreeting } from '../actions';

const mapStateToProps = ({ greeting }) => ({
    greeting
});

const mapDispatchToProps = (dispatch) => ({
    generateGreeting: () => {
        dispatch(generateGreeting());
    }
});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
