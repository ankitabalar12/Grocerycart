import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../../Componets/ThemeContext';
import { styles } from './styles';
import { icons } from '../../Helper/icons';
import { useNavigation } from '@react-navigation/native';
import { string } from '../../Helper/string';
import CustomButton from '../../Componets/CustomButton/CustomButton';
import ReactNativeModal from 'react-native-modal';

const Checkout = ({ route }) => {
    const { theme, themeStyles } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const colorOpacityModal = 0.1;
    const { selectedPaymentId } = route.params;
    console.log('selectedPaymentId >> ', selectedPaymentId)
    const handleGoBack = () => {
        navigation.goBack();
    };
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <View style={[styles.container,modalVisible && styles.modalVisibleBackground]}>
 <View style={[styles.mainviewstyle,modalVisible && styles.modalVisibleBackground ]}>
            <View style={[styles.flexrowview,]}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={icons.backtow} style={[styles.hamburger, modalVisible && styles.modalVisibleimg]} />
                </TouchableOpacity>
                <Text style={[styles.contactustext, modalVisible && styles.modalVisibletext]}>{string.Checkout}</Text>
            </View>
            </View>
            {!modalVisible && (
                <View>
                    <View style={styles.flexrowdraction}>
                        <Image source={icons.pin} style={styles.pinimg} />
                        <Text style={styles.dotstyle}> {'  '}. . . . {'  '}</Text>
                        <Image source={icons.creditcard} style={styles.pinimg} />
                        <Text style={styles.dotstyle2}>{' '} . . .{' '} </Text>
                        <Image source={icons.twotrueicon} style={styles.pinimg2} />
                    </View>
                    {/* <Image source={icons.mastercardimg} style={styles.cardimg} /> */}
                    {selectedPaymentId === 2 && (
                        <Image source={icons.mastercardimg} style={styles.cardimg} />
                    )}
                     {selectedPaymentId === 3 && (
                        <Image source={icons.visacareimag} style={styles.cardimg2} />
                    )}
                     {selectedPaymentId === 4 && (
                        <Image source={icons.bcaCardimges} style={styles.cardimg3} />
                    )}
                     {selectedPaymentId === 5 && (
                        <Image source={icons.paypleimages} style={styles.cardimg} />
                    )}
                    <Text style={styles.textorstyle}>{string.orchex}</Text>
                    <Image source={icons.paypal} style={styles.paypal} />
                    <View style={styles.flexrowviewstyles}>
                        <Image source={icons.applelogo} style={styles.applelogo} />
                        <Text style={styles.paytext}>{string.Pay}</Text>
                    </View>
                    <CustomButton
                        title={string.confrom}
                        stylepaymentbutton={styles.stylepaymentbutton}
                        onPress={() => setModalVisible(true)}
                    />
                </View>
            )}
            {modalVisible && (
                <Text style={styles.thankstextstyle}>{string.Thanks}</Text>
            )}
            <ReactNativeModal
                isVisible={modalVisible}
                backdropColor='rgba(0, 0, 0, 0.8)'
                backdropOpacity={colorOpacityModal}
                onBackdropPress={toggleModal}
                supportedOrientations={['portrait', 'landscape']}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection={['right']}
                onRequestClose={() => setModalVisible(false)}
                style={{ margin: 0, bottom: 0 }}
            >
                <View style={styles.mainviewmodal}>
                    <View style={styles.checkview}>
                        <Image source={icons.check} style={styles.checkimg} />
                    </View>
                    <Text style={styles.purcahingtext}>{string.thanksyoufro}</Text>
                    <Text style={styles.yourordertext}>{string.yourorderwillve}</Text>
                    <CustomButton
                        title={string.continueshopp}
                        stylepaymentbutton={styles.stylepaymentbutton}
                        onPress={() => {
                            navigation.navigate('Home')
                            setModalVisible(false);
                           }}

                    />
                </View>

            </ReactNativeModal>
        </View>
    )
}

export default Checkout

