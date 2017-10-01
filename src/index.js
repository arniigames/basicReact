/**
 * Created by antonminnion on 30/09/2017.
 */

// Library Imports
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


// Local imports
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = "AIzaSyCFUumwAq2HhZqUY5pYNjE18ssKNGbKwWQ";




class App extends React.Component {

    constructor(props){
        super(props);



        this.state = { videos: []};


        YTSearch({key: API_KEY, term: 'harry kane'}, (videos) => {
            // only when key and var name is the same
            this.setState({videos});
        });

    }

    render() {
        return (<div>
            <SearchBar />
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
        </div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));