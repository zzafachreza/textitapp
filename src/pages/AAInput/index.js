import { Alert, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker'
import { maskJs, maskCurrency } from 'mask-js';
import moment from 'moment';

export default function AAInput({ navigation, route }) {

    const [loading, setLoading] = useState(false);

    const [kirim, setKirim] = useState({
        tanggal: moment().format('YYYY-MM-DD'),
        fid_user: route.params.id,
        tinggi_badan: '',
        berat_badan: '',
        lingkar_lengan: '',
        tekanan_darah: '',
        hemoglobin: ''


    });


    // setLoading(false);

    const sendServer = () => {
        console.log(kirim);
        setLoading(true);

        axios.post(apiURL + 'insert_kesehatan', kirim).then(res => {
            console.log(res.data);
            if (res.data == 200) {
                setLoading(false);
                Alert.alert(MYAPP, 'Data berhasil di simpan !');
                navigation.goBack();
            }
        })
    }


    useEffect(() => {


    }, [])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 20,
        }}>
            <MyHeader menu='Input Kesehatan kamu yuk!' />
            <MyGap jarak={20} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View
                    style={{

                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 5,
                    }}>
                    <Icon type="ionicon" name='calendar' color={colors.black} size={16} />
                    <Text
                        style={{
                            fontFamily: fonts.secondary[600],
                            color: colors.black,
                            left: 10,
                            fontSize: 12,
                        }}>
                        Tanggal
                    </Text>
                </View>
                <DatePicker
                    style={{ width: '100%' }}
                    date={kirim.tanggal}
                    mode="date"
                    placeholder="tanggal"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            right: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 0,
                            backgroundColor: colors.zavalabs,
                            backgroundColor: colors.zavalabs,
                            borderRadius: 10,
                            marginTop: 5,
                            fontFamily: fonts.secondary[600],
                            borderColor: colors.primary,
                            borderWidth: 0,
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {
                        setKirim({
                            ...kirim,
                            tanggal: date
                        })
                    }}
                />
                <MyInput iconname='create' label='Tinggi Badan (cm)' onChangeText={x => { setKirim({ ...kirim, tinggi_badan: x }) }} /><MyGap jarak={10} />
                <MyInput iconname='create' label='Berat Badan (kg)' onChangeText={x => { setKirim({ ...kirim, berat_badan: x }) }} /><MyGap jarak={10} />
                <MyInput iconname='create' label='Lingkar Lengan (cm)' onChangeText={x => { setKirim({ ...kirim, lingkar_lengan: x }) }} /><MyGap jarak={10} />
                <MyInput iconname='create' label='Tekanan Darah (mmHg)' onChangeText={x => { setKirim({ ...kirim, tekanan_darah: x }) }} /><MyGap jarak={10} />
                <MyInput iconname='create' label='Hemoglobin (gr/dl)' onChangeText={x => { setKirim({ ...kirim, hemoglobin: x }) }} /><MyGap jarak={10} />




            </ScrollView>

            <MyGap jarak={20} />
            {!loading && <MyButton onPress={sendServer} title="SIMPAN" warna={colors.foourty} Icons="save-outline" />}

            {loading && <ActivityIndicator size="large" color={colors.primary} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})