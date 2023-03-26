import { doc } from './common.js';
export class Vacancy {
    // vacancy: vacancy[];
    constructor() {
    }
    display1(vac) {
        // localStorage.setItem("vacancy", JSON.stringify(vac))
        let table = document.getElementById('vacancy');
        let tbl = "";
        let local = localStorage.getItem("vacancy");
        let vacancies = JSON.parse(local);
        console.log(vacancies);
        for (let i of vacancies) {
            // console.log(i);
            tbl += `
            <div class="card" style="width: 18rem;">
            <img src="./img/radix.jpg" class="card-img-top mt-3" alt="job">
            <div class="card-body">
            <h5 class="card-title">${i.vacancy_name}</h5>
            <p class="card-text">${i.description}</p>
            <p class="card-text"> Total Vacancy : ${i.Total_Number}</p>
            <a href="#"><button class="btn btn-primary apply" value="btn:${i.vacancy_id}">Apply</button></a>
            <a href="#"><button class="btn btn-primary process" value="btn:${i.vacancy_id}">See Process</button></a>
            </div>
            </div>`;
        }
        table.innerHTML = tbl + `</tbody></table>`;
    }
    addVacancy() {
        let vname = doc("vname");
        let vdescription = doc("vdescription");
        let totalvacancy = parseInt(doc("tvacancy"));
        let cartItems = localStorage.getItem("vacancy");
        let vacancystorage = JSON.parse(cartItems) || [];
        console.log(vacancystorage.length + 1);
        let vaca = { vacancy_id: vacancystorage.length + 1, vacancy_name: vname, description: vdescription, Total_Number: totalvacancy };
        vacancystorage.push(vaca);
        localStorage.setItem("vacancy", JSON.stringify(vacancystorage));
    }
}
export const vac1 = [
    { vacancy_id: 1, vacancy_name: ".Net", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, natus?", Total_Number: 10 },
    { vacancy_id: 2, vacancy_name: "PHP", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, natus?", Total_Number: 5 },
];
