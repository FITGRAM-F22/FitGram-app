import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function DailyModal({ isModalVisible, setModalVisible }) {
    const nav = useNavigation();

    const navigateToCamera = () => {
        setModalVisible(false);
        nav.navigate('CreatePost');
    };
  
    return (
        <View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modal}>
                <View style={styles.modalclosebutton}>
                    <TouchableOpacity onPress={() => {setModalVisible(false)}}>
                        <Entypo name="cross" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.modalheader}>
                    <Text style={styles.modaltext}>DAILY FIT CHECK</Text>
                </View>
                <Text>Take a mirror selfie or upload your outfit from this morning to save your best dressed looks for later</Text>
                <View style={styles.modalbuttons}>
                    <TouchableOpacity onPress={navigateToCamera}><Text style={styles.modaltext}>TAKE PHOTO</Text></TouchableOpacity>
                    <Text>{'       '}</Text>
                    <TouchableOpacity onPress={navigateToCamera}><Text style={styles.modaltext}>UPLOAD</Text></TouchableOpacity>
                </View>
                </View>
            </Modal>
          </View>
        );
}
    
const styles = StyleSheet.create({
    modal: {
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 200,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
    },
    modalclosebutton: {
        alignSelf: 'flex-end',
        marginRight: -10,
        marginTop: -15,
    },
    modalheader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: -15,
    },
    modalbuttons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    modaltext: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});