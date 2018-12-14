import React from 'react';
import classes from './photoid.module.css';
import Spinner from '../../../UI/Spinner/Spinner';
const photoid = (props) => {
    let image = <Spinner/>;
    if(props.photo != '') image = <img src={props.photo}/>;
    return (
        <div style={{width:props.width}} className={classes.photoid}>
            {image}
        </div>
    )
}
export default photoid;