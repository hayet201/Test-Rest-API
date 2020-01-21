import React, { Component } from 'react';
import Axios from 'axios';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tab:[]
         }
    }
   
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.match.params.postId)
        .then(res =>{
            this.setState({
                tab:res.data
            })
        })

    }
    render() { 
        return ( <div className="users">
           {this.state.tab.map(el => {
               return(<div className="comment">
                  
                   <div className="post"><p>Title:</p>{el.name}</div>
                   <div className="post"><p>body:</p>{el.body}</div>
               </div>)
           })}
        </div> );
    }
}
 
export default Comments;