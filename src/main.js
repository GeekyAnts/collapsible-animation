import React, { Component } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
const window = Dimensions.get("window");
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 75;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      list: [
        { key: 1, name: "ash" },
        { key: 2, name: "lagoon" },
        { key: 3, name: "mount" },
        { key: 4, name: "legs" }
      ],
      current: 1,
      expanded: true
    };
  }
  handleScroll(e) {
    console.log(e.nativeEvent.contentOffset.y);
    if (
      this.state.current > e.nativeEvent.contentOffset.y &&
      this.state.current - e.nativeEvent.contentOffset.y > 10
    ) {
      if (!this.state.expanded) {
        console.log("expand");
        this.setState({
          expanded: true
        });
      }
    } else if (
      this.state.current < e.nativeEvent.contentOffset.y &&
      e.nativeEvent.contentOffset.y - this.state.current > 10
    ) {
      if (this.state.expanded) {
        console.log("collapse");
        this.setState({
          expanded: false
        });
      }
    }

    this.setState({
      current: e.nativeEvent.contentOffset.y
    });
  }
  renderList(data) {
    console.log(data.name);
    return (
      <View key={data.key}>
        <Animated.View
          style={{
            width: 340,
            margin: 15,
            borderRadius: 3,
            height: 260,
            backgroundColor: "blue"
          }}
        />
      </View>
    );
  }
  render() {
    var self = this;
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ backgroundColor: "rgb(247, 249, 252)" }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { listener: this._handleScroll.bind(this) },
            { useNativeDriver: true }
          )}
        >
          <View style={{ marginTop: HEADER_MAX_HEIGHT }}>
            {self.state.list.map(data => {
              return self.renderList(data);
            })}
          </View>
        </Animated.ScrollView>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            height: HEADER_MAX_HEIGHT,
            backgroundColor: "yellow",
            transform: [{ translateY: headerTranslate }]
          }}
        >
          <View style={{ height: 60, top: 180, zIndex: -100 }}>
            <Animated.View
              style={{
                marginHorizontal: 15,
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                shadowOffset: {
                  width: -1,
                  height: 3
                },
                shadowOpacity: 0.3
              }}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}
