import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { colors, fonts, windowWidth } from '../../utils';
import { useNavigation } from '@react-navigation/native';
export default function MyHeader({ menu }) {

  const navigation = useNavigation();
  return (

    <View style={{
      flexDirection: 'row',
      padding: 20,
      backgroundColor: colors.primary,
    }
    }>
      <View style={{
        flex: 1,
      }}>
        <Text style={{
          fontFamily: fonts.primary[600],
          fontSize: windowWidth / 17,
          color: colors.white
        }}>{menu}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AAAtur')} style={{
        backgroundColor: colors.primary,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        width: 40,
      }}>
        <Image source={require('../../assets/menu.png')} style={{
          width: 18,
          height: 18,
        }} />
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({});
