import React, {Component, PropTypes } from 'react';
// TODO: import bindActionCreators method from redux module
// TODO: import connect method from react-redux module
// TODO: import actions from the App action module
import Navbar from '../components/Navbar';

class AppRoot extends Component {
    static propTypes = {
        appData: PropTypes.object.isRequired,
        children: PropTypes.object,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { children, appData, dispatch } = this.props;
        // TODO: Create an appActions object that contains all action creators

        return (
            <div>
                {Navbar()}
                // TODO: Render and Inject props to children
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        appData: state.appData
    });
}

export default connect(mapStateToProps)(AppRoot);
