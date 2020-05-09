import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { SearchResults: [{
            name: 'name1',
            artist: 'artist1',
            album: 'album1',
            id: 'id1'}, 
            {name: 'name2',
            artist: 'artist2',
            album: 'album2',
            id: 'id2'}, 
            {name: 'name3',
            artist: 'artist3',
            album: 'album3',
            id: 'id3'
            }]
        };
        
    }
    render() {
        return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    
    <SearchBar />
    <div className="App-playlist">
      <SearchResults />
      <Playlist />
    </div>
  </div>
</div>
  );
    }
        
    }
  


export default App;
