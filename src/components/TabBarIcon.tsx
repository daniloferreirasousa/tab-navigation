import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const TabBarIcon = (props) => {
    let srcImage = null;
    let badgeCount = 0;

    switch(props.name) {
        case 'TabAbout':
            srcImage = require('../assets/interface.png');
        break;
        case 'TabHome':
            srcImage = require('../assets/home.png');
        break;
        case 'TabConfig':
            srcImage = require('../assets/interface.png');
            badgeCount = 7;
        break;
    }

    return (
        <View>
            <Image source={srcImage} style={styles.icon} />
            {badgeCount > 0 && 
                 <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
            }
           
        </View>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 24, height: 24
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#bf0a0d',
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }, 
    badgeText: {
        color: '#FFF',
        fontSize: 10
    }
});

export default TabBarIcon;