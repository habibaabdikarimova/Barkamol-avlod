import React from 'react';
import c from './style.module.scss';

function Title({Title, SubTitle}) {
    return (
        <div className={c.Title}>
            <p className={c.subtitle}>{SubTitle}</p>
            <h2 className={c.maintitle} >{Title}</h2>
        </div>
    )
}

export default Title
