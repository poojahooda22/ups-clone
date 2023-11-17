import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { CompositeNavigationProp, useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { useTailwind } from 'tailwind-rn/dist';
import DeliveryCard from '../components/DeliveryCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, "Orders">,
    NativeStackNavigationProp<RootStackParamList>
>;

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const {params: {order}} = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: {color: "black"},
            headerBackTitle: "Deliveries",
        });
    }, [order]);

  return (
    <View style={{marginTop: -10}}>
      <DeliveryCard order={order} fullWidth />
    </View>
  )
}

export default OrderScreen