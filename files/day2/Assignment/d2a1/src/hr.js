import { Vacancy } from "./vacancy.js";
import { vacancies, users, doc1 } from "./common.js";
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
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>`;
    console.log(e.target.value);
    for (let j of users) {
        let pos = j.position.split(":");
        if (pos[0] == e.target.value) {
            console.log(j);
            table += `<tr>
            <td>${j.id}</td>
            <td>${j.fullname}</td>
            <td>${j.bdate}</td>
            <td>${j.address}</td>
            <td>${j.email}</td>
            <td>${j.phone}</td>
            <td>${j.linkdin}</td>
            <td>${j.resume}</td>
            <td><button class="btn btn-secondary" value="usr:${j.id}">Schedule</button></td>
          </tr>`;
        }
    }
    tbl.innerHTML = table + `</tbody></table>`;
});
