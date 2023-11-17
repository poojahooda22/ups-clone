import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomerScreen';
import{ Card, Icon } from '@rneui/themed';

type Props = {
    name: string;
    email: string;
    userId: string;
}

const CustomerCard = ({email, name, userId}: Props) => {
    const {loading, error, orders } = useCustomerOrders(userId); 
    const tailwind = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();

    return (
        <TouchableOpacity 
            onPress={() => 
                navigation.navigate("MyModal", {
                    name: name,
                    userId: userId,
                })
            }
        >
            <Card containerStyle={[tailwind("p-5"), { borderRadius: 12}]}>
                <View>
                <View style={ {flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text 
                            style={{fontSize: 18, fontWeight: 'bold'}}
                        >
                            {name}
                        </Text>
                        <Text style={ { color: "#59C1CC"}}>ID: {userId}</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={{ color: "#59C1CC"}}>
                            {loading ? "loading..." : `${orders.length} x`}</Text>
                        <Icon
                            style={{marginLeft: 5}}
                            name="box"
                            type="entypo"
                            color="#59C1CC"
                            size={50}
                        />
                    </View>
                </View>
                </View>
                {/* <Card.Divider /> */}
                <Text>{email}</Text>
            </Card>           
        </TouchableOpacity>
    );
};

export default CustomerCard
