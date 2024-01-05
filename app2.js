import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBL2luc0NRcCA9W6-GPu9VciX_bw44pZKI",
    authDomain: "basic-46a8a.firebaseapp.com",
    projectId: "basic-46a8a",
    storageBucket: "basic-46a8a.appspot.com",
    messagingSenderId: "257760944824",
    appId: "1:257760944824:web:55d3cfc18aa54870664a4d",
    measurementId: "G-RJR5NB7RHS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form =document.getElementById("registerForm");
const formarea = document.getElementById("form-area");
const profile = document.getElementById("profile");
const welcome = document.getElementById("welcome");
const logout = document.getElementById("logout");
const login = document.getElementById("loginForm");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        alert("สร้างบัญชีแล้ว")
    }).catch((error) => {
        alert(error.message)
    })
})

onAuthStateChanged(auth,(user) => {
    //login
    if (user) {
        profile.style.display="block"
        formarea.style.display="none"
        welcome.innerText = `Welcome ${user.email};`
    }else {
        profile.style.display="none"
        formarea.style.display="block"
    }

})
logout.addEventListener("click", (e) => {
    //console.log("ออกจากระบบ");
    signOut(auth).then(() => {
        alert("ออกจากระบบเรียบร้อย")
    }).catch((error) => {
        alert(error.message)
    })
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value
    // console.log(email);
    // console.log(password);
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=> {
        alert("Login successful")
    }).catch((error) => {
        alert(error.message)
    })
})