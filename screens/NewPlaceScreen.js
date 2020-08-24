import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, Text, TextInput, ScrollView, Button } from 'react-native'
import * as placesActions from '../store/actions/places.action'
import Colors from '../constants/Colors'
import ImgPicker from '../components/places/ImageSelector'
import LocationPicker from '../components/places/LocationPicker'

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('')  
      const [image,setImage] = useState()

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text)
    }
    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue,image))
        props.navigation.goBack()
    }

    const imageTakenHandler = imagePath =>{
        setImage(imagePath)
    }
    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue} />
                    <ImgPicker onImageTaken={imageTakenHandler}/>
                    <LocationPicker />
                <Button title='Save place' color={Colors.primary} onPress={savePlaceHandler} />
            </View>

        </ScrollView>
    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'New Place'
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 17,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }

})

export default NewPlaceScreen;