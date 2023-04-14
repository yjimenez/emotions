import React, { useState } from "react";
import { Pressable, View, ScrollView } from "react-native";
import Background from "../../components/Background";
import EmotionsModal from "../Modal";
import PVText from "../../components/PVText";
import {
  feelingSelection,
  titleHeader,
  subHeader,
} from "../../text/feelingSelection";
import labels from "../../text/labels";
import styles from "./styles";

export default function FeelingQuestion({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, scaleValue } = route.params;
  const sectionColor = emotion;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFeeling, setSelectedFeeling] = useState("");
  const emotionProps = feelingSelection(emotion);

  const onPress = (feeling: string) => {
    setSelectedFeeling(feeling);
    setModalVisible(true);
  };

  const optionsArr = Object.keys(emotionProps.feelings)
    .reverse()
    .map((val) => {
      return (
        <Pressable
          key={val}
          onPress={() => onPress(val)}
          style={styles.numberContainer}
        >
          <PVText style={styles.headerText} fontType={"headlineH4"}>
            {val}
          </PVText>
        </Pressable>
      );
    });

  const modalCustomContent = (
    <>
      <PVText style={styles.modalParraph} fontType={"headlineH2"}>
        {`${emotionProps.modalHeader}`}
      </PVText>
      <View style={styles.spaceBetween}></View>
      <ScrollView contentContainerStyle={styles.contentScroll}>
        <PVText style={styles.modalParraph} fontType={"headlineH2"}>
          {`${emotionProps.definition}`}
        </PVText>
        <View style={styles.spaceBetween}></View>
        <PVText style={styles.modalParraph} fontType={"headlineH2"}>
          {`${selectedFeeling?.toUpperCase()}: ${
            emotionProps?.feelings[selectedFeeling]
          }`}
        </PVText>
        <View style={styles.spaceBetween}></View>
        <PVText style={styles.modalParraph} fontType={"headlineH2"}>
          {` ${emotionProps.oppositeDefinition}`}
        </PVText>
        <View style={styles.spaceBetween}></View>
        <PVText style={styles.modalParraph} fontType={"headlineH2"}>
          {` ${emotionProps.modalFooter}`}
        </PVText>
      </ScrollView>
    </>
  );

  return (
    <>
      <Background containsBottomTab gradientName={sectionColor}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              {titleHeader(emotion)}
            </PVText>
            <PVText style={styles.headerText} fontType={"headlineH3"}>
              {subHeader}
            </PVText>
          </View>
          <View
            style={
              emotion === "sorpresaNegativo"
                ? styles.numberWrapper
                : styles.numberWrapperReverse
            }
          >
            {optionsArr}
          </View>
        </View>
      </Background>
      <EmotionsModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        selectedFeeling={selectedFeeling}
        onCloseModal={async () => setModalVisible(false)}
        emotion={emotion}
        size={labels.large}
        onPressButton={() =>
          navigation.navigate("Breath", {
            emotion,
            feeling: selectedFeeling,
            scaleValue,
          })
        }
        modalCustomContent={modalCustomContent}
      />
    </>
  );
}
