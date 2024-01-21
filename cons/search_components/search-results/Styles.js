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
      marginLeft: 20,
      marginBottom: 15
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
    productQuestionable: {
      fontStyle: 'italic',
      fontSize: 15,
      color: 'orange',
    },
    productEthical: {
      fontStyle: 'italic',
      fontSize: 15,
      color: 'green',
    },
    searchResultsText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00072D',
      marginTop: 15,
      marginBottom: 15,
      marginLeft: 20
    },
    infoScreenBG: {
      flex: 1,
      backgroundColor: '#2963AE',
    },
    infoContainer: {
      backgroundColor: '#F8F0EC',
      width: 372,
      height: 625,
      borderRadius: 15,
      marginLeft: 20,
      marginTop: 20,
    },
    infoTopBar: {
      backgroundColor: '#A6C0E2',
      width: 372,
      height: 60,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoBrand: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#00072D',
      marginLeft: 20,
      marginTop: 10,
    },
    infoUnethical: {
      fontSize: 25,
      color: '#C21807',
      marginRight: 20,
      marginTop: 12,
    },
    infoQuestionable: {
      fontSize: 25,
      color: '#FF6E00',
      marginRight: 20,
      marginTop: 12,
    },
    infoText: {
      fontSize: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      textAlign: 'justify',
    },
    productDecision: {
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: '500',
      marginLeft: 20,
      marginRight: 20,
      marginTop: -10,
      textAlign: 'justify',
      color: '#00072D'
    },
    altContainer: {
      backgroundColor: '#A6C0E2',
      width: 332,
      height: 235,
      marginLeft: 20,
      marginTop: 20,
      borderRadius: 15
    },
    altHeader: {
      fontSize: 25,
      fontWeight: '500',
      color: '#00072D',
      marginLeft: 12,
      marginTop: 10,
      marginBottom: 10
    },
    altText: {
      fontSize: 20,
      lineHeight: 40,
      marginLeft: 12,
      marginTop: 10,
    },
    
})
