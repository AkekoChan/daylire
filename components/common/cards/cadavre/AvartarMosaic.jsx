import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

import styles from "./avatarmosaic.style";
import { SIZES } from "../../../../constants";

const AvatarMosaic = ({ cadavre }) => {
  const random = (min, max) => { return Math.floor(Math.random() * (max - min) + min); }

  return (
    <View style={styles.mosaicContainer}>
      {cadavre.contributeurs.map((contributeur, index) => (
        <Image
          key={index}
          style={[
            styles.avatar,
            {
             left: `${random(0, 7) * (SIZES.xLarge * 2)}px`,
             top: `${random(0, 3) * (SIZES.xLarge * 2)}px`
            },
          ]}
          source={{
            uri: `https://api.dicebear.com/7.x/notionists-neutral/png?seed=${contributeur}&scale=200&radius=8&glassesProbability=60`,
          }}
        />
      ))}
    </View>
  );
};

export default AvatarMosaic;
