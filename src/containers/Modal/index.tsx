import React, { useState, useEffect } from "react";
import { Modal, Alert, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../utils/backgroundColors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";
import labels from "../../text/labels";
import { feelingSelection } from "../../text/feelingSelection";

export default function EmotionsModal({
  navigation = {},
  section = "",
  emotion = "miedo",
  modalVisibleProp = false,
  onCloseModal = () => {},
  selectedFeeling = "",
  showCloseHeader = true,
  size = labels.medium,
  fontSize = labels.medium,
  buttonLabel = "",
  showButton = true,
  modalText = "",
  onPressButton = () => {},
  modalCustomContent = null,
}: {
  navigation: any;
  section: string;
  modalVisibleProp: boolean;
  emotion?: string;
  showCloseHeader?: boolean;
  onCloseModal?: () => void;
  selectedFeeling?: string;
  size?: string;
  fontSize?: string;
  buttonLabel?: string;
  showButton?: boolean;
  modalText?: string;
  onPressButton?: () => void;
  modalCustomContent?: any;
}) {
  const [emotionProps, setEmotionProps] = useState(feelingSelection(emotion));
  const colors = background[emotion];
  const [modalVisible, setModalVisible] = useState(modalVisibleProp);

  useEffect(() => {
    setEmotionProps({
      ...emotionProps,
      selectedFeeling,
    });
  }, [selectedFeeling]);

  useEffect(() => {}, []);

  const onPressClose = () => {
    setModalVisible(false);
    onCloseModal();
  };

  const onPressContinue = async () => {
    onPressButton();
    onPressClose();
    return;
  };

  useEffect(() => {
    if (![labels.contact].includes(section)) {
      navigation.setOptions({ headerShown: !modalVisibleProp });
    }
    setModalVisible(modalVisibleProp);
  }, [modalVisibleProp]);

  useEffect(() => {}, [modalCustomContent]);

  const modalContent =
    size === labels.small
      ? styles.modalContentSmall
      : size === labels.medium
      ? styles.modalContentMedium
      : styles.modalContentLarge;

  const modalFontSize =
    fontSize === labels.small
      ? "headlineH3"
      : fontSize === labels.medium
      ? "headlineH2"
      : "headlineH1";

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
        <LinearGradient
          colors={colors}
          style={[styles.linearGradient, modalContent]}
        >
          <View style={styles.header}>
            {showCloseHeader ? (
              <Ionicons
                name="close-outline"
                size={40}
                color="#fff"
                onPress={() => onPressClose()}
              />
            ) : null}
          </View>

          <View style={styles.content}>
            {modalCustomContent ? (
              modalCustomContent
            ) : (
              <View style={styles.justifyCenter}>
                <PVText fontType={modalFontSize} style={styles.modalParraph}>
                  {modalText}
                </PVText>
              </View>
            )}

            {showButton ? (
              <ContinueButton
                sectionColor={emotion}
                label={buttonLabel || "CONTINUAR"}
                onPress={async () => onPressContinue()}
                customStyle={styles.customStyle}
                pressEffect={null}
              />
            ) : null}
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}
