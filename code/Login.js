import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
    TouchableOpacity,
    Alert,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Home from './Home';
import Defaults from './Defaults';
// import Button from 'react-native-elements';

// const Section = ({children, title}): Node => {
function Login({navigation}) {
    var [firstname, setFirstname] = useState("")
    var [lastname, setLastname] = useState("")
    var [email,setEmail] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: Defaults.backgroundColor, }}>
            <Text style={{ marginTop: 'auto', fontSize: 87, marginBottom: 8 }}>D</Text>
            <Text style={{ fontSize: 37, marginBottom: 40 }}>Studio news</Text>

            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <TextInput
                    style={styles.Textfield}
                    onChangeText={setFirstname}
                    value={firstname}
                    placeholder="first name"
                />
                <TextInput
                    style={styles.Textfield}
                    onChangeText={setLastname}
                    value={lastname}
                    placeholder="last name"
                />
                <TextInput
                    style={styles.Textfield}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="email"
                />
            </KeyboardAvoidingView>
            <View
                style={{
                    // Try setting `flexDirection` to `"row"`.
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 20, marginBottom: 40 ,
                }}>
                <CheckBox
                    style={{}}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={{ fontSize: 14, marginLeft: 10 }}>I agree to terms and conditions</Text>
            </View>

            <TouchableOpacity
                style={{ marginTop: 15, borderRadius: 5, justifyContent: "center", alignItems: "center", marginBottom: 40, backgroundColor: 'black', color: 'white', width: Dimensions.get('window').width * 0.8, height: 48 }}

                // onPress={() => Alert.alert('Button with adjusted color pressed')}
                  onPress={() => navigation.navigate('Sample')}
                underlayColor='#fff'>

                <Text alignItems='center' style={{ fontFamily: 'Arial', textAlignVertical: "center", textAlign: 'center', backgroundColor: 'black', color: 'white', width: '100%' }}>Get started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    Textfield: {
        height: 45,
        width: Dimensions.get('window').width * 0.8,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 24,
        borderWidth: 1,
        borderRadius: 45,
        borderColor: 'gray',
    },

});

export default Login;