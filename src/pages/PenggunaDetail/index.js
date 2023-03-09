import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts, windowHeight } from '../../utils/fonts';
import { apiURL, getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

export default function PenggunaDetail({ navigation, route }) {
    const [user, setUser] = useState(route.params);

    console.log(route.params);
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(true);

    const addTeman = () => {
        getData('user').then(u => {

            const dd = {
                fid_user: u.id,
                fid_teman: user.id
            }
            console.log(dd);
            axios.post(apiURL + 'add_teman', dd).then(res => {
                console.log(res.data);
                setUser({
                    ...user,
                    teman: 1,
                })
            })

        })
    }

    const HapusTeman = () => {
        getData('user').then(u => {

            const dd = {
                fid_user: u.id,
                fid_teman: user.id
            }
            console.log(dd);
            axios.post(apiURL + 'hapus_teman', dd).then(res => {
                console.log(res.data);
                setUser({
                    ...user,
                    teman: 0,
                })
            })

        })
    }



    useEffect(() => {

    }, []);

    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Keluar',
                onPress: () => {
                    storeData('user', null);

                    navigation.replace('Login');
                }
            }
        ])
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 3,
                    padding: 5,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: '#8E99A2',
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F4F6FF'
        }}>

            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}


            {open &&
                <>

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: colors.primary,
                        padding: 5,
                        height: 80,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{
                            padding: 5,
                        }}>
                            <Icon type='ionicon' name='arrow-back-outline' size={windowWidth / 13} color={colors.white} />
                        </TouchableOpacity>
                        <Text style={{
                            flex: 1,
                            textAlign: 'center',
                            fontFamily: fonts.primary[400],
                            fontSize: windowWidth / 18,
                            color: colors.white
                        }}>{user.nama_lengkap}</Text>

                    </View>

                    <View style={{
                        backgroundColor: colors.white,
                        margin: 10,
                    }}>
                        <View style={{

                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 10,
                        }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SHasil', user)}>
                                <Image source={{
                                    uri: user.foto_user
                                }} style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 50,
                                }} />
                            </TouchableOpacity>

                        </View>
                        {user.teman == 0 && <MyButton onPress={addTeman} title="Add Friend" warna={colors.primary} Icons="person-add" />}
                        {user.teman == 1 && <MyButton onPress={HapusTeman} title="Unfriend" warna={colors.black} Icons="person-add" />}

                        <View style={{ padding: 10, }}>
                            <MyList label="Email" value={user.email} />
                            <MyList label="Tanggal Lahir" value={moment(user.tanggal_lahir).format('LL')} />
                            <MyList label="Jenis Kelamin" value={user.gender} />
                            <MyList label="Alamat" value={user.alamat} />
                            <MyList label="Nomor Ponsel" value={user.telepon} />

                        </View>
                        {/* data detail */}

                        {user.teman == 1 && <MyButton onPress={() => {

                            getData('user').then(u => {
                                navigation.navigate('Chat', user)
                            })

                        }} title="Start Chatting" warna={colors.primary} Icons="chatbubbles" />}
                    </View>

                </>
            }

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
