import { StyleSheet} from 'react-native'
import React, { useLayoutEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed"


export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

  return (
    <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarActiveTintColor: "#59C1CC",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({focused, color, size}) => {
                if(route.name === 'Customers') {
                    return (
                        <Icon
                            name='users'
                            type='entypo'
                            color={focused ? '#59c1cc' : 'gray'}
                        />
                    );
                } else if (route.name === 'Orders') {
                    return (
                        <Icon
                            name='box'
                            type='entypo'
                            color={focused ? '#eb6a7c' : 'gray'}
                        />
                    );
                }
            }
        })}
    >
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})