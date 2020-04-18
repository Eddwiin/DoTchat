import React from 'react';
import Proptypes from 'prop-types';
import './layout.scss';

const Layout = ({ layoutStyle, closeLayout, children }) => {

    return (
        <div className="layout" style={layoutStyle}>
            { closeLayout && 
                <div onClick={() => closeLayout(true)} className="layout__close"> &times; </div> 
            }

            <div className="layout__children">
                {children}
            </div>
     
        </div>
    )
}


Layout.propTypes = {
    layoutStyle: Proptypes.object,
    closeLayout: Proptypes.func,
}
export { Layout } ;