import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { COLORS } from "../../../constants";
import styles from "./cadavre.style";
import CadavreCard from "../../../components/common/cards/cadavre/CadavreCard";
import { useLikeContext } from "../../../utils/likeContext";
import useFetch from "../../../hook/useFetch";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";

const Cadavre = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("cadavres", "GET");
  const { likedCadavres } = useLikeContext();
  const isFocused = useIsFocused();
  const listCadavres = data.cadavres;

  useEffect(() => {
    likedCadavres;
  }, [isFocused, likedCadavres]);

  return (
    <View>
      <Text style={styles.title}>Avec Daylire : lisez et appréciez !</Text>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.secondary} />
        ) : error ? (
          <Text>Il y a une erreur !</Text>
        ) : (
          listCadavres?.map((cadavre) => (
            <CadavreCard
              liked={likedCadavres[cadavre.id_cadavre]}
              cadavre={cadavre}
              key={cadavre.id_cadavre}
              handleCardPress={() =>
                router.push(`/cadavre-details/${cadavre.id_cadavre}`)
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Cadavre;
