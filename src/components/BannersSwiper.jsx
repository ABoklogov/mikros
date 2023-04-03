import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { fetchBannersProducts } from 'store/banners/bannersOperations';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import components
import Preloader from 'components/shared/Preloader';
// import vars
import { radius, strings, baseUrlImg, activeOpacity } from 'res/vars';

const WIDTH = Dimensions.get('window').width;
const widthBanner = WIDTH - 30; // ширина баннера (прелоадера)
const heightBanner = 162; // высота баннера (прелоадера)

export default BannersSwiper = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { homeBanners } = useSelector(state => state);
  const [sizeImage, setSizeImage] = useState(null);

  const goToSectionSale = (id, name) => {
    dispatch(fetchBannersProducts(id, name));
    navigation.navigate(strings.nameNestedHome.homeBannersProducts)
  };

  // вычисляет размер картинки
  const calcSizeImage = (sizes) => {
    let photoWidth = widthBanner;
    let photoHeight = heightBanner;

    if (sizes) {
      if (sizes.width > photoWidth || sizes.height > photoHeight) {
        if (sizes.width > sizes.height) {
          const ratio = sizes.height / sizes.width;
          photoHeight = photoWidth * ratio;
        } else if (sizes.width < sizes.height) {
          const ratio = sizes.width / sizes.height;
          photoWidth = photoHeight * ratio;
        };
      } else {
        photoWidth = sizes.width;
        photoHeight = sizes.height;
      };
    };

    return {
      width: photoWidth,
      height: photoHeight
    };
  };

  return (
    <View style={styles.container}>
      {
        (homeBanners.banners.items.length === 0 || homeBanners.banners.isLoading) ? (
          <Preloader
            width={widthBanner}
            height={heightBanner}
            radius={radius.button}
          />
        ) : (
          <SwiperFlatList
            autoplay
            autoplayDelay={10}
            autoplayLoop
            index={0}
            showPagination
            paginationStyleItem={styles.dot}
            data={homeBanners.banners.items}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={activeOpacity}
                onPress={() => goToSectionSale(item.categoryId, item.name)}
              >
                <Image
                  resizeMode='stretch'
                  style={{ ...styles.wrap, ...calcSizeImage(sizeImage) }}
                  source={{ uri: `${baseUrlImg}/upload/${item.picture.SUBDIR}/${item.picture.FILE_NAME}` }}
                  onLoad={({ nativeEvent: { source: { width, height } } }) => setSizeImage({ width, height })}
                />
              </TouchableOpacity>
            )}
          />
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  wrap: {
    borderRadius: radius.button,
  },
  dot: {
    width: 10,
    height: 10,
  }
});