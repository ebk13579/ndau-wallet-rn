import React, { Component } from 'react'
import { View } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

class Padding extends Component {
  constructor(props) {
    super(props);
    this.lineHeight = hp('3%');
    this.style = {
      paddingTop: this.getPadding(props.top, 1),
      paddingBottom: this.getPadding(props.bottom, 0),
    }
  }

  getPadding = (value, defaultValue) => {
    const numberOfLines = value === 0 ? 0 : (value || defaultValue)
    return this.lineHeight * numberOfLines
  }

  render() {
    return (
      <View style={this.style}>
        {this.props.children}
      </View>
    )
  }
};

export default Padding