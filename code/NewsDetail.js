import React from 'react';

import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Defaults from './Defaults';


function NewsDetail({ route, navigation }) {
    /* 2. Get the param */
    const article = route.params;
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: Defaults.backgroundColor, }}>
            {/* nav bar */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 0, marginBottom: 0,
                height: 80,
                width: '100%',
                // backgroundColor: 'blue'
            }}>
                <TouchableOpacity style={{ margin: 20 }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image source={require('./images/back.png')} />
                </TouchableOpacity>
                <Text style={{ flexGrow: 2 }}></Text>
                <TouchableOpacity style={{ margin: 10, }}>
                    <Image source={require('./images/bell.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 10, marginRight: 20 }}>
                    <Image source={require('./images/basket.png')} />
                </TouchableOpacity>
            </View>
            {/* body */}

            <Image>

            </Image>

        </SafeAreaView>
    )
}

export default NewsDetail;