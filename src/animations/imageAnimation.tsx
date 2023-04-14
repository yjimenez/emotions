import React, { Component } from "react";
import { delay } from "../utils";
import { Animated } from "react-native";

interface ImageConfig {
  source?: string;
  shakeImage?: boolean;
  style?: any;
}
class ImageLoader extends Component<ImageConfig> {
  state = {
    opacity: new Animated.Value(0),
    shakeAnimation: new Animated.Value(0),
  };

  onLoad = async () => {
    const { shakeImage } = this.props;
    this.onAppear();

    if (shakeImage) {
      await delay(1500);
      this.onStartShake();
    }
  };

  onAppear = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  shakeLeft = () => {
    return Animated.timing(this.state.shakeAnimation, {
      toValue: 10,
      duration: 50,
      useNativeDriver: true,
    });
  };

  shakeRight = () => {
    return Animated.timing(this.state.shakeAnimation, {
      toValue: -10,
      duration: 50,
      useNativeDriver: true,
    });
  };

  onStartShake = () => {
    Animated.loop(
      Animated.sequence([
        this.shakeLeft(),
        this.shakeRight(),
        this.shakeLeft(),
        this.shakeRight(),
        this.shakeLeft(),
        this.shakeRight(),
        this.shakeLeft(),
        this.shakeRight(),
        Animated.timing(this.state.shakeAnimation, {
          toValue: 0,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.delay(4000),
      ])
    ).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            ...this.props.style,
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
              { translateX: this.state.shakeAnimation },
            ],
          },
        ]}
      />
    );
  }
}

export default ImageLoader;
