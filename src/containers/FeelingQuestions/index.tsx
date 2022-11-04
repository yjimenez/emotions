import { useState } from "react";
import { Pressable, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { feelingQuestions } from "../../text/feelingQuestions";
import styles from "./styles";

export default function FeelingQuestion({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling } = route.params;
  console.log(" route.params", route.params);
  const sectionColor = emotion;

  const questions = feelingQuestions()[emotion];
  const [questionsCount, setQuestionCount] = useState(0);

  console.log("question", questions.length);

  const onPressAnswer = () => {
    const count = questionsCount + 1;
    if (count === questions.length) {
      navigation.navigate("EmotionScale", {
        emotion,
        feeling,
        value: "second",
      });
    } else {
      setQuestionCount(count);
    }
  };

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <PVText style={styles.headerText} fontType={"headlineH2"}>
            {questions[questionsCount]}
          </PVText>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <ContinueButton
          sectionColor={sectionColor}
          label="SI"
          onPress={() => onPressAnswer()}
        />
        <ContinueButton
          sectionColor={sectionColor}
          label="NO"
          onPress={() => onPressAnswer()}
        />
      </View>
    </Background>
  );
}
