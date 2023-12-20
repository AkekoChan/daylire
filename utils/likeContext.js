import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  const [likedCadavres, setLikedCadavres] = useState({});

  useEffect(() => {
    const fetchLikes = async () => {
      const storedLikes = await AsyncStorage.getItem("likedCadavres");

      if (storedLikes) {
        setLikedCadavres(JSON.parse(storedLikes));
      }
    };

    fetchLikes();
    console.log("Fetch likes :", likedCadavres);
  }, []);

  const updateLikes = async (id, liked) => {
    const updatedLikes = { ...likedCadavres, [id]: liked };
    setLikedCadavres(updatedLikes);
    await AsyncStorage.setItem("likedCadavres", JSON.stringify(updatedLikes));
    console.log("Likes mis à jour :", updatedLikes);
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
