import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';
import { useNavigation, CompositeNavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import useCustomerOrders from '../hooks/useCustomerOrders';
import DeliveryCard from '../components/DeliveryCard';


type ModalScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>();
    const {params: {name, userId}} = useRoute<ModalScreenRouteProp>();

    const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <View>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={tw("abbsolute right-5 top-5 z-10")}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
            <View style={[tw("py-5 border-b"), { borderColor: "#59C1CC"}]}>
                <Text style={[tw("text-center text-xl font-bold"), { color: "#59C1CC"}]}>{name}</Text>
                <Text style={[tw("text-center italic text-sm")]}>deliveries</Text>
            </View>
      </View>

      <FlatList
        contentContainerStyle={{ paddingBottom: 200}}
        data={orders}
        keyExtractor={order=> order.trackingId}
        renderItem={({item: order}) => <DeliveryCard order={order} />}
      />
    </View>
  )
}

export default ModalScreen