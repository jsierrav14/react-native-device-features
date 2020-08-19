import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, Text, Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButtom from '../components/UI/HeaderButton'
import PlaceItem from '../components/places/PlaceItem'

const PlacesListScreen = props => {
    const places = useSelector(state => state.places.places)
    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={itemData => (
            <PlaceItem image={itemData.item.imageUri} title={itemData.item.title} address={''} onSelect={() => {
                props.navigation.navigate('PlaceDetail', {placeTitle:itemData.item.title, place: itemData.item.id})
            }} />
        )} />
    )
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All places',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButtom}>
            <Item title="Add place" iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} onPress={
                () => {
                    navData.navigation.navigate('NewPlace')
                }
            } />
        </HeaderButtons>
    }
}
const styles = StyleSheet.create({

})

export default PlacesListScreen;