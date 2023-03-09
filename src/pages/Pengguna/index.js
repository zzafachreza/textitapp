import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function Pengguna({ navigation }) {

    const isFocused = useIsFocused();

    const [data, setData] = useState([]);
    const [tmp, setTmp] = useState([]);

    useEffect(() => {

        if (isFocused) {
            getTransaction();
        }


    }, [isFocused]);


    const getTransaction = () => {
        getData('user').then(u => {
            axios.post(apiURL + 'pengguna', {
                fid_user: u.id
            }).then(res => {
                console.log(res.data);
                setData(res.data);
                setTmp(res.data);
            })
        })
    }


    const __renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => navigation.navigate('PenggunaDetail', item)} style={{
                borderBottomWidth: 1,
                paddingVertical: 5,
                borderBottomColor: colors.zavalabs,
                backgroundColor: colors.white,
                padding: 10,
                borderRadius: 10,
                marginVertical: 5,
                flexDirection: 'row'
            }}>

                <View style={{
                    paddingRight: 10,
                }}>

                    <Image source={{
                        uri: item.foto_user
                    }} style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                    }} />
                    {item.teman > 0 && <Text style={{
                        paddingHorizontal: 5,
                        elevation: 2,
                        fontSize: 12,
                        position: 'absolute',
                        textAlign: 'center',
                        borderRadius: 5,
                        fontFamily: fonts.secondary[600],
                        backgroundColor: colors.primary,
                        color: colors.white,
                    }}>Friend</Text>}
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        fontFamily: fonts.primary[600],
                        fontSize: windowWidth / 25
                    }}>{item.nama_lengkap} </Text>
                    <Text style={{
                        fontFamily: fonts.primary[300],
                        fontSize: windowWidth / 25
                    }}>{item.email}</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[200],
                        fontSize: windowWidth / 25
                    }}>{item.telepon}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Icon type='ionicon' name='chevron-forward-outline' />
                </View>
            </TouchableOpacity>
        )

    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.zavalabs,
            padding: 10,
        }}>

            <View style={{
                flexDirection: 'row',
                position: 'relative',
            }}>
                <TextInput onChangeText={x => {
                    const filtered = data.filter(i => i.email.toLowerCase().indexOf(x.toLowerCase()) > -1);

                    if (filtered.length == 0 || x.length == 0) {
                        setData(tmp);
                        console.log('alla', tmp)

                    } else {
                        setData(filtered);
                        console.log(filtered)
                    }

                }} placeholder='Search email..' style={{
                    flex: 1,
                    fontFamily: fonts.primary[400],
                    backgroundColor: colors.white,
                    borderRadius: 10,
                    paddingLeft: 10,
                }} />
                <View style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                }}>
                    <Icon type='ionicon' color={colors.border} name='search' />
                </View>
            </View>
            <FlatList data={data} renderItem={__renderItem} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})