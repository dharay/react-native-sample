import React, { useEffect, useState } from "react";
import { View,Button,Text, ScrollView } from "react-native";
import axios from "axios";

export default function Sample () {
    const [counter, setCounter] = useState(0)
    const [res,setRes] = useState("")
    useEffect(() => {
        console.log("rendered")
        return(() => {console.log("unrendered")})
    },[])

    function inc(){
        setCounter(counter + 1)
    }
    function getPromise(){
        axios.get('https://dummy.restapiexample.com/api/v1/employee/1')
        .then((resp) => {
            let response = JSON.stringify(resp)
            setRes(response)
        }).catch((err) => {console.log(err)})
    }
    async function getAsync() {
        try {
            const response = await axios.get('https://dummy.restapiexample.com/api/v1/employee/1');
            console.log(response);
          } catch (error) {
            console.error(error);
          };
      }
    function later(){

    }

    return (
    <View style={{flex:1, backgroundColor:'#bbb'}}>
        <ScrollView>
        <Text>{counter}</Text>
        <Button onPress={inc} title=" + + "> </Button>
        {/* <Button onPress={get} title="get"> </Button> */}
        <Text>{res}</Text>
        </ScrollView>
    </View>
    );
}