import React, { useState, useEffect } from "react";
import { Modal, Alert, View, Linking, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../../utils/backgroundColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import PVText from "../../../components/PVText";
import { delay } from "../../../utils";
import styles from "./styles";

const labels = {
  text1: "Si ya estas inscrito a doTERRA acude con tu distribuidor",
  text2: "*Consulta a tu distribuidor favorito",
  text3: `*Si deseas sesión personalizada, pídela al whats: 55 2919 2611`,
};

export default function MoreInfoModal({
  navigation,
  modalVisibleProp,
  onCloseModal,
  emotion,
  titleColor,
}: {
  navigation: any;
  modalVisibleProp: boolean;
  onCloseModal: () => {};
  emotion: string;
  titleColor: string;
}) {
  const colors = background[emotion];
  const [modalVisible, setModalVisible] = useState(modalVisibleProp);

  const onPressClose = () => {
    setModalVisible(false), onCloseModal();
  };

  useEffect(() => {
    const delayModal = async () => {
      setModalVisible(modalVisibleProp);
    };
    delayModal();
  }, [modalVisibleProp]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.wrapper}>
        {/* <LinearGradient colors={[colors]} style={styles.linearGradient}> */}
        <View style={[{ backgroundColor: titleColor }, styles.linearGradient]}>
          <View style={styles.header}>
            <Ionicons
              name="close-outline"
              size={40}
              color="#fff"
              onPress={() => onPressClose()}
            />
          </View>
          <View style={styles.content}>
            <PVText style={styles.modalHeader} fontType={"headlineH2"}>
              {`${labels.text1}`}
            </PVText>
            <PVText style={styles.modalParraph} fontType={"headlineH3"}>
              {`${labels.text2}`}
            </PVText>
            <PVText style={styles.modalParraph} fontType={"headlineH3"}>
              {`${labels.text3}`}
            </PVText>
            <View style={styles.iconCall}>
              <Ionicons
                name="home-outline"
                size={40}
                color="#fff"
                onPress={() => navigation.navigate("Selection")}
              />
              <Ionicons
                name="logo-whatsapp"
                size={40}
                color="#fff"
                onPress={() =>
                  Linking.openURL(
                    "whatsapp://send?phone=5529192611&text=App Emociones, Hola "
                  )
                }
              />
              <Ionicons
                name="chatbubbles-outline"
                size={40}
                color="#fff"
                onPress={() => navigation.navigate("Contact")}
              />
            </View>
          </View>
        </View>
        {/* </LinearGradient> */}
      </View>
    </Modal>
  );
}
