import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { Image } from 'react-native';
import { icons } from '../../Helper/icons';
import { TouchableOpacity } from 'react-native';
import { string } from '../../Helper/string';


const PakedDetails = ({route,navigation}) => {
    const { theme, themeStyles } = useTheme();
    const [count, setCount] = useState(0);
    const initialContentLimit = 300; 
    const detailsdata = route?.params?.detailsdata;
    const drtaildata = route?.params?.drtaildata;
    const foodname = route?.params?.foodname;
    const foodPrice = route?.params?.foodPrice;
     const foodwight = route?.params?.foodwight;
     
    console.log('detailsdata >> ',detailsdata)
    console.log('drtaildata >> ',drtaildata)
    console.log('foodname >> ',foodname)
    console.log('foodPrice >> ',foodPrice)
    console.log('foodwight >> ',foodwight)
    console.log('foodwight >> ',foodwight)
  const [showFullContent, setShowFullContent] = useState(false);
    const handleReadMore = () => {
      setShowFullContent(!showFullContent);
    };
    const getContentToShow = () => {
      if (showFullContent) {
        return string.fruitsdatails; 
      } else {
        return string.fruitsdatails.substring(0, initialContentLimit) + '...';
      }
    };
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
    const formatCount = (num) => {
      return num.toString().padStart(2, '0');
  };
  return (
    <View style={[styles.cantainer, {backgroundColor: themeStyles[theme].backgroundColor}]}>
        <Image source={detailsdata} style={styles.cauliflower} />
        <View style={[styles.mainview,{backgroundColor: themeStyles[theme].backgroundColorbox}]}>
            <ScrollView>
        <Text style={styles.textstyle}>{foodname}</Text>
        <View style={styles.flexrowview}>
        <Text style={styles.rupeestewxt}>₹</Text>
        <Text style={styles.pricestext}>{foodPrice}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.morethenview}>
        <Image source={icons.add} style={styles.plus} />
        </TouchableOpacity>
        <Text style={styles.countitem}>{formatCount(count)}</Text>
        <TouchableOpacity  onPress={handleDecrement} style={styles.lessthenview}>
        <Image source={icons.minus} style={styles.minus} />
        </TouchableOpacity>
      </View>
      <Text style={styles.pcstext}>{drtaildata} - {foodwight}</Text>
      <Text style={styles.detailstext}>Details</Text>
      <View style={styles.flexrowtwo}>
      <Text style={[styles.datailsinfom,{ color: themeStyles[theme].ordertextcolor }]}>{getContentToShow()}</Text>
      {!showFullContent && (
        <TouchableOpacity onPress={handleReadMore} style={styles.readmorepostiontexxt}>
          <Text style={styles.readmoretext}>Read more_</Text>
        </TouchableOpacity>
      )}
    
      </View>
      <View style={styles.flexrowviewthree}>
      <Image source={icons.trolly} style={styles.trolly} />
      <TouchableOpacity onPress={() => navigation.navigate('AddItem')} style={styles.buttonviewc}>
      <Text style={styles.addtotext}>Add to cart</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.marginbottom}/>
      </ScrollView>
      </View>
      </View>
  )
}

export default PakedDetails

