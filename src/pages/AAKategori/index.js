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

export default function AAKategori({ navigation, route }) {
    const __renderItem = ({ item, index }) => {
        return (

            <View style={{
                position: 'relative',
                padding: 10,
            }}>

                <TouchableOpacity onPress={() => navigation.navigate('AAMateri', {
                    fid_kategori: item.id,
                    nama_kategori: item.nama_kategori
                })} style={{
                    flex: 1,
                    width: windowWidth / 1.2,
                    height: 70,
                    backgroundColor: colors.white,
                    margin: 2,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    elevation: 1,
                }}>
                    {index % 2 !== 0 && <Image style={{
                        width: windowWidth / 4.5,
                        height: 80,

                        resizeMode: 'contain',
                    }} source={{
                        uri: item.foto_kategori
                    }} />}


                    <View style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        alignItems: index % 2 !== 0 ? 'flex-end' : 'flex-start',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: windowWidth / 20,
                        }}>{item.nama_kategori}</Text>
                    </View>
                    {index % 2 === 0 && <Image style={{
                        width: windowWidth / 4.5,
                        height: 80,

                        resizeMode: 'contain',
                    }} source={{
                        uri: item.foto_kategori
                    }} />}
                </TouchableOpacity>

            </View>

        )
    }

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const isFocused = useIsFocused();
    useEffect(() => {


        if (isFocused) {
            __getTransaction();
        }

    }, [isFocused]);

    const __getTransaction = () => {
        getData('user').then(res => {
            setUser(res);
        });
        axios.post(apiURL + 'kategori').then(res => {
            console.log(res.data);
            setData(res.data);
        })



    }

    return (



        <SafeAreaView style={{
            flex: 1,
            padding: 20,
            backgroundColor: colors.myback2,
            position: 'relative'
        }}>
            <MyHeader />
            <Image style={{
                position: 'absolute',
                top: 20,
                left: 20,
                width: 25,
                height: 25,
            }} source={require('../../assets/bintang_putih.png')} />
            <Image style={{
                position: 'absolute',
                top: 70,
                right: 40,
                width: 25,
                height: 25,
            }} source={require('../../assets/bintang_putih.png')} />
            <Image style={{
                position: 'absolute',
                top: 90,
                right: 20,
                width: 25,
                height: 25,
            }} source={require('../../assets/bintang_putih.png')} />


            <Text style={{
                fontFamily: fonts.primary[800],
                color: colors.black,
                textAlign: 'center',
                fontSize: windowWidth / 9
            }}>Yuk Cari Tahu{'\n'}<Text style={{
                fontFamily: fonts.primary[800],
                color: colors.black,
                fontSize: windowWidth / 20
            }}>Seputar Kesehatan Remaja</Text></Text>

            <View style={{
                marginTop: 20,
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <FlatList data={data} renderItem={__renderItem} />
            </View>
        </SafeAreaView>











    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: windowHeight,
        height: windowWidth / 2,
    },
    imageContainer: {
        flex: 1,
        marginBottom: 1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});