import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableHighlight, Animated } from 'react-native';

class CollapsiblePanel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require('../../../img/Arrowhead-01-128.png'),
      down: require('../../../img/Arrowhead-Down-01-128.png')
    };

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value()
    };
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });

    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    console.debug(`minHeight: ${this.state.minHeight}`);
    console.debug(`maxHeight: ${this.state.maxHeight}`);

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  setMaxHeight = (event) => {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  };

  setMinHeight = (event) => {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  };

  render() {
    let icon = this.icons['down'];

    if (this.state.expanded) {
      icon = this.icons['up'];
    }

    return (
      <Animated.View style={[ styles.container, { height: this.state.animation } ]}>
        <View style={styles.titleContainer} onLayout={this.setMinHeight}>
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Image style={styles.buttonImage} source={icon} />
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this.setMaxHeight}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default CollapsiblePanel;