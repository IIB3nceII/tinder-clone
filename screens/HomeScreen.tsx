import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useLayoutEffect } from "react";
import {
  Platform,
  Image,
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { IRootState } from "../shared/reducers";
import { RootStackParams } from "../StackNavigator";
import { logout } from "../shared/reducers/authentication";
import tw from "tailwind-rn";
import { Container } from "../components/ui";
import { Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

/* -------------------------------------- */
const DUMMY_DATA = [
  {
    id: 1,
    firstName: "faszom",
    lastName: "lastfaszom",
    job: "occupation",
    photoUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    age: 18,
  },
  {
    id: 2,
    firstName: "faszom",
    lastName: "lastfaszom",
    job: "occupation",
    photoUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    age: 18,
  },
  {
    id: 3,
    firstName: "faszom",
    lastName: "lastfaszom",
    job: "occupation",
    photoUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    age: 18,
  },
  {
    id: 4,
    firstName: "faszom",
    lastName: "lastfaszom",
    job: "occupation",
    photoUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
    age: 18,
  },
];
/* -------------------------------------- */

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Chat"
>;

interface IHomeScreenProps extends StateProps, DispatchProps {}

const HomeScreen: FC<IHomeScreenProps> = (props) => {
  const { account, logout } = props;
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <Container>
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            source={{ uri: account.photoUrl }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw("h-14 w-12")}
            source={require("../assets/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#ff5864" />
        </TouchableOpacity>
      </View>

      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4ded30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              key={card.id}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              <Image
                source={{ uri: card.photoUrl }}
                style={tw("absolute top-0 left-0 h-full w-full rounded-xl")}
              />

              <View
                style={[
                  tw(
                    "absolute bottom-0 bg-white w-full flex-row justify-between items-between h-20 px-6 py-2 rounded-b-xl"
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw("text-xl font-bold")}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>
                <Text style={tw("text-2xl font-bold")}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

const mapStateToProps = ({ authentication }: IRootState) => ({
  account: authentication.account,
  state: authentication,
});

const mapDispatchToProps = { logout };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
