import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation, CompositeNavigationProp } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type ModalScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>();
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("abbsolute right-5 top-5 z-10")}
      >
        <Icon name="closecircle" type="antdesign" />

      </TouchableOpacity>
    </View>
  )
}

export default ModalScreen