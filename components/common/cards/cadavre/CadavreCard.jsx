import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { decodeHTMLEntities } from "../../../../utils";
import AvatarMosaic from "../../../../components/common/cards/cadavre/AvartarMosaic";

import { icons } from "../../../../constants";
import styles from "./cadavrecard.style";

const CadavreCard = ({ cadavre, handleCardPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleCardPress}>
      <AvatarMosaic cadavre={cadavre} />
      <View style={styles.heartContainer}>
        <Image style={styles.heartImg} source={icons.heartOutline} />
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
