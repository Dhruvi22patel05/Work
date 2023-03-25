import {doc1,doc,vacancies} from "./common.js"
export function applicant(){


    let btn:any = document.querySelectorAll(".apply")

    for(let i of btn )
    {
        i.addEventListener("click",(e:any)=>
        {
            doc1('main').style.display = "block";
            doc1('vacancy').style.display = "none";
            let value:string = e.target.value;
            let arr:any = value.split(":");
            console.log(vacancies);
            let data = vacancies[(arr[1]-1)];
            console.log(data);
            (<HTMLInputElement>document.getElementById("position")).value = data.vacancy_name;
                
    })
}
}

interface applicant{
    id:number;
    fullname:string;
    bdate: string;
    address:string;
    city:string;
    state:string;
    email:string;
    phone:number;
    linkdin:string;
    sdate:string;
    resume:string;
    position:string;
}

 export class Applicant1{

    applyJob1():void{

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
        for(let i of vacancies)
        {
            if(i.vacancy_name == position)
            {
                 pos = i;
            }
        }
        console.log(pos.vacancy_id);
        let user1: any = localStorage.getItem("applicant");
        let applicantdata = JSON.parse(user1) || [];
      

        let applicantOfJob:applicant = {id:applicantdata.length+1, fullname: `${fname} ${mname} ${lname}`, bdate :`${day} / ${month} / ${year}`, address: `${sadd} ${sadd2},${city},${state} ${zip}`, city:city, state:state, email:email, phone:phone, linkdin:link, sdate:sdate, resume:resume, position:`${pos.vacancy_id}:${position}`}

        applicantdata.push(applicantOfJob);
        localStorage.setItem("applicant", JSON.stringify(applicantdata));


    }
}