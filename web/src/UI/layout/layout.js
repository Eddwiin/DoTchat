import React from 'react';
import Proptypes from 'prop-types';
import style from './layout.module.scss';

const Layout = ({ layoutStyle, closeLayout, children }) => {

    return (
        <div className={style.layout} style={layoutStyle}>
            { closeLayout && 
                <div onClick={() => closeLayout(true)} className={style.layout__close}> &times; </div> 
            }

            <div className={style.layout__children}>
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