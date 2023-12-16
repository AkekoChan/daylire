import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { COLORS } from "../../../constants";
import styles from "./cadavre.style";
import { CadavreCard } from "../../common/cards/cadavre/CadavreCard";
import useFetch from "../../../hook/useFetch";

const Cadavre = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("cadavres", "GET");
  console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.headTitle}>Avec Daylire : lisez et appréciez !</Text>

      {/* <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.secondary} />
        ) : error ? (
          <Text>Il y a une erreur !</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View> */}
    </View>
  );
};

export default Cadavre;
