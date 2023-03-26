import { Vacancy, vac1 } from "./vacancy.js";
import { applicant, Applicant1, process } from "./applicant.js";
import { doc1, doc, users, schedulestorage } from "./common.js";
// import {doc} from 
let vac = new Vacancy();
vac.display1(vac1);
applicant();
process();
let btnApply = doc1('applyjob');
btnApply.addEventListener("click", () => {
    let app = new Applicant1();
    app.applyJob1();
});
let btnlogin = doc1('loginbutton');
btnlogin.addEventListener("click", () => {
    doc1('vacancy').style.display = "none";
    doc1('loginpage').style.display = "block";
    doc1('signin').addEventListener("click", () => {
        doc1('loginpage').style.display = "none";
        // let interviewername = doc('loginname');
        let interviewemail = doc('emaillogin');
        let array = schedulestorage.filter((data) => data.intervieweremail == interviewemail);
        // console.log(array);
        if (array == "") {
            alert("Data not found");
        }
        else {
            let table = doc1('interviewtable');
            let tbl = `<table class="table table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">FullName</th>
            <th scope="col">Job Field</th>
            <th scope="col">Email</th>
            <th scope="col">Interview Date</th>
            <th scope="col">Interview Time</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>`;
            for (let i of array) {
                let date = new Date(i.interviewdate);
                tbl += `<tr>
          <td>${i.fullname}</td>
            <td>${i.jobfield}</td>
            <td>${i.intervieweremail}</td>
            <td>${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}</td>
            <td>${i.interviewtime}</td>
            <td><button type="button" class="btn btn-success confirm" id="btn:${i.id}" value="confirm:${i.id}:${i.fullname}:${i.jobfield}">Confirm</button></td>

          </tr>`;
            }
            table.innerHTML = tbl + `</tbody></table>`;
        }
        let btnconfirm = document.querySelectorAll('.confirm');
        for (let confirmbtn of btnconfirm) {
            confirmbtn.addEventListener("click", (e) => {
                let valueconfirm = e.target.value.split(":");
                console.log(valueconfirm);
                let scheduledata = schedulestorage.find((data) => data.id == valueconfirm[1]);
                console.log(scheduledata.fullname);
                let userdata = users.find((data1) => {
                    let position = data1.position.split(":");
                    return data1.fullname == valueconfirm[2] && position[1] == valueconfirm[3];
                });
                let confirmation = localStorage.getItem("confirm");
                let finalcomfirmation = JSON.parse(confirmation) || [];
                let confirmdata = { id: finalcomfirmation.length + 1, fullname: scheduledata.fullname, email: scheduledata.intervieweremail, field: scheduledata.jobfield, interviewdate: new Date(scheduledata.interviewdate), interviewtime: scheduledata.interviewtime, address: userdata.address, phonenumber: userdata.phone, resume: userdata.resume };
                finalcomfirmation.push(confirmdata);
                localStorage.setItem("confirm", JSON.stringify(finalcomfirmation));
                doc1('btn:' + valueconfirm[1]).innerHTML = "Done";
            });
        }
    });
});
