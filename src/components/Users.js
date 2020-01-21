import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        }
    }
    componentDidMount (){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res)
            this.setState({
                users: res.data
            })
        })
    }
    render() {
      
        return (<div className ="users">

            {this.state.users.map(el =>
            
                 <div className="color">
                    <img src="http://cdn.onlinewebfonts.com/svg/img_568656.png"/>
                    <span>{el.name}</span>
                    <Link to={`/Posts/${el.id}`}>
                        <button type="button" class="btn btn-success boutton">Follow</button>
                        </Link> 
                 

                 
                 </div>
                 
                 
                )}

         

                 </div>
        );
    }
}

export default Users;