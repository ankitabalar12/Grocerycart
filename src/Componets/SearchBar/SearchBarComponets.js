import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../Helper/icons';
import { useTheme } from '../ThemeContext';


const SearchBarComponets = ({ onSearch }) => {

    const [searchText, setSearchText] = useState('');
    const { theme, themeStyles } = useTheme();
    const handleSearch = () => {
        console.log('searchText =>> ', searchText)
        onSearch(searchText);
    };
    
    return (
        <View style={[styles.container,
        // {backgroundColor: themeStyles[theme].backgroundColorbox}
        ]}>
            <View style={styles.flexrowone}>
                <TextInput
                    style={styles.input}
                     placeholder="Search places"
                    value={searchText}
                    onSubmitEditing={handleSearch}
                    onChangeText={(text) => {
                        setSearchText(text);
                        onSearch(text);
                    }}
                />
                <TouchableOpacity onPress={() => handleSearch()} style={styles.searchbutton}>
                    <Image source={icons.search} style={styles.search} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "90%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 10,
        borderColor: "#CCCBCB",
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,



    },
    flexrowone: {
        flexDirection: "row",
        justifyContent: "space-between",
         marginHorizontal:"5%"
    },
    search: {
        height: 20, 
        width: 20, 
        tintColor:"#f39643"
    },
    searchbutton:{
        alignSelf:"center"   ,
        
    }
});

export default SearchBarComponets;
