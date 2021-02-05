import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, {Polyline, Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import { images, icons, COLORS, SIZES } from '../constants';
import * as Location from 'expo-location';

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -34.921230,
          longitude: 138.599503,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        provider={PROVIDER_GOOGLE}
      />
      <Marker
        coordinate={{latitude: -34.921230,
          longitude: 138.599503,}}
        title={"Title?"}
        description={"Description?"}
      >
      <Image
        source={icons.mapPin}
        resizeMode="cover"
        style={{
            width: 20,
            height: 20,
        }}
      />
        </Marker>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.3,
  }
});