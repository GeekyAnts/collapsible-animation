import React from "react";
import ScrollSwagger from "../src/ScrollSwagger.ios.js";
import ScrollSwaggerAnd from "../src/ScrollSwagger.android.js";
import {
  Animated,
  View,
  Image,
  Dimensions,
  ListView,
  ScrollView,
  Text,
  Platform
} from "react-native";
import { Button, Icon, Item, Input } from "native-base";

export default class SpecimenA extends React.Component {
  render() {
    if (Platform.OS === "ios") {
      return (
        <ScrollSwagger
          itemArray={[
            {
              key: 1,
              name: "ash",
              url: "https://i.ytimg.com/vi/i9TUvAfOXnw/maxresdefault.jpg"
            },
            {
              key: 2,
              name: "lagoon",
              url: "https://www.pixilart.com/images/art/691b33136e9dd93.png?v=1473166353"
            },
            {
              key: 3,
              name: "mount",
              url: "http://img.cheapsoccercleatsale.com/images/farm8.staticflickr.com/7268/6977605106_feae26309a_z.jpg"
            },
            {
              key: 4,
              name: "legs",
              url: "https://i.ytimg.com/vi/juFWIwjQLBo/hqdefault.jpg"
            }
          ]}
          boxComponent={
            <View
              style={{
                top: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "rgb(255, 253, 250)",
                alignItems: "center"
              }}
            >
              <Button transparent>
                <Icon name="home" />
              </Button>
              <Button transparent>
                <Icon name="person" />
              </Button>
              <Button transparent>
                <Icon name="car" />
              </Button>
              <Button transparent>
                <Icon name="ios-menu" />
              </Button>
              <Button transparent>
                <Icon name="bug" />
              </Button>
            </View>
          }
          headComponent={
            <View
              style={{
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
                  marginHorizontal: 10
                }}
              >
                <Item>
                  <Icon
                    active
                    style={{ color: "rgba(0,0,0,0.4)" }}
                    name="search"
                  />
                  <Input placeholder="Mountains" />
                </Item>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  padding: 10,
                  marginHorizontal: 10
                }}
              >
                <Item>
                  <Icon
                    active
                    style={{ color: "rgba(0,0,0,0.4)" }}
                    name="swap"
                  />
                  <Input placeholder="Narnia" />
                </Item>
              </View>
            </View>
          }
        />
      );
    }
    return (
      <ScrollSwaggerAnd
        itemArray={[
          {
            key: 1,
            name: "ash",
            url: "https://i.ytimg.com/vi/i9TUvAfOXnw/maxresdefault.jpg"
          },
          {
            key: 2,
            name: "lagoon",
            url: "https://www.pixilart.com/images/art/691b33136e9dd93.png?v=1473166353"
          },
          {
            key: 3,
            name: "mount",
            url: "http://img.cheapsoccercleatsale.com/images/farm8.staticflickr.com/7268/6977605106_feae26309a_z.jpg"
          },
          {
            key: 4,
            name: "legs",
            url: "https://i.ytimg.com/vi/juFWIwjQLBo/hqdefault.jpg"
          }
        ]}
        boxComponent={
          <View
            style={{
              height: 60,
              top: 5,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Button transparent>
              <Icon name="home" />
            </Button>
            <Button transparent>
              <Icon name="person" />
            </Button>
            <Button transparent>
              <Icon name="car" />
            </Button>
            <Button transparent>
              <Icon name="ios-menu" />
            </Button>
            <Button transparent>
              <Icon name="bug" />
            </Button>
          </View>
        }
        headComponent={
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 10,
                marginHorizontal: 10
              }}
            >
              <Item>
                <Icon
                  active
                  style={{ color: "rgba(0,0,0,0.4)" }}
                  name="search"
                />
                <Input placeholder="Mountains" />
              </Item>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 10,
                marginHorizontal: 10
              }}
            >
              <Item>
                <Icon active style={{ color: "rgba(0,0,0,0.4)" }} name="swap" />
                <Input placeholder="Narnia" />
              </Item>
            </View>
          </View>
        }
      />
    );
  }
}
