import React, { Component } from "react";
import Expo from "expo";
import {
  Animated,
  View,
  Image,
  Dimensions,
  ListView,
  ScrollView,
  Text
} from "react-native";
import { Button, Icon, Item, Input } from "native-base";

const { height, width } = Dimensions.get("window");

export default class ScrollSwagger extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      scrollY: new Animated.Value(0),
      boxY: new Animated.Value(100),
      dataSource: ds.cloneWithRows(this.props.itemArray),
      itemCount: this.props.itemArray.length,
      expanded: true,
      current: 0,
      isReady: false,
      scrollHeight: 0
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }
  componentDidMount() {
    // console.log(this.props.itemArray);
    // console.log(this.props.boxComponent);
    // console.log(this.props.headComponent);
    if (this.props.boxComponent !== undefined) {
      this.setState({
        scrollHeight: this.state.itemCount * 290 - height + 180,
        boxHai: true
      });
    } else if (this.props.boxComponent === undefined) {
      this.setState({
        scrollHeight: this.state.itemCount * 290 - height + 80,
        boxHai: false
      });
    }
  }
  renderRow(rowData) {
    // console.log(rowData);
    return (
      <Animated.View
        style={{
          width: width - 20,
          margin: 15,
          borderRadius: 3,
          height: 260,
          elevation: 10,
          transform: [{ perspective: 800 }]
        }}
        key={rowData.key}
      >
        <Image
          source={{ uri: rowData.url }}
          style={{
            height: 190,
            width: width - 20,
            borderRadius: 3,
            flexDirection: "column"
          }}
        />

        <View
          style={{
            height: 70,
            width: width - 20,
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
            {rowData.name}
          </Text>
        </View>
      </Animated.View>
    );
  }
  expand() {
    // console.log("expand");
    Animated.timing(this.state.boxY, {
      toValue: 100,
      duration: 200
    }).start();
  }
  collapse() {
    // console.log("collapse");
    Animated.timing(this.state.boxY, {
      toValue: 0,
      duration: 200
    }).start();
  }
  _handleScroll(e) {
    if (
      this.state.current > e.nativeEvent.contentOffset.y &&
      e.nativeEvent.contentOffset.y < this.state.scrollHeight &&
      e.nativeEvent.contentOffset.y > 0
    ) {
      if (!this.state.expanded) {
        this.expand();
        this.setState({
          expanded: true
        });
      }
    } else if (
      this.state.current < e.nativeEvent.contentOffset.y &&
      e.nativeEvent.contentOffset.y < this.state.scrollHeight &&
      e.nativeEvent.contentOffset.y > 180
    ) {
      if (this.state.expanded) {
        this.collapse();
        this.setState({
          expanded: false
        });
      }
    }

    this.setState({
      current: e.nativeEvent.contentOffset.y
    });
  }
  renderScroll(props) {
    return (
      <Animated.ScrollView
        {...props}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: this.state.boxHai ? 180 : 80,
          alignItems: "center",
          justifyContent: "center"
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: this.state.scrollY } }
            }
          ],
          { listener: this._handleScroll.bind(this) },
          {
            useNativeDriver: true
          }
        )}
      />
    );
  }

  render() {
    const boxX = this.state.scrollY.interpolate({
      inputRange: [0, 180],
      outputRange: [0.87, 1],
      extrapolate: "clamp"
    });
    const boxTranslate = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -21],
      extrapolate: "clamp"
    });
    const boxEle = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [5, 15],
      extrapolate: "clamp"
    });
    const boxScaleY = this.state.boxY.interpolate({
      inputRange: [0, 100],
      outputRange: [0.5, 1]
    });
    const boxMov = this.state.boxY.interpolate({
      inputRange: [0, 100],
      outputRange: [-300, 0]
    });
    const boxOp = this.state.boxY.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, 0, 1]
    });
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderScrollComponent={this.renderScroll.bind(this)}
        />
        <Animated.View
          style={{
            position: "absolute",
            height: 80,
            width: width,
            top: 0,
            elevation: 15,
            backgroundColor: "white"
          }}
        >
          {this.props.headComponent}
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            height: this.state.boxHai ? 60 : 0,
            elevation: boxEle,
            backgroundColor: "white",
            opacity: boxOp,
            transform: [
              { scaleX: boxX },
              { translateY: boxTranslate },
              { scaleY: boxScaleY },
              { translateY: boxMov }
            ]
          }}
        >
          {this.props.boxComponent}
        </Animated.View>
      </View>
    );
  }
}
