import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, "Orders">,
    NativeStackNavigationProp<RootStackParamList>
>;



type Props = {
    item: Order
}

const OrderCard = ({item}: Props) => {
    const tailwind = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>();
  return (
    <TouchableOpacity 
        onPress={() => navigation.navigate("Order", {order: item})}
    >
        <Card containerStyle={{borderRadius: 12}}>
            <View style={ { flexDirection: 'row',  justifyContent: 'space-between',  alignItems: 'center' }}>
                <View>
                    <Icon
                        name="truck-delivery"
                        color={"#EB6A7C"}
                        type="material-community"
                    />
                    <Text style={{ fontSize: 10}}>
                        {new Date(item.createdAt).toDateString()}
                    </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 10, color: 'gray', textAlign: 'center'}}>
                        {item.carrier} - {item.trackingId}
                    </Text>

                    <Text style={ {textAlign: 'center'}}>
                        {item.trackingItems.customer.name}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', gap: 4}}>
                    <Text style={{ color: "#EB6A7C"}}>
                        {item.trackingItems.items.length} x
                    </Text>
                    <Icon style={{marginLeft: 4}} name="box" type="feather" />
                </View>
            </View>
        </Card> 
    </TouchableOpacity>
  )
}

export default OrderCard