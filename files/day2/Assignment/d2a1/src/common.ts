
export let doc =  function(str:any){
    return (<HTMLInputElement>document.getElementById(str)).value;
}

export let doc1 = function(str:any){
    return <HTMLElement>document.getElementById(str)
}

let local: any = localStorage.getItem("vacancy");
export let vacancies = JSON.parse(local);

let user1: any = localStorage.getItem("applicant");
export let users = JSON.parse(user1);

let schedule1 : any = localStorage.getItem("schedule");
export let schedulestorage = JSON.parse(schedule1);

let confirmation : any = localStorage.getItem("confirm");
export let confirmationdone = JSON.parse(confirmation);

export interface schedule{
    id:number;
    fullname:string;
    jobfield:string
    intervieweremail:string;
    interviewdate:Date;
    interviewtime:string;
}

export interface confirm{
    id:number;
    fullname:string;
    email:string;
    field:string;
    interviewdate:Date;
    interviewtime:Date;
    address:string;
    phonenumber:number;
    resume:string
}