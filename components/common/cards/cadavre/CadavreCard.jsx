import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { decodeHTMLEntities } from "../../../../utils";
import AvatarMosaic from "../../../../components/common/cards/cadavre/AvartarMosaic";

import { COLORS, SIZES, icons } from "../../../../constants";
import styles from "./cadavrecard.style";
import { AntDesign } from "@expo/vector-icons";

const CadavreCard = ({ cadavre, handleCardPress, liked }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
      <AvatarMosaic cadavre={cadavre} />
      <View style={styles.heartContainer}>
        <AntDesign
          name={liked === true ? "heart" : "hearto"}
          size={SIZES.medium}
          color={COLORS.secondary}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{cadavre.titre}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {decodeHTMLEntities(cadavre.premiere_contribution)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CadavreCard;
