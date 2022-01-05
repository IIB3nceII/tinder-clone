import React, {
  ComponentType,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";
import { Platform, SafeAreaView } from "react-native";
import tw from "tailwind-rn";

interface IContainerProps {
  children: ReactNode | ReactNode[];
}

const Container: FC<IContainerProps> = ({ children }) => {
  if (Platform.OS === "ios") {
    return <SafeAreaView>{children}</SafeAreaView>;
  }
  return <SafeAreaView style={tw("mt-12")}>{children}</SafeAreaView>;
};

export default Container;
