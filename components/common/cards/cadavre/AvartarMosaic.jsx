import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

import styles from "./avatarmosaic.style";

const AvatarMosaic = ({ cadavre }) => {
  const randomPosX = () => {
    const positions = [5, 10, 20, 30, 40, 50, 60, 70, 80];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const randomPosY = () => {
    const positions = [5, 10, 20, 30, 40, 50, 60, 70, 80];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  return (
    <View style={styles.mosaicContainer}>
      {cadavre.contributeurs.map((contributeur, index) => (
        <Image
          key={index}
          style={[
            styles.avatar,
            {
              left: `${randomPosX()}%`,
              top: `${randomPosY()}%`,
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
