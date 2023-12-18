import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

import { COLORS } from "../../../constants";
import styles from "./cadavre.style";
import CadavreCard from "../../../components/common/cards/cadavre/CadavreCard";
import useFetch from "../../../hook/useFetch";

const Cadavre = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("cadavres", "GET");

  const listCadavres = data.cadavres;

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
