import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { string } from '../../Helper/string';
import { icons } from '../../Helper/icons';
import { styles } from './styles';
import CustomButton from '../../Componets/CustomButton/CustomButton';

const Like = ({ navigation }) => {
  const { theme, themeStyles } = useTheme();
  return (
    <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <Text style={styles.fvoritestext}>{string.favourites}</Text>
      <ScrollView>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.banana} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Banana</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview} onPress={() =>
              navigation.navigate('AddItem')}>
              <View style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </View>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.watermelonseed} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Watermelonseed</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity  onPress={() =>
              navigation.navigate('AddItem')} style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.cabegge} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>cabegge</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity   onPress={() =>
              navigation.navigate('AddItem')} style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.redcabbge} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Red Cabbge</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity   onPress={() =>
              navigation.navigate('AddItem')} style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.Coconut} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Coconut Milk</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity onPress={() =>
              navigation.navigate('AddItem')}  style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.nutella} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Nutella</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity  onPress={() =>
              navigation.navigate('AddItem')} style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <View style={[styles.mainview,
          // { backgroundColor: themeStyles[theme].backgroundColorbox }
          ]}>
          <View style={styles.flexrowstyle}>
            <View style={[styles.favourtiesview,
              // { backgroundColor: themeStyles[theme].backgroundColorbox }
              ]}>
              <Image source={icons.appled} style={styles.cauliflower} />
            </View>
            <View style={styles.marleft}>
              <Text style={styles.textstyleitem}>Apple</Text>
              <Text style={styles.textstyleitem2}>₹ 35</Text>
            </View>
            <TouchableOpacity style={styles.addview}>
              <TouchableOpacity onPress={() =>
              navigation.navigate('AddItem')} style={styles.flexrowstyle2}>
                <Text style={styles.addtext}>Add</Text>
                <Image source={icons.plusone} style={styles.plus} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

        </View>
        <CustomButton
          title={string.gotocart}
          contactusbutton={styles.contactusbutton}

        />
        <View style={styles.margibottom} />
      </ScrollView>
    </View>
  )
}

export default Like

