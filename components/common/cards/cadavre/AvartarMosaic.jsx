import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

import styles from "./avatarmosaic.style";

const AvatarMosaic = ({ cadavre }) => {
  return (
    <View style={styles.mosaicContainer}>
      {cadavre.cadavre.contributeurs.map((contributeur, index) => (
        <Image
          key={index}
          style={styles.avatar}
          source={{
            uri: `https://api.dicebear.com/7.x/notionists-neutral/png?seed=${contributeur}&scale=200&radius=8&glassesProbability=60`,
          }}
        />
      ))}
    </View>
  );
};

export default AvatarMosaic;
