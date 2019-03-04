import React from 'react';
import './App.css';
import SearchBar      from '../SearchBar/SearchBar';
import SearchResults  from '../SearchResults/SearchResults';
import PlayList       from '../PlayList/PlayList';
import Spotify        from '../../util/Spotify';
// Preview feature
import PreviewPopUp   from '../PreviewPopUp/PreviewPopUp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playListName: 'New Playlist',
      playListTracks: [],
      // Preview track state
      previewTrack: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
    // Bind feature value to method
    this.previewTrack = this.previewTrack.bind(this);
    //this.addPreviewTrack = this.addPreviewTrack.bind(this);
  }
  addTrack(track) {
    let tracks = this.state.playListTracks;
    tracks.push(track);
    this.setState({
      playListTracks: tracks
    });
  }
  /*addPreviewTrack(track) {
    let tracks = this.state.playListTracks;
    tracks.push(track);
    this.setState({
      previewTrack: tracks
    });
  }*/
  removeTrack(track) {
    let tracks = this.state.playListTracks;
    tracks = tracks.filter(current => current.id !== track.id);
    this.setState({
      playListTracks: tracks
    });
  }
  updatePlayListName(name) {
    this.setState({
      playListName: name
    });
  }
  savePlayList() {
    let trackURIs = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playListName, trackURIs).then(() => {
      this.setState({
        playListName: 'New Playlist',
        playListTracks: []
      });
    });
  }
  // Preview feature
  previewTrack(track) {
    let tracks = this.state.previewTrack;
    this.setState({
      previewTrack: {
        name: track.name,
        artist: track.artist,
        album: track.album,
        cover_album: track.cover_album,
        release_date: track.release_date,
        length: track.length,
        track_number: track.track_number,
        album_type: track.album_type
      }
    });
  }
  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      })
    });
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Pass search request to SearchBar */}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* Pass onpreview further through the app components */}
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack}
                           onPreview={this.previewTrack} />
            <PlayList playListName={this.state.playListName}
                      playListTracks={this.state.playListTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlayListName}
                      onSave={this.savePlayList} />
            {/* Pass previewTracks state to the PreviewPopUp component */}
            <PreviewPopUp track={this.state.previewTrack}
                          onAdd={this.addTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
