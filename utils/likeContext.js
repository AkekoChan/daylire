import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCadavres, setLikedCadavres] = useState({});

  useEffect(() => {
    const fetchLikes = async () => {
      const storedLikes = await AsyncStorage.getItem("likedCadavres");
      console.log("Récuparation des likes :", storedLikes);
      if (storedLikes) {
        setLikedCadavres(JSON.parse(storedLikes));
      }
    };

    fetchLikes();
  }, []);

  const updateLikes = async (id, liked) => {
    console.log("Update likes. Id:", id, "Liked:", liked);
    const updatedLikes = { ...likedCadavres, [id]: liked };
    setLikedCadavres(updatedLikes);
    console.log("Likes mis à jour :", updatedLikes);
    await AsyncStorage.setItem("likedCadavres", JSON.stringify(updatedLikes));
  };

  return (
    <LikeContext.Provider value={{ likedCadavres, updateLikes }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLikeContext = () => {
  return useContext(LikeContext);
};
