import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.renderAction = this.renderAction.bind(this);
    this.renderTrackInformation = this.renderTrackInformation.bind(this);
    // Preview feature
    this.previewTrack = this.previewTrack.bind(this);
  }
  renderTrackInformation() {
    return (this.props.isRemoval)
    ? <div className="Track-information">
      <h3>{this.props.track.name}</h3>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
    : <div className="Track-information">
      <a onClick={this.previewTrack}>{this.props.track.name}</a>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
  }
  renderAction() {
    return (this.props.isRemoval)
    ? <span id={this.props.track.id} className="Track-action" onClick={this.removeTrack}>&minus;</span>
    : <span id={this.props.track.id} className="Track-action" onClick={this.addTrack}>+</span>;
  }
  addTrack() {
    this.props.onAdd(this.props.track);
  }
  addPreviewTrack() {
    this.props.onPreviewAdd(this.props.track);
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  // Preview feature
  previewTrack() {
    document.getElementById("preview").style.display = 'block';
    this.props.onPreview(this.props.track);
  }
  render() {
    return(
      <div className="Track">
        {this.renderTrackInformation()}
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
