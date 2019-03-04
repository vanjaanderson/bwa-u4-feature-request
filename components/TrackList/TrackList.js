import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return(
      <div className="TrackList">
        {this.props.tracks.map(track => {
          /* Pass on preview to the track component and from there further to the previewPopUp component */
          return <Track track={track}
                        onAdd={this.props.onAdd}
                        onPreviewAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}
                        onPreview={this.props.onPreview} />
        })}
      </div>
    );
  }
}

export default TrackList;
