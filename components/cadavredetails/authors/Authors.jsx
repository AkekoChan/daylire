import { View, Text, Image } from "react-native";

import styles from "./authors.style";

const Authors = ({ authors }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les participants de ce Cadavre Exquis</Text>

      <View style={styles.authorsContainer}>
        {authors?.map((author, index) => (
          <View key={index} style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={{
                  uri: `https://api.dicebear.com/7.x/notionists-neutral/png?seed=${author}&scale=200&radius=8&glassesProbability=60`,
                }}
                style={styles.authorImage}
              />
            </View>
            <Text style={styles.authorName}>{author}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Authors;
