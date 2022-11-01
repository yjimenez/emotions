import React, { useState, useEffect } from "react";
import { Modal, Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../utils/backgroundColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function FeelingModal({
  navigation,
  modalVisibleProp,
  onCloseModal,
  emotion,
  modalContent,
}: {
  navigation: any;
  modalVisibleProp: boolean;
  onCloseModal: () => {};
  emotion: string;
  modalContent: {
    emotionHeader: string;
    definition: string;
    feeling: string;
    feelingDescription: string;
  };
}) {
  const colors = background[emotion].reverse();
  const [modalVisible, setModalVisible] = useState(modalVisibleProp);

  const onPressClose = () => {
    setModalVisible(false), onCloseModal();
  };

  const onPressContinue = () => {
    onPressClose();
    navigation.navigate("FeelingQuestions", { emotion });
  };

  useEffect(() => {
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
      <View style={styles.wrapper}>
        <LinearGradient colors={colors} style={styles.linearGradient}>
          <View style={styles.header}>
            <Ionicons
              name="close-outline"
              size={40}
              color="#fff"
              onPress={() => onPressClose()}
            />
          </View>
          <View style={styles.content}>
            <PVText style={styles.modalHeader} fontType={"headlineH3"}>
              {`${modalContent.emotionHeader}`}
            </PVText>
            <PVText style={styles.modalParraph} fontType={"headlineH3"}>
              {`${modalContent.definition}`}
            </PVText>
            <PVText style={styles.modalParraph} fontType={"headlineH3"}>
              {`${modalContent.feeling.toUpperCase()}: ${
                modalContent.feelingDescription
              }`}
            </PVText>
          </View>
          <ContinueButton
            sectionColor={emotion}
            label="CONTINUAR"
            onPress={() => onPressContinue()}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
}
