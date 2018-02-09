import firebase from 'firebase'

export const appName = 'events-app-2f7d7'
export const firebaseConfig = {
  apiKey: "AIzaSyD-T6frY7qy50Kl5-5ZIX_mB4rmvZdgDvI",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "366542794941"
}

firebase.initializeApp(firebaseConfig)