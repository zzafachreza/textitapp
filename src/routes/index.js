import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  SCek,
  SPenyakit,
  STentang,
  SHasil,
  SDaftar,
  SAdd,
  SHutang,
  GetStarted,
  TimAdd,
  TimList,
  TimDetail,
  TimAddPemain,
  TimSet,
  TimSetDetail,
  TimMulai,
  TimHasil,
  Account,
  Riwayat,
  Anggota,
  AnggotaDetail,
  AnggotaAdd,
  Kegiatan,
  KegiatanAdd,
  AccountEdit,
  Pengguna,
  PenggunaAdd,
  PenggunaEdit,
  SliderAdd,
  Slider,
  AktifitasAdd,
  Aktifitas,
  AktifitasLaporan,
  AktifitasDetail,
  AANilai,
  AAMateri,
  AAMateriVideo,
  AAMateriPdf,
  AATesawal,
  AATesAkhir,
  AATesglobal,
  AASubbab,
  AAInput,
  AABidan,
  AAKategori,
  AAAtur,
  AAKategoriSeks,
  Chat,
} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import PenggunaDetail from '../pages/PenggunaDetail';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AAInput"
        component={AAInput}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AABidan"
        component={AABidan}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="AAAtur"
        component={AAAtur}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SHasil"
        component={SHasil}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="AAKategori"
        component={AAKategori}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="AAKategoriSeks"
        component={AAKategoriSeks}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SAdd"
        component={SAdd}
        options={{
          headerShown: true,
          headerTitle: 'SCAN BARCODE',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="STentang"
        component={STentang}
        options={{
          headerShown: false,
          headerTitle: 'Tentang',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="PenggunaDetail"
        component={PenggunaDetail}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />
      <Stack.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          headerShown: true,
          headerTitle: 'Riwayat',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      {/* 

      <Stack.Screen
        name="KegiatanAdd"
        component={KegiatanAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Kegiatan',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      /> */}

      {/* <Stack.Screen
        name="Anggota"
        component={Anggota}
        options={({ route, navigation }) => ({
          title: 'Daftar Anggota',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AnggotaAdd')}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon name="create" type="ionicon" color="white" size={20} />
              </TouchableOpacity>
            </View>
          ),
        })}
      /> */}


      <Stack.Screen
        name="Pengguna"
        component={Pengguna}
        options={({ route, navigation }) => ({
          title: 'Daftar Pengguna',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },

        })}
      />



      <Stack.Screen
        name="PenggunaAdd"
        component={PenggunaAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />





      <Stack.Screen
        name="PenggunaEdit"
        component={PenggunaEdit}
        options={{
          headerShown: true,
          headerTitle: 'Edit Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Slider"
        component={Slider}
        options={({ route, navigation }) => ({
          title: 'Daftar Slider',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SliderAdd')}
                style={{
                  position: 'relative',
                  padding: 5,
                  marginHorizontal: 5,
                }}>
                <Icon name="create" type="ionicon" color="white" size={20} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />



      <Stack.Screen
        name="SliderAdd"
        component={SliderAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Slider',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="AktifitasAdd"
        component={AktifitasAdd}
        options={{
          headerShown: true,
          headerTitle: 'Checkin Loker',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Aktifitas"
        component={Aktifitas}
        options={{
          headerShown: true,
          headerTitle: 'Daftar POS',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="AktifitasLaporan"
        component={AktifitasLaporan}
        options={{
          headerShown: true,
          headerTitle: 'Laporan Aktifitas',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="AktifitasDetail"
        component={AktifitasDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Aktifitas',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="AASubbab"
        component={AASubbab}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AANilai"
        component={AANilai}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AAMateri"
        component={AAMateri}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AAMateriVideo"
        component={AAMateriVideo}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AAMateriPdf"
        component={AAMateriPdf}
        options={{
          headerShown: false,
        }}
      />




      <Stack.Screen
        name="AATesawal"
        component={AATesawal}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AATesAkhir"
        component={AATesAkhir}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AATesglobal"
        component={AATesglobal}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="SDaftar"
        component={SDaftar}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Bayar Hutang',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SHutang"
        component={SHutang}
        options={{
          headerShown: true,
          headerTitle: 'Tambahkan Hutang Baru',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      /> */}

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SCek"
        component={SCek}
        options={{
          headerShown: false,
          headerTitle: 'CEK HARGA DAN STOCK',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      {/* <Stack.Screen
        name="SCek"
        component={SCek}
        options={{
          headerShown: true,
          headerTitle: 'CEK HARGA DAN STOCK',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="SPenyakit"
        component={SPenyakit}
        options={{
          headerShown: true,
          headerTitle: 'Indeks Penyakit',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}

      />



      <Stack.Screen
        name="SHasil"
        component={SHasil}
        options={{
          headerShown: false,
          headerTitle: 'Hasil Analisa',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />




      <Stack.Screen
        name="TimAdd"
        component={TimAdd}
        options={{
          headerShown: true,
          headerTitle: 'Tim Baru',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />


      <Stack.Screen
        name="TimList"
        component={TimList}
        options={{
          headerShown: true,
          headerTitle: 'Brosur Download',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        }}
      />


      <Stack.Screen
        name="TimDetail"
        component={TimDetail}
        options={{
          headerShown: true,
          headerTitle: 'Detail Tim',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimAddPemain"
        component={TimAddPemain}
        options={{
          headerShown: true,
          headerTitle: 'Tambah Pemain Tim',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimSet"
        component={TimSet}
        options={{
          headerShown: true,
          headerTitle: 'Pilih SET',
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        }}
      />

      <Stack.Screen
        name="TimSetDetail"
        component={TimSetDetail}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      />
      <Stack.Screen
        name="TimMulai"
        component={TimMulai}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      />

      <Stack.Screen
        name="TimHasil"
        component={TimHasil}
        options={({ route }) => ({
          title: route.params.name,
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: colors.primary,
        })}
      /> */}



    </Stack.Navigator>
  );
}
