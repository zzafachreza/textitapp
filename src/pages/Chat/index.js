import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
    ScrollView,
    Keyboard,
    TextInput,
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

export default function Chat({ navigation, route }) {


    const encrypt = (plaintext) => {

        var key = ''
            , ciphertext = ''
            , len = plaintext.length

        for (var i = 0; i < len; i++) {
            // push in a non-random 0-9 for the generated key
            key += ~~((Math.random() * 10) - 1)
            // encrypt this character with just generated key
            ciphertext += xor(plaintext.charCodeAt(i), key[i])
        }
        return [key, ciphertext]
    }

    const decrypt = (key, ciphertext) => {

        var plaintext = ''
            , key = key.split('')
            , len = ciphertext.length

        for (var i = 0; i < len; i++) {
            plaintext += xor(ciphertext.charCodeAt(i), key[i])
        }

        return plaintext
    }

    const xor = (char, key) => {
        return String.fromCharCode(char ^ key)
    }

    const [lawan, setLawan] = useState(route.params);
    const scrollViewRef = useRef();
    const [user, setUser] = useState({})
    const [data, setData] = useState([]);
    const [kirim, setKirim] = useState({
        pesan: '',
        fid_lawan: lawan.id
    })
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const __kirim = () => {
        if (kirim.pesan.length == 0) {
            Alert.alert(MYAPP, 'Your message is empty !')
        } else {

            const VC = encrypt(kirim.pesan);
            setKirim({
                ...kirim,
                kunci: VC[0],
                cipher: VC[1]
            })

            console.log('send server', {
                fid_user: kirim.fid_user,
                fid_lawan: kirim.fid_lawan,
                pesan: kirim.pesan,
                kunci: VC[0],
                cipher: VC[1]
            })


            axios.post(apiURL + 'insert_chat', {
                fid_user: kirim.fid_user,
                fid_lawan: kirim.fid_lawan,
                pesan: kirim.pesan,
                kunci: VC[0],
                cipher: VC[1]
            }).then(res => {
                console.log(res.data);
                getTransaction();
                Keyboard.dismiss();
                setKirim({
                    ...kirim,
                    pesan: '',
                })
            })

        }
    }
    useEffect(() => {


        getTransaction();


        getData('user').then(u => {
            setUser(u);
            setKirim({
                ...kirim,
                fid_user: u.id
            })
        })

        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus("Keyboard Shown");
            scrollViewRef.current.scrollToEnd({ animated: true })
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus("Keyboard Hidden");
        });


        return () => {
            showSubscription.remove();
            hideSubscription.remove();

        };
    }, []);


    const getTransaction = () => {
        getData('user').then(u => {
            axios.post(apiURL + 'get_chat', {
                kode: (parseFloat(u.id) + parseFloat(lawan.id))
            }).then(res => {
                console.log('kode', (parseFloat(u.id) + parseFloat(lawan.id)))

                setData(res.data);

            })
        })
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#F4F6FF'
        }}>


            {/* header */}

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
                    <Icon type='ionicon' name='chevron-back-outline' size={windowWidth / 13} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SHasil', lawan)}>
                    <Image source={{
                        uri: lawan.foto_user
                    }} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                    }} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    paddingLeft: 10,
                }} onPress={() => navigation.navigate('PenggunaDetail', lawan)}>
                    <Text style={{

                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20,
                        color: colors.white
                    }}>{lawan.nama_lengkap}</Text>
                    <Text style={{

                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 30,
                        color: colors.white
                    }}>{lawan.email}</Text>

                </TouchableOpacity>


            </View>


            <View style={{
                flex: 1,
                backgroundColor: colors.zavalabs,
                overflow: 'hidden',
                padding: 5
            }}>

                {/* Chattinga isi */}

                <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                    <View style={{
                        marginVertical: 10,
                        marginHorizontal: 20,
                        backgroundColor: '#F1F9D1',
                        justifyContent: 'center',
                        // alignItems: 'center',
                        padding: 5,
                        borderRadius: 30,
                        flexDirection: 'row',

                    }}>
                        <Icon type='ionicon' name='lock-closed' size={windowWidth / 35} />
                        <Text style={{ fontFamily: fonts.primary[400], left: 5, fontSize: windowWidth / 32 }}>Pesan ini di enkripsi dengan algoritma vernam cipher</Text>
                    </View>
                    {data.map(item => {

                        let decodePesan = decrypt(item.kunci, item.cipher)

                        return (
                            <View style={{
                                backgroundColor: item.fid_user == user.id ? '#E6FCD9' : colors.white,
                                maxWidth: '100%',
                                elevation: 1,
                                borderTopRightRadius: item.fid_user == user.id ? 10 : 0,
                                borderTopLeftRadius: item.fid_user !== user.id ? 10 : 0,
                                borderBottomLeftRadius: item.fid_user == user.id ? 10 : 0,
                                borderBottomRightRadius: item.fid_user !== user.id ? 10 : 0,
                                borderTopLeftRadius: item.fid_user == user.id ? 10 : 0,
                                borderTopRightRadius: item.fid_user !== user.id ? 10 : 0,
                                marginVertical: 5,
                                padding: 10,
                                width: '70%',
                                alignSelf: item.fid_user == user.id ? 'flex-end' : 'flex-start'

                            }}>



                                <Text style={{
                                    fontFamily: fonts.secondary[400],
                                    color: colors.black,
                                    fontSize: windowWidth / 25
                                }}>{decodePesan}</Text>
                                <View>
                                    <Text style={{
                                        textAlign: 'right',
                                        fontFamily: fonts.secondary[400],
                                        color: colors.border,
                                        fontSize: windowWidth / 35
                                    }}>{moment(item.tanggal).format('LL')} Pukul {item.jam}</Text>
                                </View>

                            </View>
                        )
                    })}
                </ScrollView>




            </View>

            <View style={{
                backgroundColor: colors.zavalabs,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.white,
                    borderRadius: 10,
                }}>


                    <TextInput autoFocus value={kirim.pesan} onChangeText={v => setKirim({
                        ...kirim,
                        pesan: v,
                        fid_user: user.id,
                        fid_lawan: lawan.id
                    })} multiline style={{

                        fontFamily: fonts.secondary[400],
                        marginLeft: 10,
                        fontSize: windowWidth / 20
                    }} />

                </View>

                <TouchableOpacity onPress={__kirim} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='send-outline' color={colors.primary} size={windowWidth / 15} />
                </TouchableOpacity>
            </View>



        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
