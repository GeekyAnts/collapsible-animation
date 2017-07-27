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
                flexDirection: "row",
                justifyContent: "space-around",
                backgroundColor: "rgb(255, 253, 250)",
                alignItems: "center",
                paddingTop: 5
              }}
            >
              <Item rounded>
                <Input placeholder="Search something..." />
              </Item>
            </View>
          }
          headComponent={
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Button transparent style={{ left: 6 }}>
                  <Icon name="arrow-back" />
                </Button>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Heading
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "row"
                }}
              >
                <Button transparent style={{ right: 6 }}>
                  <Icon name="menu" />
                </Button>
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
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "rgb(255, 253, 250)",
              alignItems: "center",
              paddingTop: 5
            }}
          >
            <Item rounded>
              <Input placeholder="Search something..." />
            </Item>
          </View>
        }
        headComponent={
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Button transparent style={{ left: 6 }}>
                <Icon name="arrow-back" />
              </Button>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Heading
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row"
              }}
            >
              <Button transparent style={{ right: 6 }}>
                <Icon name="menu" />
              </Button>
            </View>
          </View>
        }
      />
    );
  }
}
