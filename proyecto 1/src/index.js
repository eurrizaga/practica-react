// Crear nuevo componente
// HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import  _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCD53AMJ7bjqd-tmCDc6NvHS_Nl_25kqvw';

// const App = () => {
//     return (
//         <div>
//             <SearchBar />
    
//         </div>
//     );
// }

class App extends Component{
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
            videos: videos,
            selectedVideo: videos[0]
            }); //this.setState({ videos: videos})
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos = { this.state.videos }/>
            </div>
        );
    }
}


// Toma este html generado y ponerlo en el dom
ReactDOM.render(<App />, document.querySelector('.container'));
