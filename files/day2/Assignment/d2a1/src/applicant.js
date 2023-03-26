import { doc1, doc, vacancies } from "./common.js";
export function applicant() {
    let btn = document.querySelectorAll(".apply");
    for (let i of btn) {
        i.addEventListener("click", (e) => {
            doc1('main').style.display = "block";
            doc1('vacancy').style.display = "none";
            doc1('loginbutton').style.display = "none";
            doc1('back').style.display = "inline";
            let value = e.target.value;
            let arr = value.split(":");
            let data = vacancies[(arr[1] - 1)];
            console.log(data);
            document.getElementById("position").value = data.vacancy_name;
        });
    }
}
export function process() {
    let btnprocess = document.querySelectorAll(".process");
    for (let j of btnprocess) {
        j.addEventListener("click", () => {
            doc1('vacancy').style.display = "none";
            doc1('interviewprocess').style.display = "block";
            doc1('back').style.display = "inline";
        });
    }
    doc1('back').addEventListener("click", () => {
        doc1('vacancy').style.display = "flex";
        doc1('interviewprocess').style.display = "none";
        doc1('back').style.display = "none";
        doc1('main').style.display = "none";
    });
}
export class Applicant1 {
    applyJob1() {
        let fname = doc('fname');
        let mname = doc('mname');
        let lname = doc('lname');
        let month = doc('month');
        let day = doc('day');
        let year = doc('year');
        let sadd = doc('sadd');
        let sadd2 = doc('sadd2');
        let city = doc('city');
        let state = doc('state');
        let zip = doc('zip');
        let email = doc('email');
        let phone = parseInt(doc('phone'));
        let link = doc('link');
        let sdate = doc('sdate');
        let resume = doc('resume');
        let position = doc('position');
        let pos;
        for (let i of vacancies) {
            if (i.vacancy_name == position) {
                pos = i;
            }
        }
        console.log(pos.vacancy_id);
        let user1 = localStorage.getItem("applicant");
        let applicantdata = JSON.parse(user1) || [];
        let applicantOfJob = { id: applicantdata.length + 1, fullname: `${fname} ${mname} ${lname}`, bdate: `${day} / ${month} / ${year}`, address: `${sadd} ${sadd2},${city},${state} ${zip}`, city: city, state: state, email: email, phone: phone, linkdin: link, sdate: sdate, resume: resume, position: `${pos.vacancy_id}:${position}` };
        applicantdata.push(applicantOfJob);
        localStorage.setItem("applicant", JSON.stringify(applicantdata));
    }
}
