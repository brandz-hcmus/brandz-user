import React, { useRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { CartHeader } from '../../header/cart';
import { colors } from '../../styles/color';
import { Address } from './components/Address';
import { AllSelect } from './components/AllSelect';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import { products } from './components/dummy/data';
import PageHeader from '../../components/PageHeader';
import { cart } from '../../store/cart';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../../share/configs/routers';
export const CartScreen = observer(() => {
  const [productList, setProductList] = React.useState(products);
  const [isCheckedAll, setIsCheckedAll] = React.useState(false);
  let selectedLength = useRef(0);

  const navigation = useNavigation();

  React.useEffect(() => {
    setProductList([...cart.cartItems]);
  }, [cart.dataVersion]);

  React.useEffect(() => {
    console.log('list', productList);
  }, [productList]);

  React.useEffect(() => {
    if (isCheckedAll) {
      const temp = [...productList];
      temp.forEach((product) => (product.isSelected = true));
      setProductList(temp);
    } else {
      if (selectedLength.current !== 0) {
        const temp = [...productList];
        temp.forEach((product) => (product.isSelected = false));
        setProductList(temp);
      }
      setIsCheckedAll(false);
    }
  }, [isCheckedAll]);

  const changeQuantity = (id, type) => {
    if (type === 'increase') cart.increaseQuantity(id);
    else {
      cart.decreaseQuantity(id);
    }
  };

  const deleteProduct = (id) => {
    cart.deleteItems([id]);
  };

  const toggleItem = (id) => {
    const temp = [...productList];
    const index = temp.findIndex((item) => item.id === id);
    temp[index].isSelected = !temp[index].isSelected;
    setProductList(temp);
  };

  const checkAll = () => {
    if (isCheckedAll) {
      setIsCheckedAll(false);
    } else {
      setIsCheckedAll(true);
    }
  };

  const toggleProducts = React.useMemo(() => {
    const filtered = productList.filter((item) => item.isSelected === true);

    if (filtered.length === productList.length) {
      selectedLength.current = filtered.length;
      setIsCheckedAll(true);
    } else {
      selectedLength.current = 0;
      setIsCheckedAll(false);
    }
    return filtered;
  }, [productList]);

  const onDeleteMany = () => {
    if (toggleProducts.length) {
      const temp = [];
      const ids = toggleProducts.map((e) => e.id);

      cart.deleteItems(ids);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageHeader title={'GIỎ HÀNG'} />
      {productList.length ? (
        <ScrollView style={styles.body}>
          <Address />
          <AllSelect
            selectNumber={toggleProducts.length}
            isChecked={isCheckedAll}
            onCheckAll={checkAll}
            onDeleteMany={onDeleteMany}
          />
          <ProductList
            deleteItem={deleteProduct}
            changeQuantity={changeQuantity}
            products={productList}
            onToggle={toggleItem}
          />
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>CHƯA CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenName.PRODUCTS_SCREEN)}
            style={{
              backgroundColor: colors.red,
              padding: 10,
              borderRadius: 8,
              marginTop: 20,
            }}
          >
            <Text style={{ color: colors.white }}>ĐẾN DANH SÁCH SẢN PHẨM</Text>
          </TouchableOpacity>
        </View>
      )}
      {productList.length ? (
        <Footer navigation={navigation} selectedItems={toggleProducts} />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
  },
});
