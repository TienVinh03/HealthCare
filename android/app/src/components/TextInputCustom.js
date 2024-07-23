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
        borderWidth:1,
        borderColor:'#D9D9D9',
        padding:15,borderRadius:5
    }
    ,lable:{
        marginBottom:10,marginLeft:5
        ,marginTop:30
    }
})