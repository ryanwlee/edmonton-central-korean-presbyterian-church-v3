import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Section = styled.View`
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #666;
  line-height: 24px;
`;

const Button = styled.TouchableOpacity`
  background-color: #5db683;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  margin-top: 15px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const BannerImage = styled.Image`
  width: ${Dimensions.get("window").width}px;
  height: 200px;
`;

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Container>
        <BannerImage
          source={require("../assets/church.jpg")}
          resizeMode="cover"
        />

        <Section>
          <Title>에드몬톤 중앙 장로교회</Title>
          <Description>
            에드몬톤 중앙 장로교회에 오신 것을 환영합니다. 우리 교회는 하나님을
            예배하고 서로를 사랑하며 지역 사회를 섬기는 것을 사명으로 삼고
            있습니다.
          </Description>

          <Button onPress={() => navigation.navigate("Worship")}>
            <ButtonText>예배 시간 안내</ButtonText>
          </Button>

          <Button
            onPress={() => navigation.navigate("Location")}
            style={{ marginTop: 10 }}
          >
            <ButtonText>오시는 길</ButtonText>
          </Button>
        </Section>

        <Section>
          <Title>예배 시간</Title>
          <Description>
            주일 예배: 오전 11:00{"\n"}
            수요 예배: 오후 7:00{"\n"}
            새벽 기도회: 오전 6:00
          </Description>
        </Section>
      </Container>
    </ScrollView>
  );
};

export default HomeScreen;
