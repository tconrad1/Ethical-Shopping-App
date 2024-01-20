import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create ({
   // for kelsey info screens + error screen  
   flexContainer: {
      alignItems: 'center', 
      backgroundColor: '#F8F0EC',
      flex: 1,
   },

   startContainer: {
      alignItems: 'center', 
      backgroundColor: '#F8F0EC',
      flex: 1,
      justifyContent: 'center'
   },

   label: {
    color: '#00072D',
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
   },

   smallText: {
      fontSize: 17,
      padding: 10,
      textAlign: 'center',
      color: '#00072D',
      fontStyle: 'italic'
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
      position: 'absolute',
      bottom: 10,
      backgroundColor: "#00072D",
      borderRadius: 6,
      padding: 5,
      height: 50,
      width: 200
   },

   buttonText: {
      fontSize: 17,
      color: '#FAF5F3',
      textAlign: 'center',
      padding: 7
   },

   textAlign: {
      textAlign: 'center'
   },

   titleBox: {
      backgroundColor: '#A6C0E2',
      width: 375,
      height: 100,
      padding: 10,
      borderRadius: 30
   },

   // for tom start screen
   appTitle: {
      fontSize: 50,
      fontStyle:'italic',
      fontWeight: 'bold', 
      // color: "#2963AE",
      color: "#00072D",
      textDecorationLine: 'underline'
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
