import React, {Fragment,Component} from 'react';
import classes from './home.module.css';
import {Cat} from 'react-kawaii';
import Button from '@material-ui/core/Button';
class Home extends Component {
    state = {
        loggedinUserId : null

    }
    render() {
        return (
            <Fragment>
            <Cat/>
            <h2> Let's get started </h2>
            <Button variant="contained" color="primary">Sign in</Button>
            </Fragment>
        );
    }
}
export default Home;