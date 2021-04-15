import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:424196086944:web:24e400b97919b9edda3dc5",
    measurementId: "G-GVEVKEHW93"
};

firebase.initializeApp(config);

const database = firebase.database()

export { firebase, database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses=[]

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     })

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 2953289523958
// })


database.ref('expenses').on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })
})

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'react native'
// })

// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off()
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(52)
// }, 10500)

// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }).catch((e) => {
//         console.log('error fetching data', e)
//     })

// database.ref().set({
//         name: 'Andrew Mead',
//         age: 26,
//         job: 'software developer',
//         location: {
//             city: 'Philadelphia',
//             country: 'United States'
//         }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// database.ref('age').set(27)
// database.ref('location/city').set('New York')

// database.ref('attrtibutes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('second set call worked')
// }).catch((e) => {
//     console.log('Things didnt work for the second error')
// })

// database.ref().update({

//     job: 'manager',
//     location: {
//         city: 'boston'
//     }
// })

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('data was removed')
//     })
//     .catch((e) => {
//         console.log('did not remove data', e)
//     })