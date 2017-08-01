
import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = ({ greeting }) => ({
    greeting
});

const VisibleYouKnow = connect(
    mapStateToProps
)(App);

export default VisibleYouKnow;
