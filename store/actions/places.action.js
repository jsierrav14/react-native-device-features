import * as FileSystem from 'expo-file-system'
import {insertPlace,fetchPlaces} from '../../helpers/db'
export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES'

export const addPlace = (title, imageUri) => {

    return async dispatch => {

        const fileName = imageUri.split('/').pop()
        const newPatch = FileSystem.documentDirectory +fileName;
        let dbResult;
        try {
            await FileSystem.moveAsync({
            from:imageUri,
            to:newPatch
        });

        dbResult = await insertPlace(title,newPatch,'dummy address',15.6,12.3)
        console.log(dbResult)
        } catch (err) {
            console.log(err)
            throw err;
        }

    
        dispatch({
            type: ADD_PLACE,
            placeData: {
                id:dbResult.insertId,
                title,
                imageUri:newPatch
            }
        })
    }

}

export const loadPlaces =()=>{

    return async dispatch =>{
        let dbResult;
        try {
          dbResult = await fetchPlaces();
            console.log(dbResult)
        } catch (error) {
            
        }
        dispatch({
            type:SET_PLACES,
            places:dbResult.rows._array
        })
    }
}