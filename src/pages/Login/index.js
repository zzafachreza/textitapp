import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';


export default function ({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    email: null,
    password: null
  });
  const [loading, setLoading] = useState(false);



  const masuk = () => {


    if (kirim.email == null && kirim.password == null) {
      Alert.alert(MYAPP, 'email or Passwoord could not empty !');
    } else if (kirim.email == null) {
      Alert.alert(MYAPP, 'email  could not empty');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password  could not empty');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('Home')
          }

        });



    }




  }

  useEffect(() => {

    // const backAction = () => {
    //   Alert.alert("Info Wks", "Apakah kamu yakin akan keluar aplikasi ?", [
    //     {
    //       text: "Cancel",
    //       onPress: () => null,
    //       style: "cancel"
    //     },
    //     { text: "YES", onPress: () => BackHandler.exitApp() }
    //   ]);
    //   return true;
    // };

    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );

    // return () => backHandler.remove();
  }, [])

  return (
    <>
      <ScrollView style={{ padding: 10, flex: 1, backgroundColor: colors.white, position: 'relative' }}>
        <Image
          source={require('../../assets/efek1.png')}
          style={
            {
              left: 0,
              width: 250,
              height: 180,
              resizeMode: 'contain',
              position: 'absolute'
            }
          }
        />

        <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingTop: 10 }}>

          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>

            <Image
              source={require('../../assets/logo.png')}
              style={
                {
                  width: 250,
                  height: 250,
                  resizeMode: 'contain'
                }
              }
            />



          </View>


        </View>
        <MyGap jarak={10} />
        <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
          <MyInput autoFocus label="Email" onChangeText={val => setKirim({
            ...kirim,
            email: val
          })}
            iconname="mail" placeholder="Enter your email" />
          <MyGap jarak={20} />
          <MyInput
            onChangeText={val => setKirim({
              ...kirim,
              password: val
            })}
            secureTextEntry={true}
            label="Password"
            iconname="lock-closed"
            placeholder="Enter your password"
          />
          <MyGap jarak={40} />
          {!loading &&


            <>
              <MyButton
                onPress={masuk}
                title="Login"
                warna={colors.primary}
                Icons="log-in-outline"
              />

              <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{
                padding: 10,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center'
              }}><Text style={{
                fontSize: windowWidth / 28,
                marginTop: 10,
                fontFamily: fonts.primary[400],
                textAlign: 'center',
                color: colors.tertiary
              }}>Don't have an account ? <Text style={{
                fontSize: windowWidth / 28,
                marginTop: 10,
                fontFamily: fonts.primary[600],
                textAlign: 'center',
                color: colors.tertiary
              }}>Register</Text></Text></TouchableOpacity>
            </>

          }

        </View>
        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}
      </ScrollView>
      <Text style={{
        backgroundColor: colors.white,
        fontSize: windowWidth / 28,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        color: colors.black
      }}>by Sepriadi Entaren</Text>
    </>
  );
}

const styles = StyleSheet.create({});
