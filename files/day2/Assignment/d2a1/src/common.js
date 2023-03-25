export let doc = function (str) {
    return document.getElementById(str).value;
};
export let doc1 = function (str) {
    return document.getElementById(str);
};
let local = localStorage.getItem("vacancy");
export let vacancies = JSON.parse(local);
let user1 = localStorage.getItem("applicant");
export let users = JSON.parse(user1);
