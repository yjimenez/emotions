import * as React from "react";
import { Image, View } from "react-native";
import Background from "../../components/Background";
import PVText from "../../components/PVText";
import { getImage } from "../../utils/getImages";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

const direction = {
  icon: "location-outline",
  text: "Cualquier Lugar, cualquier direccion, cualquier estado y codigo postal",
};
const phone = {
  icon: "call-outline",
  text: "01 (52) 55 5252 9696",
};
const email = {
  icon: "mail-outline",
  text: "hola@emociones.com",
};

export default function Contact({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";

  const infoRow = (icon: string, text: string) => (
    <View style={styles.bodyInfoRow}>
      <View style={styles.bodyInfoIcon}>
        <Ionicons name={icon} size={32} color="#fff" />
      </View>
      <View style={styles.bodyInfoText}>
        <PVText style={styles.text1}>{text}</PVText>
      </View>
    </View>
  );
  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText style={styles.headlineH1}>Contacto</PVText>
        </View>
        <View style={styles.bodyInfo}>
          {infoRow(direction.icon, direction.text)}
          {infoRow(phone.icon, phone.text)}
          {infoRow(email.icon, email.text)}
        </View>
        <View style={styles.bodyImages}>
          <View style={styles.imageLogo}>
            <Image
              style={styles.imageLogoSource}
              source={getImage().patyLogo}
            />
          </View>
          <View style={styles.imageFace}>
            <Image
              style={styles.imageLogoSource}
              source={getImage().patyLogo}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
