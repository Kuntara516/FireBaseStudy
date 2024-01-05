
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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
const db = getFirestore(app);
const table = document.getElementById("table");
const form =  document.getElementById("addForm");

async function getEmployees(db){
    const empCol =collection(db, 'employees')
    const empSnapshot =  await getDocs(empCol)
    return empSnapshot
}
function showData(employee) {
    const row = table.insertRow(-1)
    const nameCol = row.insertCell(0)
    const ageCol = row.insertCell(1)
    const emailCol = row.insertCell(2)
    const deleteCol = row.insertCell(3)
    nameCol.innerHTML = employee.data().name
    ageCol.innerHTML = employee.data().age
    emailCol.innerHTML = employee.data().email
    // สร้างปุ่มลบ
    let  btn = document.createElement("button")
    btn.textContent="ลบข้อมูล"
    btn.setAttribute("class", "btn btn-danger")
    btn.setAttribute("data.id", employee.id)
    deleteCol.appendChild(btn)
    btn.addEventListener("click",(e) => {
        let id = e.target.getAttribute("data.id");
        deleteDoc(doc(db,"employees",id))
        // console.log(id)
    })

}
//ดึงข้อมูลจาก document
const data = await getEmployees(db)
console.log(data)
data.forEach(employee=>{
    showData(employee)
})

//ดึงข้อมูลจาก form
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addDoc(collection(db, "employees"),{
        name:form.name.value,
        age:form.age.value,
        email:form.email.value
    })
    form.name.value=""
    form.age.value=""
    form.email.value=""
    alert("บันทึกแล้ว")
})