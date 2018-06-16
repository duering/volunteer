import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDFF1ql9CXyJmhhT-I6SV7_ep9NGFDfjyg",
	authDomain: "expensify-738fd.firebaseapp.com",
	databaseURL: "https://expensify-738fd.firebaseio.com",
	projectId: "expensify-738fd",
	storageBucket: "expensify-738fd.appspot.com",
	messagingSenderId: "978415468896"
};

firebase.initializeApp(config);

const database = firebase.database();

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log(expenses);
// }, (e) => {
// 	console.log('failed to get expenses');
// })

// child removed
database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.val());
});

// child changed
database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.val());
});

// child changed
database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.val());
});

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	const data = snapshot.val();
// 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
// 	console.log('Error with')
// })

// setTimeout(() => {
// 	database.ref('job/company').set('Google');
// }, 3500);

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	}).catch((e) => {
// 		console.log('Failed fethcing data', e);
// 	});

// database.ref().set({
// 	name: 'Ohad Duering',
// 	age: 35,
// 	isSingle: false,
// 	stressLevel: 6,
// 	location: {
// 		city: 'Berlin',
// 		country: 'Germany'
// 	},
// 	job: {
// 		title: 'Software developer',
// 		company: 'Google'
// 	}
// }).then(() => {
// 	console.log('Data is saved.');
// }).catch((e) => {
// 	console.log('This failed', e);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city' : 'NY'
// }).then(() => {
// 	console.log('Data is updated.');
// }).catch((e) => {
// 	console.log('Data update failed', e);
// });

// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed');
// 	}).catch((e) => {
// 		console.log('Data was not removed', e);
// 	})