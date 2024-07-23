import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet,Image, ImageBackground } from 'react-native';



// định nghĩa section
const Section = ({ title,icon,amount,date, children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View>
                <Image source={icon} style={styles.icon}/>
            {title && <Text style={styles.title}>{title}</Text>}
            {amount && <Text style={styles.amount}>{amount}</Text>}
            {date && <Text style={styles.date}>{date}</Text>}
           </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};


// giới hạn ràng buộc kiểu dữ liệu nếu cần thiết.
Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
    
};


const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        width: '46%',marginLeft:7,
        marginRight:10

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
       
        color: 'red'
    },
    amount: {
        fontSize: 9,
        fontWeight: 'bold',
       
        color: 'gray'
    },
    icon:{
        width:30,height:30

    },date:{
        fontSize: 9,
        fontWeight: 'bold',
       
        color: 'gray'
    },
    content: {
        marginTop: 10,

    },
});


export default Section;
