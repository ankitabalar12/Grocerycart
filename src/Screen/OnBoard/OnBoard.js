import React, { useRef, useState, } from 'react';
import { Image, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';
import { useTheme } from '../../Componets/ThemeContext';
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';
import { styles } from './styles';
// import { styles } from './styles';

const OnBoard = ({navigation}) => {
  const { theme, themeStyles } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null); 
  const onPressNext = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.state.index;
      const totalSlides = swiperRef.current.state.total;
  
      if (currentIndex === totalSlides - 1) {
        swiperRef.current.scrollBy(-currentIndex, true);
      } else {
        swiperRef.current.scrollBy(1);
      }
    }
  };
  

  return (
    <View style={[styles.container, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <Swiper style={styles.wrapper}
       paginationStyle={{height:'18%', }}
       dotStyle={styles.dot}
       loop={false}
       activeDotStyle={styles.activeDot}
       ref={(ref) => {
        swiperRef.current = ref;
      }}>
        <View style={styles.slide1}>
        <Image source={icons.buygrocery} style={[styles.img]} />
        <Text style={[styles.textstyles,{color:themeStyles[theme].onbordtext}]}>{string.BuyGrocery}</Text>
        <Text style={[styles.loremtaxt,{color:themeStyles[theme].textColor}]}>{string.loremipsum}</Text>
        <View style={styles.flrxrowtext}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textstyleskip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNext} >
          <Text style={styles.textstylenext}>Next</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.slide2}>
        <Image source={icons.fooddeliverboy} style={[styles.img2]} /> 
        <Text style={[styles.textstyles,{color:themeStyles[theme].onbordtext}]}>{string.FirstDelivery}</Text>
        <Text style={[styles.loremtaxt2,{color:themeStyles[theme].textColor}]}>{string.loremipsum}</Text>
        <View style={[styles.flrxrowtext,styles.flrxrowtext2]}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textstyleskip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressNext} >
          <Text style={styles.textstylenext}>Next</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.slide3}>
        <Image source={icons.foodcooking} style={[styles.img3]} />
        <Text style={[styles.textstyles,{color:themeStyles[theme].onbordtext}]}>{string.tastyfood}</Text>
        <Text style={[styles.loremtaxt,{color:themeStyles[theme].textColor}]}>{string.loremipsum}</Text>
        <View style={styles.flrxrowtext}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
          <Text style={styles.textstyleskip}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Login')}  >
          <Text style={styles.textstylenext}>Next</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Swiper>
    </View>
  );
};



export default OnBoard;
