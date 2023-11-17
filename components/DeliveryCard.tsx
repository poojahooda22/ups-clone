import { View, Text } from 'react-native'
import React from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { Card, Icon, Divider } from '@rneui/themed';
import MapView, { Marker } from 'react-native-maps';



type Props = {
    order: Order
    fullWidth?: boolean
}

const DeliveryCard = ({order, fullWidth}: Props) => {
    const tw = useTailwind();
  return (
    <Card
        containerStyle={[
            tw(`${fullWidth ? "rounded-none m-0" : "rounded-lg"  }my-2`),
            {
                backgroundColor: fullWidth ? "#EB6A7C" : "#59C1CC",
                padding: 0,
                paddingTop: 16,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 4,
                borderRadius: fullWidth ? 0 : 12,
                margin: fullWidth ? 0: 16

            }
        ]}
    >
        <View style={fullWidth && { height: "100%"}}>
            <Icon name="box" type="entypo" size={50} color="white" />
            <View>
                <View>
                    <Text
                        style={ {color: 'white', textAlign:'center',  textTransform: 'uppercase' }}
                    >
                        {order.carrier} - {order.trackingId}
                    </Text>
                    <Text style={ {color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginBottom: 8}}>
                        Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                    {/* <Divider color="white" /> */}
                </View>

                <View style={[tw("mx-auto pb-5"), {paddingBottom: 5}]}>
                    <Text style={ {textAlign: 'center', color: 'white', fontWeight: 'bold', marginTop: 8 }}>
                        Address
                    </Text>

                    <Text style={[tw("text-sm text-center text-white"), {textAlign: 'center', color: 'white', fontSize: 14, fontWeight: 400}]}>
                        {order.Address}, {order.City}
                    </Text>

                    <Text style={ {textAlign: 'center', color: 'white',  fontStyle: 'italic', fontSize: 12}}>
                        Shipping Cost: ${order.shippingCost}
                    </Text>
                </View>
       

                {/* <Divider color="white" /> */}

                <View style={[tw("p-5"), {padding: 12}]}>
                    {order.trackingItems.items.map((item) => (
                        <View 
                            key={item.item_id}
                            style={ {flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text 
                                style={ {color: 'white', fontStyle: 'italic', fontSize: 12}}
                            >
                                {item.name}
                            </Text>
                            <Text 
                                style={ {color: 'white', fontSize: 16}}
                            >
                                x {item.quantity}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <MapView
                initialRegion={{
                    latitude: order.Lat,
                    longitude: order.Lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                style={[tw("w-full"), {flexGrow: 1}, !fullWidth && { height: 200 }]}
            >
                {order.Lat && order.Lng && (
                    <Marker
                        coordinate={{
                            latitude: order.Lat,
                            longitude: order.Lng,
                        }}
                        title="Delivery Location"
                        description={order.Address}
                        identifier="destination"
                    />
                
                )}

            </MapView>
        </View>
    </Card>
  )
}

export default DeliveryCard