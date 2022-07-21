import React from 'react';

const Loading = () => {
    return (
        <div className={'loading-wrap'} style={{ ...loadingStyle }}>
            <i className='fa fa-spinner fa-spin'></i>
        </div>
    );
};

const loadingStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: "rgba(255,255,255,0.9)"
};

export default Loading;