import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCye2U-U-qMnJIT33saNZieHwwOUKaR2C0',
  authDomain: 'reactzzaria-e1bd9.firebaseapp.com',
  databaseURL: 'https://reactzzaria-e1bd9.firebaseio.com',
  projectId: 'reactzzaria-e1bd9',
  storageBucket: 'reactzzaria-e1bd9.appspot.com',
  messagingSenderId: '657692410061',
  appId: '1:657692410061:web:9c8c180d4a6df051b06984',
  measurementId: 'G-7HXBZ31SXV'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
