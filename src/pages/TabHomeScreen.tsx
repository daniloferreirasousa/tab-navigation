import React from "react";
import { View, Text, StyleSheet, TextInput, Button} from "react-native";

const TabHomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text>TAB HOME</Text>
        <Button title="Ir para a home 2" onPress={()=>navigation.navigate('TabHome2Screen')}/>
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

export default TabHomeScreen; 