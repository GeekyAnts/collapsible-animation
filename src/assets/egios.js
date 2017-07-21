import React, { Component } from "react";
import Expo from "expo";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { Button, Icon, Item, Input } from "native-base";

const { height, width } = Dimensions.get("window");

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
      boxY: new Animated.Value(100),
      list: [
        { key: 1, name: "ash", url: "./assets/ash.jpg" },
        { key: 2, name: "lagoon", url: "./assets/lagoon.jpg" },
        { key: 3, name: "mount", url: "./assets/mount.jpg" },
        { key: 4, name: "legs", url: "./assets/ash.jpg" }
      ],
      current: 1,
      expanded: true,
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }
  renderList(data) {
    return (
      <Animated.View
        style={{
          width: 340,
          margin: 15,
          borderRadius: 3,
          height: 260,
          shadowOffset: {
            width: -1,
            height: 3
          },
          shadowOpacity: 0.3,
          zIndex: 10,
          transform: [{ perspective: 800 }]
        }}
        key={data.key}
      >
        <Image
          source={require("./lagoon.jpg")}
          style={{
            height: 190,
            width: 340,
            borderRadius: 3,
            flexDirection: "column"
          }}
        />

        <View
          style={{
            height: 70,
            width: 340,
            borderRadius: 3,
            backgroundColor: "white",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              left: 25,
              fontSize: 14,
              fontWeight: "200",
              color: "rgba(0,0,0,0.8)"
            }}
          >
            {data.name}
          </Text>
        </View>
      </Animated.View>
    );
  }
  expand() {
    // console.log("expand");
    Animated.timing(this.state.boxY, {
      toValue: 100,
      duration: 300
    }).start();
  }
  collapse() {
    // console.log("collapse");
    Animated.timing(this.state.boxY, {
      toValue: 0,
      duration: 300
    }).start();
  }
  _handleScroll(e) {
    // console.log(e.nativeEvent.contentOffset.y);
    // console.log(
    //   "Difference",
    //   this.state.current - e.nativeEvent.contentOffset.y
    // );
    if (
      this.state.current > e.nativeEvent.contentOffset.y &&
      this.state.current - e.nativeEvent.contentOffset.y > 10
    ) {
      if (!this.state.expanded) {
        this.expand();
        this.setState({
          expanded: true,
          listop: 200
        });
      }
    } else if (
      this.state.current < e.nativeEvent.contentOffset.y &&
      e.nativeEvent.contentOffset.y - this.state.current > 10 &&
      e.nativeEvent.contentOffset.y > 120
    ) {
      if (this.state.expanded) {
        this.collapse();
        this.setState({
          expanded: false,
          listop: 103
        });
      }
    }

    this.setState({
      current: e.nativeEvent.contentOffset.y
    });
  }

  render() {
    var self = this;
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 120],
      outputRange: [0, -120],
      extrapolate: "clamp"
    });
    const boxX = this.state.scrollY.interpolate({
      inputRange: [0, 120],
      outputRange: [0.87, 1],
      extrapolate: "clamp"
    });
    const boxEle = this.state.scrollY.interpolate({
      inputRange: [0, 120],
      outputRange: [10, 15],
      extrapolate: "clamp"
    });
    const boxY = this.state.boxY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    const boxOp = this.state.boxY.interpolate({
      inputRange: [0, 0, 100],
      outputRange: [0, 0, 1],
      extrapolate: "clamp"
    });
    const boxTranslate = this.state.boxY.interpolate({
      inputRange: [0, 100],
      outputRange: [-100, 0],
      extrapolate: "clamp"
    });
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { listener: this._handleScroll.bind(this) },
            { useNativeDriver: true }
          )}
        >
          <View
            style={{
              marginTop: 220,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {self.state.list.map(data => {
              return self.renderList(data);
            })}
          </View>
        </Animated.ScrollView>

        <Animated.View
          style={{
            position: "absolute",
            height: 100,
            width: width,
            top: 0,
            shadowOffset: {
              width: -1,
              height: 3
            },
            shadowOpacity: 0.3,
            zIndex: 15,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "rgb(255, 253, 250)"
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10,
              marginHorizontal: 10,
              top: 7
            }}
          >
            <Item>
              <Icon active style={{ color: "rgba(0,0,0,0.2)" }} name="search" />
              <Input placeholder="Mountains" />
            </Item>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 10,
              marginHorizontal: 10,
              top: 7
            }}
          >
            <Item>
              <Icon active style={{ color: "rgba(0,0,0,0.2)" }} name="swap" />
              <Input placeholder="Narnia" />
            </Item>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            height: 240,
            shadowOffset: {
              width: -1,
              height: 3
            },
            shadowOpacity: 0.3,
            zIndex: 10,
            transform: [{ translateY: headerTranslate }]
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            height: 80,
            shadowOffset: {
              width: -1,
              height: -3
            },
            shadowOpacity: 0.4,
            zIndex: boxEle,
            overflow: "hidden",
            opacity: boxOp,
            backgroundColor: "rgb(255, 253, 250)",
            transform: [
              { scaleY: boxY },
              { translateY: boxTranslate },
              { scaleX: boxX }
            ]
          }}
        >
          <Animated.View
            style={{
              height: 80,
              top: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              transparent
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            >
              <Icon name="home" />
            </Button>
            <Button
              transparent
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            >
              <Icon name="car" />
            </Button>
            <Button
              transparent
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            >
              <Icon name="ios-menu" />
            </Button>
            <Button
              transparent
              style={{ marginHorizontal: 10, marginVertical: 20 }}
            >
              <Icon name="bug" />
            </Button>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  }
});
