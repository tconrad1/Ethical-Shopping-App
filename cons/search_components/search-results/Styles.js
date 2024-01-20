import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create ({
   // for kelsey info screens + error screen  
   flexContainer: {
      alignItems: 'center', 
      backgroundColor: '#F8F0EC',
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
    searchResultsScreen: {
      backgroundColor: '#A6C0E2',
      flex: 1
    },
    productAssembler: {
      flexDirection: 'row'
    },
    productContainer: {
      backgroundColor: '#F8F0EC',
      flexDirection: 'row',
      width: 372,
      height: 150,
      borderRadius: 15,
      marginLeft: 20
    },
    productImage: {
      width: 150,
      height: 150,
      marginLeft: 15
    },
    productTextContainer: {
      marginLeft: 10,
      marginTop: 10
    },
    productTextHeaders: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#3B3B3B',
    },
    productTextText: {
      fontStyle: 'italic',
      fontSize: 15,
      color: '#3B3B3B',
    },
    productUnethical: {
      fontStyle: 'italic',
      fontSize: 15,
      color: 'red',
    },
    productEthical: {
      fontStyle: 'italic',
      fontSize: 15,
      color: 'green',
    }
})
