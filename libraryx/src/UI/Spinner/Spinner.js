import React from 'react';
import classes from './spinner.module.css';
const spinner = () => {
   return <div className={classes.lds_ripple}><div></div><div></div></div>
}
export default spinner;