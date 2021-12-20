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
  const [selectedProducts, setSelectedProducts] = React.useState([]);
  const [isCheckedAll, setIsCheckedAll] = React.useState(false);
  let selectedLength = useRef(0);

  React.useEffect(() => {
    const filtered = productList.filter((item) => item.isSelected === true);
    setSelectedProducts(filtered);
    if (filtered.length === productList.length) {
      selectedLength.current = filtered.length;
      setIsCheckedAll(true);
    } else {
      selectedLength.current = 0;
      setIsCheckedAll(false);
    }
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
    const temp = [...productList];
    const index = temp.findIndex((item) => item.id === id);
    if (type === 'increase') temp[index].quantity++;
    else {
      temp[index].quantity > 1 && temp[index].quantity--;
    }
    setProductList(temp);
  };

  const deleteProduct = (id) => {
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
  return (
    <View style={{ flex: 1 }}>
      <CartHeader navigation={navigation} />
      <ScrollView style={styles.body}>
        <Address />
        <AllSelect isChecked={isCheckedAll} onCheckAll={checkAll} />
        <ProductList
          deleteItem={deleteProduct}
          changeQuantity={changeQuantity}
          products={productList}
          onToggle={toggleItem}
        />
      </ScrollView>
      <Footer selectedItems={selectedProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.backGround,
  },
});
