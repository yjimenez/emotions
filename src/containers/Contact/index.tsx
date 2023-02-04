import * as React from "react";
import { Image, View, Pressable, Linking, Platform } from "react-native";
import Background from "../../components/Background";
import PVText from "../../components/PVText";
import { getImage } from "../../utils/getImages";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

const direction = {
  icon: "location-outline",
  text: "Circuito Poetas 44, Ciudad Satélite, Naucalpan de Juarez C.P. 53100 Estado de Mexico",
  link:
    Platform.OS === "android"
      ? "geo:0,0?q=19.50083704477105, -99.24120089313593"
      : "maps:0,0?q=19.50083704477105, -99.24120089313593",
};
const phone = {
  icon: "call-outline",
  text: "01 (52) 55 8618 1443",
  link:
    Platform.OS === "android"
      ? "tel:${+125586181443}"
      : "telprompt:${+125586181443}",
};
const email = {
  icon: "mail-outline",
  text: "info@ino.org.mx",
  link: "mailto:info@ino.org.mx?subject=Emotions App&body=Description",
};

export default function Contact({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";

  const infoRow = (icon: string, text: string, link: string) => (
    <View style={styles.bodyInfoRow}>
      <View style={styles.bodyInfoIcon}>
        <Ionicons name={icon} size={32} color="#fff" />
      </View>

      <Pressable
        onPress={() => Linking.openURL(link)}
        style={styles.bodyInfoText}
      >
        <PVText style={styles.text1}>{text}</PVText>
      </Pressable>
    </View>
  );
  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText style={styles.headlineH1}>Contacto</PVText>
        </View>
        <View style={styles.bodyInfo}>
          {infoRow(direction.icon, direction.text, direction.link)}
          {infoRow(phone.icon, phone.text, phone.link)}
          {infoRow(email.icon, email.text, email.link)}
        </View>
        <View style={styles.bodyImages}>
          <View style={styles.imageLogo}>
            <Image
              style={styles.imageLogoSource}
              source={getImage().patyLogo}
            />
          </View>
          <View style={styles.imageFace}>
            <Image style={styles.imageFaceSource} source={getImage().patyCel} />
          </View>
        </View>
      </View>
    </Background>
  );
}
