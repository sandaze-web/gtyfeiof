import React from 'react';
import PropTypes from 'prop-types';
import {Placemark, YMaps, Map} from "react-yandex-maps";

const MasterAddressMap = ({latitude, longitude}) => {
    return (
        <div>
            <YMaps>
                <Map
                    defaultState={{
                        center: [latitude, longitude],
                        zoom: 12,
                    }}
                    width="100%"
                    height="400px"
                >
                    <Placemark geometry={[latitude, longitude]}/>
                </Map>
            </YMaps>

        </div>
    );
};

MasterAddressMap.propTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
};

export default MasterAddressMap;