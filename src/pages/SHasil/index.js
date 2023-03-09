import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import Pdf from 'react-native-pdf';
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';



export default function SHasil({ navigation, route }) {
    const item = route.params;
    console.log(item);





    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: colors.black,
        }}>
            <Image source={{
                uri: item.foto_user
            }} style={{
                marginTop: windowHeight / 7,
                width: windowWidth,
                height: windowWidth
            }} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});