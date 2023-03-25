import { Vacancy,vac1 } from "./vacancy.js";
import {applicant,Applicant1} from "./applicant.js";
import {doc1} from "./common.js"

// import {doc} from 

    let vac = new Vacancy();
    vac.display1(vac1);
   
   applicant();

  let btnApply = doc1('applyjob');
  btnApply.addEventListener("click",()=>
  {
    let app = new Applicant1()
    app.applyJob1();
  })
  