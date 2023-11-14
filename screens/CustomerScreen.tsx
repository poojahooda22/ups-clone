import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';

const CustomerScreen = () => {
    const tw = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tw ('text-blue-700')}>CustomerScreen</Text>
    </SafeAreaView>
  )
}

export default CustomerScreen

const styles = StyleSheet.create({})