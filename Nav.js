import React, { Component } from 'react';
import './Nav.css';
import axios from 'axios';
import { setTimeout } from 'timers';

class Nav extends Component{
     
    state = {
        googleArticles: [0],
    }
    intervalId;
    componentDidMount =() => {
        this.getArticles();
    }
    componentWillMount()
    {
     /*
     stop getData() from continuing to run even
     after unmounting this component.Notice we are calling 
     'clearTimeout()' here rather than 'clearInterval()' as 
     in the previous example.
     */
    clearTimeout(this.intervalId);
    }

    getArticles = () => {
        console.log("Getting Articles");
        axios.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=93a442e019c340f19de0b30e617eb722')
        .then(
            res => {
                console.log(res.data.articles);
                this.setState({ googleArticles: this.state.googleArticles.concat(res.data.articles).splice(1,5)});
                this.intervalId =setTimeout(this.getArticles.bind(this),5000);
            }
        )
        .catch(err => console.log(err))
    }

    render(){
        return(
        <div className="Nav">
            <a href="http://localhost:3004/">Home</a>
        <h2> Google Taglines </h2>
        {this.state.googleArticles.map((article, i)  =>
        <div>
            <p> {i+1}) {article.title}</p>
            </div>
       
        )}
        
        </div>
        ) 
}
} 
export default Nav;
         
    
