import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
export default function GetStarted({ navigation }) {
    const top = new Animated.Value(0.3);






    return (
        <ImageBackground
            style={{
                flex: 1,
            }}>
            <Image
                source={require('../../assets/head.png')}
                style={
                    {
                        width: windowWidth,
                        height: 80,

                    }
                }
            />
            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: windowWidth / 10
                }}>Selamat datang</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 15
                }}>Di</Text>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20
                }}>Mata Pelajaran Ilmu Pengetahuan Sosial (IPS) SMP KELAS VIII</Text>
                <LinearGradient colors={[colors.secondary, colors.primary]} style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    marginTop: 20,
                    backgroundColor: colors.primary
                }} />
                <Text style={{
                    marginTop: 20,
                    textAlign: 'center',
                    fontFamily: fonts.secondary[800],
                    fontSize: windowWidth / 15
                }}>
                    Perubahan Masyarakat{'\n'}
                    Masa Penjajahan dan{'\n'}
                    Tumbuhnya Semangat{'\n'}
                    Kebangsaan{'\n'}
                </Text>


            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                padding: 10,
                justifyContent: 'center',
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <LinearGradient colors={[colors.secondary, colors.primary]} style={{
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            right: 10,
                            fontFamily: fonts.secondary[600],
                            fontSize: windowWidth / 15
                        }}>Lanjutkan</Text>
                        <Icon type='ionicon' name='chevron-forward-outline' size={windowHeight / 25} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({});
