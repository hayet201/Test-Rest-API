import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts:[]
         }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.userId)
        .then(res =>{
           
            this.setState({

                posts:res.data
            })
        })
    }
    render() { 
        return ( <div className="users">
            {this.state.posts.map(el=>{
                return (<div className='posts'>
                    <div className="post"><p>userId:</p>{el.userId}</div>
                    <div className="post"><p>id:</p>{el.id}</div>
                    <div className="post"><p>Title:</p>{el.title}</div>
                    <div className="post"><p>body:</p>{el.body}</div>
                    <Link to={`/Comments/${el.id}`}><button type="button" class="btn btn-primary">Comments</button></Link>
                    
                </div>)
            }
         
                  
               
                )}
                 </div>
         );
    }
}
 
export default Posts;