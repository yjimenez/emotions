import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: {} | any;
  duration: number;
  delay: number;
}

export function FadeInView(props: Props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration,
      delay: props.delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
