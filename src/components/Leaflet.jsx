import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const iconIO = L.icon({
    iconUrl: "ttps://res.cloudinary.com/dciypbwrh/image/upload/v1563369465/owl_rqpgyc.svg",
    iconSize: new L.Point(45, 50),
    className: 'leaflet-div-icon'
});

class Leaflet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 48.7794046,
            lng: 9.1670142,
            // centerLat: 0,
            // centerLng: 0,
            // intervalId: undefined,
            // isLoaded: false,
            zoom: '1'
        };
    }

    handleZoom = (e) => {
        this.setState({
            zoom: e.target._zoom
        });
    }

    render() {
        const { lat, lng } = this.state;
        const position = [lat, lng];
        const { zoom, handleZoom } = this.state;
        return (
            <Map
                className="mapsizing"
                id="mapid"
                center={position}
                zoom={zoom}
                zoomControl
                onZoomend={handleZoom}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    // className="leaflet-div-icon"
                    position={position}
                    // icon={iconIO}
                />
            </Map>
        );
    }
}

export default Leaflet;
