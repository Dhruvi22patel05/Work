
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