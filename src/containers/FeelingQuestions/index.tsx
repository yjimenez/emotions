import { useState, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { feelingQuestions } from "../../text/feelingQuestions";
import { delay } from "../../utils";
import { validateEmotionName } from "../../text/feelingSelection";
import styles from "./styles";

export default function FeelingQuestions({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling, scaleValue } = route.params;
  const sectionColor = emotion;

  const questions = feelingQuestions()[validateEmotionName(emotion)];
  const [questionsCount, setQuestionCount] = useState(0);

  const onPressAnswer = async () => {
    swipeRight();
    await delay(500);
    const count = questionsCount + 1;
    if (count === questions.length) {
      navigation.navigate("Breath", {
        emotion,
        feeling,
        section: "second",
        scaleValue,
      });
    } else {
      setQuestionCount(count);
    }
    swipeLeft();
  };

  const animated = new Animated.Value(-500);
  const duration = 500;

  const swipeLeft = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const swipeRight = () => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 500,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  useEffect(() => {
    swipeLeft();
  }, [questionsCount]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: -500,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
    const swipe = async () => {
      await delay(500);
      swipeLeft();
    };
    swipe();
  }, []);

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Animated.View style={[{ transform: [{ translateX: animated }] }]}>
            <PVText style={styles.questionContainer} fontType={"headlineH1"}>
              {questions[questionsCount].question}
            </PVText>
          </Animated.View>
        </View>

        <View style={styles.buttonsContainer}>
          {questions[questionsCount].options.map((opt: string, i: number) => (
            <ContinueButton
              key={opt}
              sectionColor={sectionColor}
              label={opt}
              customStyle={i === 0 ? styles.marginBottom : undefined}
              onPress={() => onPressAnswer()}
            />
          ))}
        </View>
      </View>
    </Background>
  );
}
