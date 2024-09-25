import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { icons } from '../../Helper/icons';

const InFormatiom = () => {
  const { theme, themeStyles } = useTheme();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('screen').height;

  return (
    <ScrollView>
      <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
        <ScrollView
          horizontal={true}
          snapToInterval={screenWidth}
          pagingEnabled={true}
          contentContainerStyle={{ minHeight: 1000 }}
        >
          <View style={{ width: 700, height: 1000, }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.infoView}>
                <Text style={styles.infotext}>Free Info</Text>
              </View>
              <View style={styles.infoViewtwo}>
                <Text style={styles.infotext2}>Rejucation</Text>
              </View>
            </View>

            <Text style={[styles.textstyle, { color: themeStyles[theme].textColor }]}>
              Hello thank you for joining Rejucation. We are sure you'll enjoy your journey with us. We will be helping you to find the best courses throughout your learning with Rejucation. Stay tuned for amazing products to make your journey even better!We are sure you'll enjoy your journey with us.
              Hello thank you for joining Rejucation. We are sure you'll enjoy your journey with us. We will be helping you to find the best courses throughout your learning with Rejucation. Stay tuned for amazing products to make your journey even better!We are sure you'll enjoy your journey with us.
            </Text>
            <Text style={[styles.textstyle, { color: themeStyles[theme].textColor }]}>
              Contact us for any other queries you might have.
            </Text>
            <View style={styles.flexrowstyle2}>
              <View style={styles.flexreowemail}>
                <Image source={icons.email} style={styles.email} />
                <Text style={[styles.textstyle2, { color: themeStyles[theme].textColor }]}>rejucationedu@gmail.com</Text>
              </View>
              <View style={[styles.flexreowemail, styles.flexreowemail2]}>
                <Image source={icons.telephonecall} style={styles.email} />
                <Text style={[styles.textstyle2, { color: themeStyles[theme].textColor }]}>882709890</Text>
              </View>
            </View>
            <Text style={[styles.detailestext, { color: themeStyles[theme].textColor }]}>Details</Text>
            <View style={styles.flewortwoand}>
              <View style={[styles.linerowview,]}>
                <View style={styles.textflwoindeatails}>
                  <Text style={[styles.textstyle3, { color: themeStyles[theme].textColor }]}>S.name</Text>
                  <Text style={[styles.textine, { color: themeStyles[theme].textColor }]}>-</Text>
                  <Text style={[styles.textstyle4, { color: themeStyles[theme].textColor }]}>Deepak Jatav</Text>
                </View>
              </View>
              <View style={[styles.linerowview2]}>
                <View style={styles.textflwoindeatails2}>
                  <Text style={[styles.textstyle3, { color: themeStyles[theme].textColor }]}>free paid</Text>
                  <Text style={[styles.textine, { color: themeStyles[theme].textColor }]}>-</Text>
                  <Text style={[styles.textstyle4, { color: themeStyles[theme].textColor }]}>22nd Oct 2020 - 22nd Nov 2020</Text>
                </View>
              </View>
              <View style={[styles.linerowview,]}>
                <View style={styles.textflwoindeatails}>
                  <Text style={[styles.textstyle3, { color: themeStyles[theme].textColor }]}>Class</Text>
                  <Text style={[styles.textine, { color: themeStyles[theme].textColor }]}>-</Text>
                  <Text style={[styles.textstyle4, styles.textstyleC, { color: themeStyles[theme].textColor }]}>Kg II</Text>

                </View>
              </View>
              <View style={[styles.linerowview2]}>
                <View style={styles.textflwoindeatails2}>
                  <Text style={[styles.textstyle3, { color: themeStyles[theme].textColor }]}>Next Due</Text>
                  <Text style={[styles.textine, { color: themeStyles[theme].textColor }]}>-</Text>
                  <Text style={[styles.textstyle4, styles.textstyleN, { color: themeStyles[theme].textColor }]}>22d Nov 2020</Text>
                </View>
              </View>
              <View style={[styles.linerowview3]}>
                <View style={[styles.textflwoindeatails2,]}>
                  <Text style={[styles.textstyle3, { color: themeStyles[theme].textColor }]}>Teacher</Text>
                  <Text style={[styles.textine, { color: themeStyles[theme].textColor }]}>-</Text>
                  <Text style={[styles.textstyle4, styles.textstyleD, { color: themeStyles[theme].textColor }]}>Khusboo Jain</Text>
                </View>
              </View>
            </View>
            <View style={styles.threetextrow}>
              <View style={styles.threviewrow}>
                <Text style={[styles.threetext, { color: themeStyles[theme].whitecolor }]}>Date</Text>
                <Text style={[styles.threetext, { color: themeStyles[theme].whitecolor }]}>Description</Text>
                <Text style={[styles.threetext, { color: themeStyles[theme].whitecolor }]}>Price</Text>
              </View>
            </View>
            <View style={styles.threviewrow2}>
              <Text style={[styles.threetext2, { color: themeStyles[theme].textColor }]}>3 Nov 2020</Text>
              <View>
                <Text style={[styles.threetext2, { color: themeStyles[theme].textColor }]}>Kg II Class</Text>
                <Text style={[styles.threetext2, { color: themeStyles[theme].textColor }]}>90min session/day</Text>
              </View>
              <Text style={[styles.threetextprices, { color: themeStyles[theme].textColor }]}>
                <Text style={[styles.colorchnages, { color: themeStyles[theme].textColor }]}>₹</Text> 27000
              </Text>
            </View>
            <View style={styles.marginbottom}></View>
            <Text style={[styles.textstyleinrow, { color: themeStyles[theme].textColor }]}>Additional Note   _</Text>
            <View style={styles.marginbottom}></View>
            <View style={styles.rowstylefles}>
              <Text style={[styles.greandtotal, { color: themeStyles[theme].textColor }]}>Grand total</Text>
              <Text style={[styles.greandtotal2, { color: themeStyles[theme].textColor }]}>₹ 2000</Text>
            </View>
            <View style={styles.totalviewline}></View>
            <View style={styles.marginbottomtop} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>


  )
}

export default InFormatiom