// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBVtUTEBiC-yUo7e46MvEHIYI2ua8Bl0Do',
  authDomain: 'daka-c80c6.firebaseapp.com',
  projectId: 'daka-c80c6',
  storageBucket: 'daka-c80c6.appspot.com',
  messagingSenderId: '316673824949',
  appId: '1:316673824949:web:96e0dbe8784775c90906fc',
};

// Initialize Firebase
// 檢查應用程序是否已經不存在初始化，如果不是那就初始化
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
