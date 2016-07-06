import React, {PropTypes} from 'react';

const Loading = (loadText) => (
    <div >
        <div style={{display: 'flex', height: '75px'}} className="text-container">
            <div style={{margin: 'auto', fontSize: 'xx-large'}}>
                {loadText}
            </div>
        </div>
        <div style={{display: 'flex', height: '100px'}}>
            <div style={{margin: 'auto'}}>
                <i className="fa fa-5x fa-spin fa-circle-o-notch" />
            </div>
        </div>
    </div>
);

Loading.propTypes = {
    loadText: PropTypes.string.isRequired
};

export default Loading;