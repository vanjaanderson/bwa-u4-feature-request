import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* Pass on preview to the tracklist and track component and from there further to the previewPopUp component */}
        <TrackList tracks={this.props.searchResults}
                   onAdd={this.props.onAdd}
                   onPreviewAdd={this.props.onAdd}
                   onPreview={this.props.onPreview}
                   isRemoval={false} />
      </div>
    );
  }
}

export default SearchResults;
