import React from 'react';
import './PreviewPopUp.css';

class PreviewPopUp extends React.Component {
	constructor(props) {
    super(props);
    // Preview feature
		this.closePreview = this.closePreview.bind(this);
		//this.addPreviewTrack = this.addPreviewTrack.bind(this);
		this.addTrack = this.addTrack.bind(this);
  }
	closePreview() {
		document.getElementById("preview").style.display = "none";
	}
	addTrack() {
    this.props.onAdd(this.props.track);
		document.getElementById("preview").style.display = "none";
  }
	render() {
    return (
			<div className="PreviewPopUp" id="preview">
				<h2>Preview PopUp<span className="right close" onClick={this.closePreview}>&times;</span></h2>
				<h3>Track: {this.props.name}</h3>
				<p><span className="bold">Artist:</span> {this.props.track.artist}</p>
				<p><span className="bold">Album:</span> {this.props.track.album}</p>
				<p><span className="bold">Album Type:</span> {this.props.track.album_type}</p>
				<p><span className="bold">Release Year:</span> {this.props.track.release_date}</p>
				<p><span className="bold">Track number:</span> {this.props.track.track_nr} in album</p>
				<p><span className="bold">Duration:</span> {(this.props.track.length/1000/60).toFixed(2)} minutes</p>
				<img
					className="Track-album-cover"
					src={this.props.track.cover_album}
					alt="album cover"
				/>
				<a className="Track-save" onClick={this.addTrack}>ADD TO PLAYLIST</a>
			</div>
    );
  }
}

export default PreviewPopUp;
/*<a className="Track-save" onClick={this.addPreviewTrack}>ADD TO PLAYLIST</a>*/
