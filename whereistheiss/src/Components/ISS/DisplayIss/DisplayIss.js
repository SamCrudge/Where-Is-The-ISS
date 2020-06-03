import React from "react";
import './DisplayIss.css'
import SimpleMap from "./Map/Map";


class DisplayIss extends React.Component {


    render() {
        return (
            <div className="IssInfo">
                <h1>The International Space Station</h1>
                <p> Timestamp: {this.props.timestamp}</p>
                <p> Longitude: {this.props.iss_position.longitude}</p>
                <p> Latitude: {this.props.iss_position.latitude}</p>
                <p><button onClick={this.props.update }> Refresh!</button></p>
                <SimpleMap long={this.props.iss_position.longitude} lat={this.props.iss_position.latitude}/>
            </div>
        )
    }
}

export default DisplayIss