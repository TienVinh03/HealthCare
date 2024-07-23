import React from "react";
import { StyleSheet,View,TextInput,Text } from "react-native";

const TextInputCustom = (props)=>{
    return(
        <View>
            <Text style={st.lable}>{props.lable}</Text>
            <TextInput  {...props}
            style={[props.style,st.khung]}
            placeholderTextColor={props.colorplacehodler||"gray"}
            />
        </View>
    )
}
export default TextInputCustom;
const st = StyleSheet.create({
    khung:{
        borderWidth:0,
        borderColor:'aqua',
        padding:15,borderRadius:5,
        backgroundColor:'aqua'
    }
    ,lable:{
       
    }
})