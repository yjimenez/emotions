import React, { useState } from "react";
import { Pressable, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import FeelingModal from "../../containers/FeelingModal";
import PVText from "../../components/PVText";
import { feelingSelection, popUpHeader } from "../../text/feelingSelection";
import styles from "./styles";

export default function FeelingQuestion({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion } = route.params;
  const sectionColor = emotion;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    emotionHeader: "",
    definition: "",
    feeling: "",
    feelingDescription: "",
  });
  const { titleHeader, subHeader, definition, options } =
    feelingSelection(emotion)[emotion];

  const onPress = (feeling: string, feelingDescription: string) => (
    setModalContent({
      emotionHeader: popUpHeader(emotion, feeling),
      definition,
      feeling,
      feelingDescription,
    }),
    setModalVisible(true)
  );

  const optionsArr = [...Object.entries(options)].map(
    (val: [string, string | unknown]) => {
      return (
        <Pressable
          key={val[0]}
          onPress={() => onPress(val[0], val[1])}
          style={styles.numberContainer}
        >
          <PVText style={styles.headerText} fontType={"headlineH4"}>
            {val[0]}
          </PVText>
        </Pressable>
      );
    }
  );
  return (
    <>
      <Background containsBottomTab gradientName={sectionColor}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              {titleHeader}
            </PVText>
            <PVText style={styles.headerText} fontType={"headlineH3"}>
              {subHeader}
            </PVText>
          </View>
          <View style={styles.numberWrapper}>{optionsArr}</View>
        </View>
      </Background>
      <FeelingModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        emotion={emotion}
        modalContent={modalContent}
      />
    </>
  );
}
