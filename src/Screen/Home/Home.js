import { Image, ScrollView, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import HeaderComponet from '../../Componets/Header/HeaderComponet';
import CustomModal from '../../Componets/CustomModal/CustomModal';
import { SearchBar } from 'react-native-elements';
import SearchBarComponets from '../../Componets/SearchBar/SearchBarComponets';
import { icons } from '../../Helper/icons';
import { string } from '../../Helper/string';

const Home = ({ navigation }) => {
  const { theme, themeStyles } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [is_selectedfood, setIs_Selectedfood] = useState()
  const [is_selectedfooditem, setIs_Selectedfooditem] = useState()
  const [is_selectedfruits, setIs_SelectedFruits] = useState()
  const [is_selectedpacked, setIs_Selectedpacked] = useState()
  const [is_selectedmilk, setIs_Selectedmilk] = useState()
  const [likedItems, setLikedItems] = useState({});
  const [likedfruits, setLikedfruis] = useState({});
  const [likedPacked, setLikedPacked] = useState({});
  const [likedMilk, setLikedMikl] = useState({});
  useEffect(() => {
    const fooddataall = () => {
      setIs_Selectedfood(1)
    }
    fooddataall();
  }, [])
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSearch = (searchText) => {
    console.log('Perform search with text:', searchText);

  };
  const selectedfood = (id) => {
    setIs_Selectedfood(id)
  }
  const selectedfooditem = (id) => {
    setIs_Selectedfooditem(id)
  }
  const selectedfruits = (id) => {
    setIs_SelectedFruits(id)
  }
  const selectedpacked = (id) => {
    setIs_Selectedpacked(id)
  }
  const selectedMilk = (id) => {
    setIs_Selectedmilk(id)
  }
  const toggleLike = (itemId) => {
    setLikedItems(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems };
      updatedLikedItems[itemId] = !updatedLikedItems[itemId];
      return updatedLikedItems;
    });
    setLikedfruis(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems };
      updatedLikedItems[itemId] = !updatedLikedItems[itemId];
      return updatedLikedItems;
    });
    setLikedPacked(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems };
      updatedLikedItems[itemId] = !updatedLikedItems[itemId];
      return updatedLikedItems;
    });
    setLikedMikl(prevLikedItems => {
      const updatedLikedItems = { ...prevLikedItems };
      updatedLikedItems[itemId] = !updatedLikedItems[itemId];
      return updatedLikedItems;
    });
  };
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Logout',
          onPress: () => {
            navigation.navigate('Login')

            console.log('User logged out');

          }
        }
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={[styles.cantainer, { backgroundColor: themeStyles[theme].backgroundColor }]}>
      <HeaderComponet
        onPress={() => setModalVisible(true)}
        onPress2={() => { navigation.navigate('Profile') }}
        onPress3={() => { navigation.navigate('OrdersList') }}
      />
      <CustomModal
        isVisible={modalVisible}
        onBackdropPress={toggleModal}
        swipeDirection={['down']}
        modalestyle={styles.modalestyle}
        onPress={() => {
          setModalVisible(false);
          navigation.navigate('Profile')
        }}
        onPress2={() => {
          setModalVisible(false);
          navigation.navigate('ContactUs')
        }}
        onPress4={() => {
          setModalVisible(false);
          navigation.navigate('OrdersList')
        }}
        onPress3={() => {
          setModalVisible(false);
          handleLogout();
        }}
        onPress5={() => {
          navigation.navigate('Home')
          setModalVisible(false);
        }}
        onPress6={() => {
          navigation.navigate('InFormatiom')
          setModalVisible(false);
        }}
      />
      <ScrollView>
        <SearchBarComponets onSearch={handleSearch} />
        <View style={[styles.flexrowone,]}>
          <View>
            <TouchableOpacity onPress={() => selectedfood(1)} style={is_selectedfood === 1 ? styles.selectedfoodstyle : styles.fourviewstyle}>
              <Image source={icons.vegetable} style={styles.foodimg} />
            </TouchableOpacity>
            <Text style={is_selectedfood === 1 ? styles.textstyle2 : styles.textstyle}>{string.veg}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => selectedfood(2)} style={is_selectedfood === 2 ? styles.selectedfoodstyle2 : [styles.fourviewstyle, styles.fourviewstyle2]}>
              <Image source={icons.fruits} style={styles.foodimg} />
            </TouchableOpacity>
            <Text style={is_selectedfood === 2 ? styles.textstyle2 : styles.textstyle}>{string.fruits}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => selectedfood(3)} style={is_selectedfood === 3 ? styles.selectedfoodstyle3 : [styles.fourviewstyle, styles.fourviewstyle3]}>
              <Image source={icons.foodpakag} style={styles.foodimg} />
            </TouchableOpacity>
            <Text style={is_selectedfood === 3 ? styles.textstyle2 : styles.textstyle}>{string.packed}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => selectedfood(4)} style={[is_selectedfood === 4 ? styles.selectedfoodstyle4 : styles.fourviewstyle, styles.fourviewstyle4]}>
              <Image source={icons.milk} style={styles.milk} />
            </TouchableOpacity>
            <Text style={is_selectedfood === 4 ? styles.textstyle2 : styles.textstyle}>{string.Milk}</Text>
          </View>
        </View>
        {is_selectedfood == '1' ? (<View>
          <View style={styles.flexrowtwo}>
            <TouchableOpacity onPress={() => {
              selectedfooditem(1);
              navigation.navigate('ItemDetailes', { detailsdata: icons.tameto, drtaildata: '12pas', foodname: 'Tomato', foodPrice: '35', foodwight: '500 to 900 gm' })

            }} style={[is_selectedfooditem === 1 ? styles.mainviewinstyle : styles.selectedmainview,
              //  {backgroundColor: themeStyles[theme].backgroundColorbox},

            ]}>
              <TouchableOpacity>
                <Image source={icons.tameto} style={styles.tameto} />
              </TouchableOpacity>
              <Text style={is_selectedfooditem === 1 ? styles.alltextthin2 : styles.alltextthin}>Tomato</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, {
                backgroundColor: is_selectedfooditem === 1 ? '#93bf6f' : "#fff",

              }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 1 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 1 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 1 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 1 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 1 ? '#fff' : '#93bf6f' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(1)} style={styles.likeimgstyle}>

                    {likedItems[1] ? (

                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 1 ? '#fff' : '#93bf6f' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfooditem(2);
              navigation.navigate('ItemDetailes', { detailsdata: icons.ladyfinger, drtaildata: '1Kg', foodname: 'Lady finger', foodPrice: '25', foodwight: '500 to 1000 gm', foodcolo: "#93bf6f" })
              // navigation.navigate('Profile')
            }} style={[is_selectedfooditem === 2 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.ladyfinger} style={styles.tameto} />
              <Text style={is_selectedfooditem === 2 ? styles.alltextthin2 : styles.alltextthin}>Lady finger</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>1Kg</Text>
                <Text style={styles.pricetext}>500 to 100 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfooditem === 2 ? '#93bf6f' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 2 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 2 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 2 ? '#fff' : '#cdcfd1' }]}>25</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 2 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 2 ? '#fff' : '#93bf6f' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(2)} style={styles.likeimgstyle}>
                    {likedItems[2] ? (
                      <Image source={icons.heart} style={[styles.heart]} />

                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 2 ? '#fff' : '#93bf6f' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfooditem(3);
              navigation.navigate('ItemDetailes', { detailsdata: icons.cabegge, drtaildata: '1Kg', foodname: 'Cabagge', foodPrice: '30', foodwight: '500 to 1000 gm' })
            }} style={[is_selectedfooditem === 3 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.cabegge} style={styles.tameto} />
              <Text style={is_selectedfooditem === 3 ? styles.alltextthin2 : styles.alltextthin}>Cabagge</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>1pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfooditem === 3 ? '#93bf6f' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 3 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 3 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 3 ? '#fff' : '#cdcfd1' }]}>30</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 3 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 3 ? '#fff' : '#93bf6f' }]}></View>

                  <TouchableOpacity onPress={() => toggleLike(3)} style={styles.likeimgstyle}>
                    {likedItems[3] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 3 ? '#fff' : '#93bf6f' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfooditem(4);
              navigation.navigate('ItemDetailes', { detailsdata: icons.cauliflower, drtaildata: '1Kg', foodname: 'Cauliflower', foodPrice: '200', foodwight: '500 to 1000 gm' })
            }} style={[is_selectedfooditem === 4 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.cauliflower} style={styles.cauliflower} />
              <Text style={is_selectedfooditem === 4 ? styles.alltextthin2 : styles.alltextthin}>Cauliflower</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>2pas</Text>
                <Text style={styles.pricetext}>100 to 200 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfooditem === 4 ? '#93bf6f' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 4 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 4 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 4 ? '#fff' : '#cdcfd1' }]}>90</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 4 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 4 ? '#fff' : '#93bf6f' }]}></View>

                  <TouchableOpacity onPress={() => toggleLike(4)} style={styles.likeimgstyle}>
                    {likedItems[4] ? (

                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 4 ? '#fff' : '#93bf6f' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfooditem(5);
              navigation.navigate('ItemDetailes', { detailsdata: icons.suran, drtaildata: '1pas', foodname: 'Suran', foodPrice: '200', foodwight: '500 to 1000 gm' })
            }} style={[is_selectedfooditem === 5 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.suran} style={styles.tameto} />
              <Text style={is_selectedfooditem === 5 ? styles.alltextthin2 : styles.alltextthin}>Suran</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>1pas</Text>
                <Text style={styles.pricetext}>100 to 250 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfooditem === 5 ? '#93bf6f' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 5 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 5 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 5 ? '#fff' : '#cdcfd1' }]}>70</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 5 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 5 ? '#fff' : '#93bf6f' }]}></View>

                  <TouchableOpacity onPress={() => toggleLike(5)} style={styles.likeimgstyle}>
                    {likedItems[5] ? (

                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 5 ? '#fff' : '#93bf6f' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfooditem(6);
              navigation.navigate('ItemDetailes', { detailsdata: icons.redcabbge, drtaildata: '1kg', foodname: 'Red Cabbage', foodPrice: '150', foodwight: '500 to 1000 gm' })
            }} style={[is_selectedfooditem === 6 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.redcabbge} style={styles.cauliflower} />
              <Text style={is_selectedfooditem === 6 ? styles.alltextthin2 : styles.alltextthin}>Red Cabbage</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>2pas</Text>
                <Text style={styles.pricetext}>300 to 900 gm</Text>
              </View>
              <View style={styles.centerview} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfooditem === 6 ? '#93bf6f' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfooditem === 6 ? '#93bf6f' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfooditem === 6 ? '#fff' : '#93bf6f' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfooditem === 6 ? '#fff' : '#cdcfd1' }]}>85</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfooditem === 6 ? '#93bf6f' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfooditem === 6 ? '#fff' : '#93bf6f' }]}></View>

                  <TouchableOpacity onPress={() => toggleLike(6)} style={styles.likeimgstyle}>
                    {likedItems[6] ? (

                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfooditem === 6 ? '#fff' : '#93bf6f' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>) : null}


        {is_selectedfood == '2' ? (<View>
          <View style={styles.flexrowtwo}>
            <TouchableOpacity onPress={() => {
              selectedfruits(1);
              navigation.navigate('FruitsDetails', { detailsdata: icons.banana, drtaildata: '12pas', foodname: 'Banana', foodPrice: '50', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }} style={[is_selectedfruits === 1 ? styles.mainviewinstyle : styles.selectedmainview,
              //  {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.banana} style={styles.banana} />
              <Text style={is_selectedfruits === 1 ? styles.alltextthin2 : styles.alltextthin}>Banana</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 1 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 1 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 1 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 1 ? '#fff' : '#cdcfd1' }]}>50</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 1 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 1 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(1)} style={styles.likeimgstyle}>
                    {likedfruits[1] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 1 ? '#fff' : '#f5c750' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfruits(2);
              navigation.navigate('FruitsDetails', { detailsdata: icons.avocado, drtaildata: '12pas', foodname: 'Avocado', foodPrice: '1500', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }} style={[is_selectedfruits === 2 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.avocado} style={styles.redapple} />
              <Text style={is_selectedfruits === 2 ? styles.alltextthin2 : styles.alltextthin}>Avocado</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 2 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 2 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 2 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 2 ? '#fff' : '#cdcfd1' }]}>350</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 2 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 2 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(2)} style={styles.likeimgstyle}>
                    {likedfruits[2] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 2 ? '#fff' : '#f5c750' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfruits(3);
              navigation.navigate('FruitsDetails', { detailsdata: icons.grapes, drtaildata: '1kg', foodname: 'Grapes', foodPrice: '100', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }}
              style={[is_selectedfruits === 2 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.grapes} style={styles.grapes} />
              <Text style={is_selectedfruits === 3 ? styles.alltextthin2 : styles.alltextthin}>Grapes</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 3 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 3 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 3 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 3 ? '#fff' : '#cdcfd1' }]}>50</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 3 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 3 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(3)} style={styles.likeimgstyle}>
                    {likedfruits[3] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 3 ? '#fff' : '#f5c750' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfruits(4);
              navigation.navigate('FruitsDetails', { detailsdata: icons.papaya, drtaildata: '1kg', foodname: 'Papaya', foodPrice: '80', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }}
              style={[is_selectedfruits === 2 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.papaya} style={styles.grapes} />
              <Text style={is_selectedfruits === 4 ? styles.alltextthin2 : styles.alltextthin}>Papaya</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 4 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 4 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 4 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 4 ? '#fff' : '#cdcfd1' }]}>50</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 4 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 4 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(4)} style={styles.likeimgstyle}>
                    {likedfruits[4] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 4 ? '#fff' : '#f5c750' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfruits(5);
              navigation.navigate('FruitsDetails', { detailsdata: icons.orange, drtaildata: '1kg', foodname: 'Orange', foodPrice: '150', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }}
              style={[is_selectedfruits === 5 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.orange} style={styles.orange} />
              <Text style={is_selectedfruits === 5 ? styles.alltextthin2 : styles.alltextthin}>Orange</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 5 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 5 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 5 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 5 ? '#fff' : '#cdcfd1' }]}>50</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 5 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 5 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(5)} style={styles.likeimgstyle}>
                    {likedfruits[5] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 5 ? '#fff' : '#f5c750' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedfruits(6);
              navigation.navigate('FruitsDetails', { detailsdata: icons.appled, drtaildata: '10pas', foodname: 'Apple', foodPrice: '350', foodwight: '500 to 1000 gm', colorpass: '#f5c750' })
            }}
              style={[is_selectedfruits === 6 ? styles.mainviewinstyle : styles.selectedmainview,
                // {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.appled} style={styles.orange} />
              <Text style={is_selectedfruits === 6 ? styles.alltextthin2 : styles.alltextthin}>Apple</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview2} />
              <View style={[styles.lineview, { backgroundColor: is_selectedfruits === 6 ? '#f5c750' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedfruits === 6 ? '#f5c750' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedfruits === 6 ? '#fff' : '#f5c750' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedfruits === 6 ? '#fff' : '#cdcfd1' }]}>50</Text>
                  <View style={[styles.addview, { borderColor: is_selectedfruits === 6 ? '#f5c750' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedfruits === 6 ? '#fff' : '#f5c750' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(6)} style={styles.likeimgstyle}>
                    {likedfruits[6] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedfruits === 6 ? '#fff' : '#f5c750' }]} />
                    )}

                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>) : null}
        {is_selectedfood == '3' ? (<View>
          <View style={styles.flexrowtwo}>
            <TouchableOpacity onPress={() => {
              selectedpacked(1);
              navigation.navigate('PakedDetails', { detailsdata: icons.nutella, drtaildata: '1Packed', foodname: 'Nutella', foodPrice: '500', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }}

              style={[is_selectedpacked === 1 ? styles.mainviewinstyle : styles.selectedmainview,
                // {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.nutella} style={styles.nutella} />
              <Text style={is_selectedpacked === 1 ? styles.alltextthin2 : styles.alltextthin}>Nutella</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>1</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 1 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 1 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 1 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 1 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 1 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 1 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(1)} style={styles.likeimgstyle}>
                    {likedPacked[1] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 1 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedpacked(2);
              navigation.navigate('PakedDetails', { detailsdata: icons.hockory, drtaildata: '1Packed', foodname: 'Hockory', foodPrice: '600', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }}
              style={[is_selectedpacked === 2 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.hockory} style={styles.nutella} />
              <Text style={is_selectedpacked === 2 ? styles.alltextthin2 : styles.alltextthin}>Hockory</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 2 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 2 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 2 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 2 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 2 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 2 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(2)} style={styles.likeimgstyle}>
                    {likedPacked[2] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 2 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedpacked(3);
              navigation.navigate('PakedDetails', { detailsdata: icons.watermelonseed, drtaildata: '1kg', foodname: 'Water Melonseed', foodPrice: '1000', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }}
              style={[is_selectedpacked === 3 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.watermelonseed} style={styles.nutella} />
              <Text style={is_selectedpacked === 3 ? styles.alltextthin2 : styles.alltextthin}>Water Melonseed</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 3 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 3 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 3 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 3 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 3 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 3 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(3)} style={styles.likeimgstyle}>
                    {likedPacked[3] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 3 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedpacked(4);
              navigation.navigate('PakedDetails', { detailsdata: icons.nachos, drtaildata: '2pak', foodname: 'Mexican Nachos', foodPrice: '100', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }}
              style={[is_selectedpacked === 3 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.nachos} style={styles.nutella} />
              <Text style={is_selectedpacked === 4 ? styles.alltextthin2 : styles.alltextthin}>Mexican Nachos</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 4 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 4 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 4 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 4 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 4 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 4 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(4)} style={styles.likeimgstyle}>
                    {likedPacked[4] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 4 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedpacked(5);
              navigation.navigate('PakedDetails', { detailsdata: icons.potatochips, drtaildata: '2pak', foodname: 'Potato Chips', foodPrice: '250', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }} style={[is_selectedpacked === 5 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.potatochips} style={styles.potatochips} />
              <Text style={is_selectedpacked === 5 ? styles.alltextthin2 : styles.alltextthin}>Potato Chips</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 5 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 5 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 5 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 5 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 5 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 5 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(5)} style={styles.likeimgstyle}>
                    {likedPacked[5] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 5 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedpacked(6);
              navigation.navigate('PakedDetails', { detailsdata: icons.Cookies, drtaildata: '2pak', foodname: 'Cookies', foodPrice: '550', foodwight: '500 to 1000 gm', colorpass: '#f9a07c' })
            }}
              style={[is_selectedpacked === 6 ? styles.mainviewinstyle : styles.selectedmainview,
                // {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.Cookies} style={styles.nutella} />
              <Text style={is_selectedpacked === 6 ? styles.alltextthin2 : styles.alltextthin}>Cookies</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview3} />
              <View style={[styles.lineview, { backgroundColor: is_selectedpacked === 6 ? '#f9a07c' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedpacked === 6 ? '#f9a07c' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedpacked === 6 ? '#fff' : '#f9a07c' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedpacked === 6 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedpacked === 6 ? '#f9a07c' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedpacked === 6 ? '#fff' : '#f9a07c' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(6)} style={styles.likeimgstyle}>
                    {likedPacked[6] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedpacked === 6 ? '#fff' : '#f9a07c' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>) : null}
        {is_selectedfood == '4' ? (<View>
          <View style={styles.flexrowtwo}>
            <TouchableOpacity onPress={() => {
              selectedMilk(1);
              navigation.navigate('MilkDetails', { detailsdata: icons.almondmilk, drtaildata: '2Bottale', foodname: 'Almond Milk', foodPrice: '180', foodwight: '500 to 1000 gm', })
            }} style={[is_selectedmilk === 1 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.almondmilk} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 1 ? styles.alltextthin2 : styles.alltextthin}>Almond Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 1 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 1 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 1 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 1 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 1 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 1 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(1)} style={styles.likeimgstyle}>
                    {likedMilk[1] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 1 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedMilk(2);
              navigation.navigate('MilkDetails', { detailsdata: icons.Coconut, drtaildata: '2Bottale', foodname: 'Coconut Milk', foodPrice: '200', foodwight: '500 to 1000 gm', })
            }}
              style={[is_selectedmilk === 2 ? styles.mainviewinstyle : styles.selectedmainview,
                // {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.Coconut} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 2 ? styles.alltextthin2 : styles.alltextthin}>Coconut Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 2 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 2 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 2 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 2 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 2 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 2 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(2)} style={styles.likeimgstyle}>
                    {likedMilk[2] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 2 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedMilk(3);
              navigation.navigate('MilkDetails', { detailsdata: icons.oatsmil, drtaildata: '1Bottale', foodname: 'Otas Milk', foodPrice: '200', foodwight: '500 to 1000 gm', })
            }}
              style={[is_selectedmilk === 3 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.oatsmil} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 3 ? styles.alltextthin2 : styles.alltextthin}>Otas Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 3 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 3 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 3 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 3 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 3 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 3 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(3)} style={styles.likeimgstyle}>
                    {likedMilk[3] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 3 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedMilk(4);
              navigation.navigate('MilkDetails', { detailsdata: icons.Cowmilktwo, drtaildata: '1Bottale', foodname: 'Cow Milk', foodPrice: '150', foodwight: '500 to 1000 gm', })
            }}
              style={[is_selectedmilk === 4 ? styles.mainviewinstyle : styles.selectedmainview,
                //  {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.Cowmilktwo} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 4 ? styles.alltextthin2 : styles.alltextthin}>Cow Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 4 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 4 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 4 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 4 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 4 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 4 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(4)} style={styles.likeimgstyle}>
                    {likedMilk[4] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 4 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedMilk(5);
              navigation.navigate('MilkDetails', { detailsdata: icons.allseedmilk, drtaildata: '1Bottale', foodname: 'Cow Milk', foodPrice: '150', foodwight: '500 to 1000 gm', })
            }} style={[is_selectedmilk === 5 ? styles.mainviewinstyle : styles.selectedmainview,
              // {backgroundColor: themeStyles[theme].backgroundColorbox}
            ]}>
              <Image source={icons.allseedmilk} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 5 ? styles.alltextthin2 : styles.alltextthin}>All Seed Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 5 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 5 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 5 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 5 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 5 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 5 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(5)} style={styles.likeimgstyle}>
                    {likedMilk[5] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 5 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              selectedMilk(6);
              navigation.navigate('MilkDetails', { detailsdata: icons.drymilk, drtaildata: '1Bottale', foodname: 'Dates Milk', foodPrice: '150', foodwight: '500 to 1000 gm', })
            }}
              style={[is_selectedmilk === 6 ? styles.mainviewinstyle : styles.selectedmainview,
                // {backgroundColor: themeStyles[theme].backgroundColorbox}
              ]}>
              <Image source={icons.drymilk} style={styles.cauliflower} />
              <Text style={is_selectedmilk === 6 ? styles.alltextthin2 : styles.alltextthin}>Dates Milk</Text>
              <View style={styles.flexrwostyle}>
                <Text style={styles.pricetext}>12pas</Text>
                <Text style={styles.pricetext}>500 to 900 gm</Text>
              </View>
              <View style={styles.centerview4} />
              <View style={[styles.lineview, { backgroundColor: is_selectedmilk === 6 ? '#e7e520' : "#fff" }]}>
                <View style={styles.flexrwothree}>
                  <View style={[styles.iconview, { backgroundColor: is_selectedmilk === 6 ? '#e7e520' : '#fff' }]}>
                    <Text style={[styles.rupesstext, { color: is_selectedmilk === 6 ? '#fff' : '#e7e520' }]}>₹</Text>
                  </View>
                  <Text style={[styles.textnumber, { color: is_selectedmilk === 6 ? '#fff' : '#cdcfd1' }]}>35</Text>
                  <View style={[styles.addview, { borderColor: is_selectedmilk === 6 ? '#e7e520' : '#cdcfd1' }]}>
                    <View style={styles.flexfive}>
                      <Text style={styles.addtextstyle}>Add</Text>
                      <TouchableOpacity>
                        <Image source={icons.plus} style={styles.plus} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={[styles.hedithview, { backgroundColor: is_selectedmilk === 6 ? '#fff' : '#e7e520' }]}></View>
                  <TouchableOpacity onPress={() => toggleLike(6)} style={styles.likeimgstyle}>
                    {likedMilk[6] ? (
                      <Image source={icons.heart} style={[styles.heart]} />
                    ) : (
                      <Image source={icons.heartline} style={[styles.heartline,
                      { tintColor: is_selectedmilk === 6 ? '#fff' : '#e7e520' }]} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>) : null}
        <View style={styles.marbottom} />
      </ScrollView>
    </View>
  )
}

export default Home

