import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../share/configs/routers';
import { Observer } from 'mobx-react';
import { cart } from '../store/cart';
import SearchResult from './SearchResult';
import useDebounce from '../share/utils/async';
import {ProductListData} from '../share/utils/constants'
import StaticImages from '../share/static/images';

const HomeHeader = ({ }) => {
  const [sampleText, setSampleText] = useState('');
  const navigation = useNavigation();
  const [visible,setVisible]=useState(false);
  const [dataSearch,setDataSearch]=useState();
  const [notFound,setNotFound]=useState(null);
  const _onMoveCartScreen = () => {
    navigation.navigate(ScreenName.CART_SCREEN);
  };
  const _onChangeText = (text) => {
    setSampleText(text);
  };
  const debounceSearch = useDebounce(sampleText, 500);
  const _handleSearchProducts=(searchText)=>{
    let res=[];
    ProductListData.forEach(item=>{
      if(item.searchTerm.includes(searchText.toLowerCase())){
        res.push(item);
      }
    })
    return res;
  }
  

  useEffect(()=>{
    if (debounceSearch) {
      console.log('Searching...', debounceSearch);
      let res=_handleSearchProducts(debounceSearch);
      console.log('Co data khum?',res.length);
      if(res.length!==0){
        setVisible(true);
        setDataSearch(res);
        setNotFound(null);
      }else{
        setVisible(true);
        setDataSearch([]);
        setNotFound('Không tìm thấy sản phẩm cần tìm');
      }
    }
  },[debounceSearch])
  const _onBlur=()=>{
    setVisible(false);
    setSampleText('');
    setDataSearch([]);
    setNotFound(null);
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.navigate(ScreenName.HOME_SCREEN)}>

        <Image source={StaticImages.brandz} style={styles.brandzLogo} />
        </TouchableOpacity>
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
            value={sampleText}
            onBlur={_onBlur}
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
      <SearchResult visible={visible} data={dataSearch} notFound={notFound} />
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
  brandzLogo:{
    width: 32,
    height: 32,
    borderRadius:16,
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
