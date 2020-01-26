import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'yellow',
        }}>
          <Text>TEST</Text>
      </View>
    );
  }
}