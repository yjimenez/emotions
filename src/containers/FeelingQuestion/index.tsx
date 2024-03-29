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
      <View style={styles.modalHeaderParraph}>
        <PVText fontType={"headlineH2"}>{`${emotionProps.modalHeader}`}</PVText>
      </View>
      <View style={styles.modalBodyParraph}>
        <ScrollView contentContainerStyle={styles.contentScroll}>
          <PVText style={styles.modalParraph} fontType={"headlineH4"}>
            {`${emotionProps.definition}`}
          </PVText>
          <View style={styles.spaceBetween}></View>
          <PVText style={styles.modalParraph} fontType={"headlineH4"}>
            {`${selectedFeeling?.toUpperCase()}: ${
              emotionProps?.feelings[selectedFeeling]
            }`}
          </PVText>
          <View style={styles.spaceBetween}></View>
          <PVText style={styles.modalParraph} fontType={"headlineH4"}>
            {` ${emotionProps.oppositeDefinition}`}
          </PVText>
          <View style={styles.spaceBetween}></View>
          <PVText style={styles.modalParraph} fontType={"headlineH4"}>
            {` ${emotionProps.modalFooter}`}
          </PVText>
        </ScrollView>
      </View>
    </>
  );

  return (
    <>
      <Background gradientName={sectionColor}>
        <View style={[styles.wrapper, { opacity: modalVisible ? 0.2 : 1 }]}>
          <View style={styles.header}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              {titleHeader(emotion)}
            </PVText>
            <View style={styles.spaceBetween}></View>
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
