import React, { Component } from 'react';
class GoogleMap extends Component{
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom:12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		this.map.panTo({lat: nextProps.lat, lng: nextProps.lng});
	}
	render(){
		// this.refs.map
		return <div ref="map" />;
	}
}

export default GoogleMap;