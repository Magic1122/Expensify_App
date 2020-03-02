import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export { firebase, googleAuthProvider, database as default };

/* // child removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// child changed

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// child added

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})
 */
/* database.ref('expenses')
  .once('value')
  .then((snapshot) => {
      const expenses = []
      snapshot.forEach((childSnapshot) => {
          expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          })
      })
      console.log(expenses)
  }) */

/* database.ref('expenses').on('value', (snapshot) => {
    const expenses = []
      snapshot.forEach((childSnapshot) => {
          expenses.push({
              id: childSnapshot.key,
              ...childSnapshot.val()
          })
      })
      console.log(expenses)
})
 */


// Setup expenses with three item (desc, note, amount, createdAt)

/* database.ref('expenses').push(expenses[0]);
database.ref('expenses').push(expenses[1]);
database.ref('expenses').push(expenses[2]); */



// database.ref('notes/-M1-xgvdtEEPhKGDr0lR').remove()

/* database.ref('notes').push({
    title: 'Course Topics',
    body: 'React, Angular, Python'
}) */

/* const firebaseNotese = {
    notes: {
        ejnfejfef: {
            title: 'First note!',
            body: 'this is my note'
        },
        dndejejdenjj: {
            title: 'First note!',
            body: 'this is my note'
        }
    }
}

const notes = [{
    id: '12',
    title: 'First note!',
    body: 'this is my note'
}, {
    id: '716base',
    title: 'Another note!',
    body: 'this is my note'
}]

database.ref('notes').set(notes); */

// Setup data sub ---> Balint is a Software Developer at Amazon.

/* const onValueChange = database.ref().on('value', (snapshot) => {
    const obj = snapshot.val()
    const { name } = obj
    const { title, company } = obj.job
    console.log(`${name} is a ${title} at ${company}.`)
}, (e) => {
    console.log('Error with fetching data', e)
})


setTimeout((() => {
    database.ref('job/company').set('Google')
}), 3500) */

// Change the data and make sure it reprints

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val());
  }, (e) => {
      console.log('Error with data fetching', e)
  }) */

// RETURN VALUE is the function (snapshot) => { console.log(snapshot.val());}

/* setTimeout((() => {
    database.ref('age').set(29)
}), 3500)

setTimeout((() => {
    database.ref().off('value', onValueChange)
}), 7000)

setTimeout((() => {
    database.ref('age').set(30)
}), 10500) */

/* database.ref('location')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val)
    })
    .catch((e) => {
        console.log('Error fetching data', e)
    }) */

/* database.ref().set({
    name: 'Balint Bakos',
    age: 30,
    stressLevel: 6,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Vienna',
        country: 'Austria'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This failed', e)
}) */

// database.ref().set('This is my data.');

/* database.ref('age').set(29);
database.ref('location/city').set('Innsbruck')

// attributes
//  height
//  weight

database.ref('attributes').set(
    {
        height: 179,
        weight: 76
    }
    ).then(() => {
        console.log('Data has been successfully written.')
    }).catch((e) => {
        console.log('error', e)
    })

*/

// database.ref('isSingle').set(null);

/* database.ref().remove()
  .then(function() {
    console.log("Remove succeeded.")
  })
  .catch(function(error) {
    console.log("Remove failed: " + error.message)
  }); */

/* database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Innsbruck'
    }
) */
