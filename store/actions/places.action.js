import * as FileSystem from 'expo-file-system'
export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, imageUri) => {

    return async dispatch => {

        const fileName = image.split('/').pop()
        const newPatch = FileSystem.documentDirectory +fileName;
      
        try {
            await FileSystem.moveAsync({
            from:imageUri,
            to:newPatch
        });
        } catch (error) {
            console.log(err)
            throw err;
        }

    
        dispatch({
            type: ADD_PLACE,
            placeData: {
                title,
                imageUri:newPatch
            }
        })
    }

}