import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import { Linking } from 'react-native';
import { Icon } from 'react-native-elements';



export default function AAAtur({ navigation }) {

    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Are you sure want to log out ?', [
            {
                text: 'NO',
                style: "cancel"
            },
            {
                text: 'YES',
                onPress: () => {
                    storeData('user', null);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Splash' }],
                    });
                }
            }
        ])
    };


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                padding: 5,
                height: 85,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='close' size={windowWidth / 13} color={colors.white} />
                </TouchableOpacity>
                <Text style={{
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: fonts.primary[600],
                    fontSize: windowWidth / 18,
                    color: colors.white
                }}>TEXT IT</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
                    padding: 5,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                    <Icon type='ionicon' name='settings' size={windowWidth / 17} color={colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                padding: 20,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>My Profile</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>Home</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SCek')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>Application Guide</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('STentang')} style={{
                    flexDirection: 'row',
                    padding: 20,
                    marginVertical: 2
                }}>
                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black
                    }}>About Application</Text>
                    <Icon type='ionicon' name='chevron-forward' color={colors.black} />
                </TouchableOpacity>
            </View>

            <View style={{
                padding: 20,
            }}>
                <MyButton onPress={btnKeluar} warna="#F5F2E6" title="Logout" Icons="log-out" iconColor={colors.black} colorText={colors.black} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})