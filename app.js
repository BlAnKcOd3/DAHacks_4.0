import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebaseConfig from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add data to Firestore
async function addData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;

  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: name,
      age: parseInt(age)
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Get data from Firestore
async function getData() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  const dataList = document.getElementById('data-list');
  dataList.innerHTML = '';

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const listItem = document.createElement('li');
    listItem.textContent = `${data.name}, ${data.age}`;
    dataList.appendChild(listItem);
  });
}

// Expose functions to the global scope
window.addData = addData;
window.getData = getData;