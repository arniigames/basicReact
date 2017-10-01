/**
 * Created by antonminnion on 30/09/2017.
 */
import React, { Component } from 'react';


class SearchBar extends Component {


    // called automatically on class init
    constructor(props){
         super(props);

         this.state = {term: ''};


    }


    render(){

        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({term: event.target.value})}/>

            </div>
        )
    }




}


export default SearchBar;