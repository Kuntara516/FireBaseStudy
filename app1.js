import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getStorage, ref, uploadBytes} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBL2luc0NRcCA9W6-GPu9VciX_bw44pZKI",
    authDomain: "basic-46a8a.firebaseapp.com",
    projectId: "basic-46a8a",
    storageBucket: "basic-46a8a.appspot.com",
    messagingSenderId: "257760944824",
    appId: "1:257760944824:web:55d3cfc18aa54870664a4d",
    measurementId: "G-RJR5NB7RHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fileUpload = document.getElementById("fileUpload")
fileUpload.addEventListener("change", (e) =>{
    const file = e.target.files[0]
    //console.log(file);
    const imageRef =ref(storage,"myimage")
    uploadBytes(imageRef, file)
    .then((result)=>{
        alert("Upload Completed successfully")
    })
})

