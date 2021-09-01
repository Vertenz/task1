let errors = '';
//hate webpack' regenerator-runtime + мб старая версия babel-polyfill
// async function getStudents() {
//     try {
//         let res = await fetch('https://reqres.in/api/users?page=2');
//         let users = await res.json();
//         console.log(users)
//     } catch(err) {
//         errors = err;
//         // post errors
//         console.log(errors)
//     }
// }

function getStudents(studentEl, graduateEl) {
    fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(students => {
            studentEl.innerHTML = students.data.length
            graduateEl.innerHTML = students.data.length - 1
        })
}

document.addEventListener('DOMContentLoaded', () => {
    // АСИНХРОН getStudents().then(r => данные в дом);
    const studentsBlock = document.getElementById('student-counter')
    const graduateBlock = document.getElementById('graduate-counter')
    getStudents(studentsBlock, graduateBlock)

    const meterEl = document.getElementById('student-earnings__meter_full')
    const moneyEl = document.getElementById('students-salary')
    const percent = Math.floor(Math.random() * (90 - 20 + 1)) + 20
    meterEl.style.width = percent + '%'
    const money = percent * 10000
    moneyEl.innerHTML = money.toString()
})
