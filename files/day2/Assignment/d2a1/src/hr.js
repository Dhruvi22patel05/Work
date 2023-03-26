import { Vacancy } from "./vacancy.js";
import { vacancies, users, doc1, doc, schedulestorage } from "./common.js";
let vac = new Vacancy();
let btn = document.getElementById('addvac');
btn.addEventListener('click', () => {
    vac.addVacancy();
});
let select = document.getElementById('listofapplication');
let option = `<option>Select....</option>`;
for (let i of vacancies) {
    option += `<option value="${i.vacancy_id}">${i.vacancy_name}</option>`;
}
select.innerHTML = option;
select.addEventListener("change", (e) => {
    let tbl = doc1('table');
    let table = `<table class="table table-striped">
    <thead class="table-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">FullName</th>
        <th scope="col">BirthDate</th>
        <th scope="col">Address</th>
        <th scope="col">Email</th>
        <th scope="col">PhoneNumber</th>
        <th scope="col">LinkdIn</th>
        <th scope="col">Resume</th>
        <th scope="col">Confirmation</th>
  
      </tr>
    </thead>
    <tbody>`;
    console.log(e.target.value);
    for (let j of users) {
        let pos = j.position.split(":");
        if (pos[0] == e.target.value) {
            // console.log(j);
            table += `<tr>
            <td>${j.id}</td>
            <td>${j.fullname}</td>
            <td>${j.bdate}</td>
            <td>${j.address}</td>
            <td>${j.email}</td>
            <td>${j.phone}</td>
            <td>${j.linkdin}</td>
            <td>${j.resume}</td>
           
            <td><button class="btn btn-secondary schedule" type="button" value="usr:${j.fullname}:${j.id}:${pos[1]}">Schedule</button></td>
          </tr>`;
        }
    }
    tbl.innerHTML = table + `</tbody></table>`;
    let btnschedule = document.querySelectorAll('.schedule');
    for (let schedulebtn of btnschedule) {
        schedulebtn.addEventListener("click", (e) => {
            let value = e.target.value.split(":");
            console.log(value);
            let findval = schedulestorage.find((x) => x.fullname == value[1] && x.jobfield == value[3]);
            if (findval == undefined) {
                doc1('addvacancyform').style.display = "none";
                doc1('selectjoblist').style.display = "none";
                doc1('jobschedule').style.display = "block";
                doc1('back1').style.display = "flex";
                let arr = users.find((d) => d.id == value[2]);
                console.log(arr);
                let jobfield = arr.position;
                let job = jobfield.split(":");
                document.getElementById('fullname').value = arr.fullname;
                document.getElementById('email').value = arr.email;
                document.getElementById('jobfield').value = job[1];
            }
            else {
                alert("Already Schedule Interview");
            }
        });
    }
});
doc1('ischedule').addEventListener("click", (e) => {
    let fname = doc('fullname');
    let email = doc('email');
    let field = doc('jobfield');
    let sdate = doc('scheduledate');
    let stime = doc('scheduletime');
    let scheduleinterview = localStorage.getItem("schedule");
    let scheduledate = JSON.parse(scheduleinterview) || [];
    let schedule = { id: scheduledate.length + 1, fullname: fname, jobfield: field, intervieweremail: email, interviewdate: new Date(sdate), interviewtime: stime };
    scheduledate.push(schedule);
    localStorage.setItem("schedule", JSON.stringify(scheduledate));
});
