import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TabHome2Screen = () => (
    <View style={styles.container}>
        <Text>TAB HOME 2</Text>
        <TextInput placeholder="Input home"/>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default TabHome2Screen; 