import React, { useState, useEffect } from "react";
import { Modal, Alert, View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../../utils/backgroundColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContinueButton from "../../../components/ContinueButton";
import PVText from "../../../components/PVText";
import { delay } from "../../../utils";
import styles from "./styles";

export default function InfoModal({
  navigation,
  modalVisibleProp,
  onCloseModal,
  emotion,
  modalContent,
  scaleValue,
}: {
  navigation: any;
  modalVisibleProp: boolean;
  onCloseModal: () => {};
  emotion: string;
  scaleValue: string;
  modalContent: {
    emotionHeader: string;
    definition: string;
    feeling: string;
    feelingDescription: string;
  };
}) {
  const colors = background[emotion];
  const [modalVisible, setModalVisible] = useState(modalVisibleProp);

  const onPressClose = () => {
    setModalVisible(false), onCloseModal();
  };

  const onPressContinue = async () => {
    navigation.navigate("Selection");
    await delay(500);
    onPressClose();
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: !modalVisibleProp });
    setModalVisible(modalVisibleProp);
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
      <View style={[{ backgroundColor: colors }, styles.wrapper]}>
        <LinearGradient colors={colors} style={styles.linearGradient}>
          <View style={styles.content}>
            <View style={styles.container}>
              <PVText fontType={"headlineH3"}>Te LA Pelaste</PVText>
            </View>
            <ContinueButton
              sectionColor={emotion}
              label="INICIAR"
              onPress={() => onPressContinue()}
            />
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
