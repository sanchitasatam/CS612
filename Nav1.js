import React, { Component} from 'react';
import './Nav.css';
import axios from 'axios';

class Nav extends Component{

    state = {
        googleArticles: [0],
    }
    intervalID;
    componentDidMount = () => {
        this.getArticles();
    }
    componentWillMount(){
        /*
        stop getData() from continuing to run even
        after unmounting this component.Notice we are calling 
        'clearTimeout()' here rather than 'clearInterval()' as
        in the previous example.
        */
        clearTimeout(this.intervalID);
    }
    getArticles = () => {
        
        console.log("Getting Articles");
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=93a442e019c340f19de0b30e617eb722')
        .then
           res => {
               console.log(res.data.articles);
               this.setState({googleArticles: this.state.googleArticles.concat(res.data.articles).splice(1,5)});
               this.intervalID = setTimeout(this.getArticles.bind(this),5000)
           } 
               
            }
            
        }
        render()
     {
      return (
        <div className="Nav1">
        <h1> Google News</h1>
        {this.state.googleArticles.map((article,i)=>
        <div> 
            <p> {i+1} {article.title}</p>
            </div>
          )}
        </div>
      
      )
        }
    }
export default Nav;