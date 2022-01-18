import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';
import { Observer } from 'mobx-react';
import { cart } from '../store/cart';
import SearchResult from './SearchResult';
import useDebounce from '../share/utils/async';

const HomeHeader = ({setSearchText}) => {
  const [sampleText,setSampleText]=useState("");
  const navigation = useNavigation();
  const _onMoveCartScreen = () => {
    navigation.navigate(ScreenName.CART_SCREEN);
  };
  const _onChangeText=(text)=>{
    setSampleText(text);
  }
  const debounceSearch=useDebounce(sampleText,500);
  if(debounceSearch){
    console.log("Searching...",debounceSearch);
    setSearchText(debounceSearch)
  }
  return (
    <>
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Feather
          style={styles.searchIcon}
          name="search"
          size={20}
          color="black"
        />
        <TextInput
          style={styles.inputWrapper}
          placeholder="Tìm kiếm..."
          onChangeText={_onChangeText}
          
        ></TextInput>
        <Feather
          style={styles.cameraIcon}
          name="camera"
          size={20}
          color="black"
        />
      </View>
      <TouchableOpacity onPress={_onMoveCartScreen}>
        <Ionicons
          style={styles.icon}
          name="cart-outline"
          size={24}
          color="white"
        />
        <Observer>
          {() => {
            const len = cart.cartLen;
            return (
              <View style={styles.cartCount}>
                <Text style={styles.cartCountText}>{len}</Text>
              </View>
            );
          }}
        </Observer>
      </TouchableOpacity>
    </View>
    <SearchResult visible={true} />
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: 40,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchWrapper: {
    width: 310,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    left: 8,
    fontWeight: 'bold',
    top: 1.5,
  },
  inputWrapper: {
    paddingLeft: 30,
    paddingTop: 3,
    paddingBottom: 3,
  },
  cameraIcon: {
    position: 'absolute',
    fontWeight: 'bold',
    top: 1.5,
    left: 264,
  },
  cartCount: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff4444',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  cartCountText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    textAlign: 'center',
    color: '#fff',
  },
});
