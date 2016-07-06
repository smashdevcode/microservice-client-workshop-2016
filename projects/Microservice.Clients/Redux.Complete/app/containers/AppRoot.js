import React, {Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActionCreators from '../actions/App';
import Navbar from '../components/Navbar';

class AppRoot extends Component {
    static propTypes = {
        appData: PropTypes.object.isRequired,
        children: PropTypes.object,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { children, appData, dispatch } = this.props;
        const appActions = bindActionCreators(AppActionCreators, dispatch);

        return (
            <div>
                {Navbar()}
                {children && React.cloneElement(children, { appData, appActions })}
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
