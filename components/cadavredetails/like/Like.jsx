import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../constants";
import styles from "./like.style";
import { useLikeContext } from "../../../utils/likeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Like = ({ id, nbLike }) => {
  const [liked, setLiked] = useState(false);
  const [likeResult, setLikeResult] = useState();
  const { likedCadavres, updateLikes } = useLikeContext();

  useEffect(() => {
    setLiked(likedCadavres[id] === true);
    console.log("likedCadavres[id]", likedCadavres[id]);
  }, [likedCadavres, id]);

  const handleLike = async () => {
    setLiked(!liked);

    updateLikes(id, !liked);

    try {
      const options = {
        method: "POST",
        url: "https://projectdev.alwaysdata.net/loufok/api/cadavre/like",
        body: JSON.stringify({
          id: id,
        }),
      };

      const response = await fetch(options.url, {
        body: options.body,
        method: options.method,
      });
      const data = await response.json();
      setLikeResult(data.likes);

      console.log("likedCadavres après la mise à jour :", likedCadavres);

      // Débogage : vérifier si le résultat de la mise à jour est correct
      console.log("Résultat de la mise à jour :", data);

      // Débogage : vérifier si le AsyncStorage est correctement mis à jour
      const storedLikes = await AsyncStorage.getItem("likedCadavres");
      console.log(
        "likedCadavres dans AsyncStorage après la mise à jour :",
        storedLikes
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.likeBtn, liked ? styles.likedBtn : null]}
      onPress={() => handleLike()}
    >
      <View style={styles.likeContainer}>
        <Image
          source={icons.heart}
          style={[styles.likeIcon, liked ? styles.likedIcon : null]}
        />
        <Text style={[styles.likeText, liked ? styles.likedText : null]}>
          {likeResult ? likeResult : nbLike}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Like;
