import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { CartHeader } from '../../header/cart';
import { colors } from '../../styles/color';
import { Address } from './components/Address';
import { AllSelect } from './components/AllSelect';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import { products } from './components/dummy/data';
export function CartScreen({ navigation }) {
  const [productList, setProductList] = React.useState(products);
  const [isCheckedAll, setIsCheckedAll] = React.useState(false);
  let selectedLength = useRef(0);

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
    const temp = [...productList];
    const index = temp.findIndex((item) => item.id === id);
    if (type === 'increase') temp[index].quantity++;
    else {
      temp[index].quantity > 1 && temp[index].quantity--;
    }
    setProductList(temp);
  };

  const deleteProduct = (id) => {
    console.log('call delete', id);
    const filtered = productList.filter((item) => item.id !== id);

    setProductList(filtered);
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

      toggleProducts.forEach((product) => {
        products.forEach((item) => {
          if (item.id !== product.id) {
            temp.push(item);
          }
        });
      });
      setProductList(temp);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <CartHeader navigation={navigation} content={'GIO HANG'} />
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
      <Footer navigation={navigation} selectedItems={toggleProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
  },
});
