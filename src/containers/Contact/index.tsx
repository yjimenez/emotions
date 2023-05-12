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
  link: "whatsapp://send?text=App Emotions Hola&phone=525586181443",
};
const email = {
  icon: "mail-outline",
  text: "info@ino.org.mx",
  link: "mailto:info@ino.org.mx?subject=Emotions App&body=Description",
};

const ytINO = {
  icon: "logo-youtube",
  link: "https://www.youtube.com/channel/UC-eH8rO-FMO1SSLKDsShZWQ/",
};
const fbINO = {
  icon: "logo-facebook",
  link: "https://www.facebook.com/INSTITUTONACIONALDEOLEOTERAPIA/?locale=es_LA",
};
const igINO = {
  icon: "logo-instagram",
  link: "https://www.instagram.com/institutonacionaldeoleoterapia/",
};

const fbPaty = {
  icon: "logo-facebook",
  link: "https://www.facebook.com/PatyQuirozConectandoGeneraciones?mibextid=LQQJ4d",
};
const igPaty = {
  icon: "logo-instagram",
  link: "https://instagram.com/patyquiroz_conectando?igshid=YmMyMTA2M2Y=",
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

  const iconRow = (icon: string, link: string) => (
    <View style={styles.bodyInfoIcon}>
      <Pressable onPress={() => Linking.openURL(link)}>
        <Ionicons name={icon} size={32} color="#fff" />
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
          <View style={styles.bodyInfoRow}>
            {iconRow(ytINO.icon, ytINO.link)}
            {iconRow(fbINO.icon, fbINO.link)}
            {iconRow(igINO.icon, igINO.link)}
            <View style={styles.logoINOContiner}>
              <View style={styles.logoINOBackground}>
                <Image style={styles.logoINO} source={getImage().logoINO} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bodyImages}>
          <View style={styles.imageLogo}>
            <Image
              style={styles.imageLogoSource}
              source={getImage().patyLogo}
            />
            <View style={styles.bodyInfoRowImage}>
              {iconRow(fbPaty.icon, fbPaty.link)}
              {iconRow(igPaty.icon, igPaty.link)}
            </View>
          </View>
          <View style={styles.imageFace}>
            <Image style={styles.imageFaceSource} source={getImage().patyCel} />
          </View>
        </View>
      </View>
    </Background>
  );
}
