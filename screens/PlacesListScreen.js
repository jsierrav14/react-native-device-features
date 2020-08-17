import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import CustomHeaderButtom from '../components/UI/HeaderButton'

const  PlacesListScreen =  props =>{

    return (
        <View>
        <Text>PlacesListScreen</Text>
        </View>
    )
}

PlacesListScreen.navigationOptions = navData =>{
    return {
        headerTitle:'All places',
        headerRight:()=><HeaderButtons HeaderButtonComponent={CustomHeaderButtom}>
        <Item title="Add place" iconName={Platform.OS === 'android' ?'md-add' :'ios-add'} onPress={
            ()=>{
                navData.navigation.navigate('NewPlace')
            }
        }/>
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({

})

export default PlacesListScreen;