import { initializeApp } from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDfIkD7dVcQ7lAFtwkQHBE-kFEh3wGgDNc",
    authDomain: "mdrecommerce-a5710.firebaseapp.com",
    projectId: "mdrecommerce-a5710",
    storageBucket: "mdrecommerce-a5710.appspot.com",
    messagingSenderId: "701607303172",
    appId: "1:701607303172:web:a7b9b5cf3c39629873bd51"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
