import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  Pressable,
  Linking,
  Platform,
  UIManager,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";
import Background from "../../components/Background";
import { documentDownload } from "../../text/documentDownload";
import PVText from "../../components/PVText";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

export default function DownloadDocs({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText style={styles.headlineH1}>Teorias</PVText>
        </View>
        <View style={styles.bodyInfo}>
          <SafeAreaView>
            <AccordionList
              data={documentDownload}
              containerItemStyle={styles.containerAccordeonStyle}
              customTitle={(item) => (
                <PVText style={styles.accordeonTitle}>{item.title}</PVText>
              )}
              customBody={(item) => (
                <>
                  <PVText style={styles.accordeonBody}>{item.body}</PVText>
                  <Pressable
                    style={styles.accordeonLinkWrapper}
                    onPress={() =>
                      Linking.openURL(
                        "https://docs.google.com/document/d/1LqDixzhzxiJ2jZMphVa-yPZ283xN5W__qr0k3eyvXmg/edit?usp=sharing"
                      )
                    }
                  >
                    <PVText style={styles.accordeonLinkBody}>
                      Ver Documento Completo
                    </PVText>
                    <Ionicons name="reader-outline" size={25} color="#fff" />
                  </Pressable>
                </>
              )}
              customIcon={() => (
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="#fff"
                />
              )}
              animationDuration={400}
            />
          </SafeAreaView>
        </View>
      </View>
    </Background>
  );
}
