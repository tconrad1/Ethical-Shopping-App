import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create ({
   // for kelsey info screens + error screen  
   flexContainer: {
      alignItems: 'center', 
      backgroundColor: '#FAF5F3',
      flex: 1
   },

   label: {
    fontStyle: 'italic',
    color: '#00072D',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
   },

   smallText: {
      fontFamily: 'Georgia',
      fontSize: 17,
      padding: 10,
      textAlign: 'center'
   },

   errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
   },

   tempText: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
   },

   buttonStyle: {
      backgroundColor: "#00072D",
      borderRadius: 6,
      padding: 5,
      height: 50,
      width: 200
   },

   buttonText: {
      fontFamily: 'Georgia',
      fontSize: 17,
      color: '#FAF5F3',
      textAlign: 'center',
      padding: 7
   },

   // for bea search screen
   searchBackground: {
      backgroundColor: '#F8F0EC',
      flex: 1,
    },
    searchTopBar: {
      backgroundColor: '#2963AE',
      width: 450,
      height: 87,
    }, 
})
