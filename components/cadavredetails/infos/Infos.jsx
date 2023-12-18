import React from "react";
import { View, Text } from "react-native";

import styles from "./infos.style";

const Infos = ({ data }) => {
  return (
    <View style={styles.infosContainer}>
      <Text style={styles.infosTitle}>{data.titre}</Text>
      <Text style={styles.infosStats}>
        Ce cadavre a été réalisé en{" "}
        <Text style={styles.infosBold}>{data.nb_jours}</Text> jours et comporte{" "}
        <Text style={styles.infosBold}>{data.total_contributions}</Text>{" "}
        contributions.
      </Text>
      <View style={styles.separator}></View>
    </View>
  );
};

export default Infos;
