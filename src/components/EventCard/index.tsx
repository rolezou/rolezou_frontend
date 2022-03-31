import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Event } from "../../services/EventService";
import { CardBody, CardBodyText, CardBodyTitle, Container } from "./styles";
import { triangleTrick } from "../../shared/style-tricks";

import { LinearGradient } from "expo-linear-gradient";
import { easeGradient } from "react-native-easing-gradient";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

const { colors, locations } = easeGradient({
  colorStops: {
    1: {
      color: "#7259ce",
    },
    0: {
      color: "#2267b1",
    },
  },
});

const EventCard = ({ event }: Props) => {
  const { name, gender, date, price, userRate } = event;
  const formattedDate = moment(date.toDate()).format("DD/MM/YY [às] HH:mm");

  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: 4,
      }}
    >
      <Container eventType={"side"} style={[styles.cardShadow]}>
        <View
          style={[
            triangleTrick.triangle,
            triangleTrick.arrowDown,
            styles.arrowTop,
          ]}
        ></View>

        <CardBody>
          <CardBodyTitle>{name}</CardBodyTitle>
          <CardBodyText>{formattedDate}</CardBodyText>
          <CardBodyText>{gender}</CardBodyText>
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <CardBodyText>R$ {price},00</CardBodyText>
          </View>
        </CardBody>

        <View style={styles.dottedLine}></View>

        {userRate > 3 && (
          <FontAwesomeIcon
            size={25}
            icon={faStar}
            color={"yellow"}
            style={styles.star}
          ></FontAwesomeIcon>
        )}

        <View
          style={[
            triangleTrick.triangle,
            triangleTrick.arrowUp,
            styles.arrowBottom,
          ]}
        ></View>
      </Container>
    </LinearGradient>
  );
};

export default EventCard;

interface Props {
  event: Event;
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // elevation: 3,
  },
  arrowTop: {
    position: "absolute",
    top: 0,
    backgroundColor: "#ffffff",
    left: "70%",
  },
  arrowBottom: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ffffff",
    left: "70%",
  },
  dottedLine: {
    borderLeftColor: "#ffffff34",
    borderLeftWidth: 1,
    position: "absolute",
    right: 0,
    width: (Dimensions.get("window").width * 30) / 100 - 12,
    height: "100%",
    borderStyle: "dotted",
    borderRadius: 0.0000001,
  },
  star: {
    position: "absolute",
    right: 15,
    top: 15,
  },
});
