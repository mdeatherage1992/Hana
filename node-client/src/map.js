import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      humans: [],
    }
  }
  onClick = () => {
      var proxyUrl = 'http://localhost:8080/',
      areaUrl = "http://localhost:3001/areas",
      humanUrl = "http://localhost:3001/humans"
      fetch(proxyUrl + areaUrl)
      .then(data => data.json())
      .then(response => this.setState({areas:response}))
    }

  static defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 0
  };

  render() {
    const listItems = this.state.areas.map((d) => <li key={d.name}>{d.name}<br />{d.area}</li>);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
      <button onClick={this.onClick} />
      <div><ul>{listItems}</ul></div>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={0}
            lng={0}
            text="hi there"
                      />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
