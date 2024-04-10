import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const options = descriptors[route.key].options;

                let label = route.name;
                if(options.tabBarLabel != undefined) {
                    label = options.tabBarLabel;
                } else if(options.title != undefined) {
                    label = options.title;
                }

                const isFocused = state.index === index;

                const handleTabPress = ()  => {
                    navigation.navigate( route.name );
                }
                    

                if(route.name == 'TabHome') {
                    return (
                        <TouchableHighlight key={index} style={styles.middleTab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                } else {
                    return (
                        <TouchableHighlight key={index} underlayColor="transparent" style={styles.tab} onPress={handleTabPress}>
                            <Text style={[styles.label, isFocused?styles.labelFocused:null]}>{label}</Text>
                        </TouchableHighlight>
                    )
                }
                
            })}
        </View>
    );
}

/**
 * -----------------
 * Paleta de Cores
 * -----------------
 * 
 * #6d9788 - Azulado
 * #1e2528 - Escuro
 * #7e1c13 - Vinho
 * #bf0a0d - Vermelho
 * #e6e1c2 - Bege
 */

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#1e2528'
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    middleTab: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bf0a0d',
        marginTop: -22,
        borderRadius: 35

    },
    label: {
        fontSize: 16,
        color: '#e6e1c2'
    },
    labelFocused: {
        fontSize: 16,
        color: '#7e1c13'    
    }
})

export default CustomTabBar;