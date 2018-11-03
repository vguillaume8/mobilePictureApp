import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAvdL4wQYE-ljGr9_Fp4BejEah4hxp53MU',
  authDomain: 'vincechat-24a01.firebaseapp.com',
  databaseURL: 'https://vincechat-24a01.firebaseio.com',
  storageBucket: 'vincechat-24a01.appspot.com',
  messagingSenderId: '66818150887'
}
firebase.initializeApp(config)
const storage = firebase.storage()
const database = firebase.database()

export default {
  database,
  storage
}
