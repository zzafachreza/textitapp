import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';



export default function Home({ navigation }) {


  const __renderItem = ({ item }) => {
    return (
      <TouchableOpacity

        onPress={() => {
          navigation.navigate('Chat', {
            id: item.fid_lawan,
            foto_user: item.foto_user_lawan,
            nama_lengkap: item.nama_lengkap_lawan,
            email: item.email_lawan
          })
        }}
        style={{
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD',
          flexDirection: 'row'
        }}>
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.secondary,
        }}>
          <Image style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }} source={{
            uri: item.foto_user_lawan
          }} />
        </View>
        <View style={{
          paddingLeft: 10,
          flex: 1,
          justifyContent: 'center'
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 25
          }}>{item.nama_lengkap_lawan}</Text>
          {/* <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 30
          }}>{item.pesan}</Text> */}
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',

        }}>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: windowWidth / 30,
            color: colors.black
          }}>{moment(item.tanggal + ' ' + item.jam).format('LLL')}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  const [pengguna, setPengguna] = useState([]);
  useEffect(() => {


    if (isFocused) {
      __getTransaction();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      setUser(res);

      axios.post(apiURL + 'pengguna', {
        fid_user: res.id
      }).then(i => {
        console.log(i.data);
        setPengguna(i.data);
      })


      axios.post(apiURL + 'chat', {
        fid_user: res.id
      }).then(c => {
        console.log('data chat', c.data);
        setData(c.data);
      })

    });


  }



  return (






    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.primary,
    }}>
      <MyHeader menu="Inbox" />
      {/* info user */}
      <View style={{
        paddingHorizontal: 10,
        backgroundColor: colors.primary
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.navigate('Pengguna')} style={{
            marginHorizontal: 5,
            marginVertical: 10,
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#626262'
          }}>
            <Image source={require('../../assets/cari.png')} style={{
              width: 40,
              resizeMode: 'contain'
            }} />
          </TouchableOpacity>

          {pengguna.map(i => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('PenggunaDetail', i)} style={{
                width: 100,
                // overflow: 'hidden',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }} >

                <View style={{
                  marginHorizontal: 5,
                  marginVertical: 10,
                  width: 60,
                  height: 60,
                  position: 'relative',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#626262'
                }} >

                  <Image source={{
                    uri: i.foto_user
                  }} style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }} />
                  {i.teman > 0 && <Text style={{
                    paddingHorizontal: 5,
                    top: 0,
                    left: 0,
                    elevation: 2,
                    fontSize: 12,
                    position: 'absolute',
                    textAlign: 'center',
                    borderRadius: 5,
                    fontFamily: fonts.secondary[600],
                    backgroundColor: colors.white,
                    color: colors.primary,
                  }}>Friend</Text>}
                </View>

                <Text style={{
                  textAlign: 'center',
                  color: colors.white
                }}>{i.nama_lengkap}</Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      {/* menu utama */}
      <View style={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        backgroundColor: colors.white
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