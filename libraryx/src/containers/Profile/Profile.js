import React, {Fragment,Component} from 'react';
import PhotoID from './PhotoID/PhotoID';
import classes from './profile.module.css';
import axios from 'axios';
class Profile extends Component {
    state = {
        name:null,
        email_id:null,
        status:null,
        online:false,
        photo:''

    }
    componentDidMount() {
        console.log("componentDidMount_Profile");
        axios.get('https://libraryx-cc19a.firebaseio.com/Users/0001.json')
        .then((res)=>{
            this.setState({
                name:res.data.first_name,
                email_id:res.data.email_id,
                status:res.data.status,
                online:res.data.online,
                photo:res.data.photo
            });
        });
    }
    render() {
        
        return (
            <div className={classes.profile}>
                <PhotoID width="25%" photo={this.state.photo}/>
            </div>
        )
    }
}
export default Profile;