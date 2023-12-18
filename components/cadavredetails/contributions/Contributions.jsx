import { View, Text } from "react-native";

import { decodeHTMLEntities } from "../../../utils";

import styles from "./contributions.style";

const Contributions = ({ contribution }) => {
  return <Text style={styles.text}>{decodeHTMLEntities(contribution)}</Text>;
};

export default Contributions;
