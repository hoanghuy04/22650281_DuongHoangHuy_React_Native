import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function AssetExample() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column', gap: 20 }}>
        <View style={styles.section1Container}>
          <View style={styles.productDetail}>
            <Image
              source={require('../assets/image1.png')}
              style={{ width: 80, height: 100 }}
              resizeMode="contain"
            />

            <View style={{ flexDirection: 'column', gap: 8 }}>
              <Text style={styles.bookTitle}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={styles.subTitle}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.salePrice}>141.800 đ</Text>
              <Text style={styles.oldPrice}>141.800 đ</Text>

              <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <TouchableOpacity style={styles.amountButton}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.amountButton}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.rowBetween}>
            <Text style={{ fontWeight: 'bold' }}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>Xem tại đây</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.discountContainer}>
            <TextInput
              style={styles.input}
              placeholder="Mã giảm giá"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.applyButton}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section2Container}>
          <Text style={{ fontWeight: 'bold' }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>Nhập tại đây?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section3Container}>
          <Text style={styles.tamtinh}>Tạm tính</Text>
          <Text style={styles.price}>141.800 đ</Text>
        </View>
      </View>

      <View style={styles.section4Container}>
        <View style={styles.totalPrice}>
          <Text style={{ fontWeight: 'bold' }}>Thành tiền</Text>
          <Text style={styles.priceFinal}>141.800 đ</Text>
        </View>

        <TouchableOpacity style={styles.orderButton}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  },
  section1Container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    gap: 16,
  },
  productDetail: {
    flexDirection: 'row',
    gap: 10,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  subTitle: {
    color: '#666',
    fontSize: 12,
  },
  salePrice: {
    fontWeight: 'bold',
    color: 'red',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 12,
  },
  amountButton: {
    backgroundColor: '#ddd',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discountContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    height: 36,
    paddingHorizontal: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  section2Container: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  section3Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  tamtinh: {
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: 'red',
  },
  section4Container: {
    gap: 16,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  priceFinal: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
  orderButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 8,
  },
  linkText: {
    color: 'blue',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
