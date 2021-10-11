import React, { Fragment } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";

import {
  withRouter,
} from 'react-router-dom'

import './style.css'
import { WorldMap } from "react-svg-worldmap"

const Home = props => {

  return (
    <Fragment>
      <div className="topContainer">
        <MapContainer center={[0, 0]} zoom={3}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </Fragment>
  )
}

export default withRouter(Home)
