interface admin {
    id: number;
    admin_name: string;
    admin_email: string;
    gender: string;
}

class admin1 {
    admin_data: admin[];
    constructor(admin_data1: admin[]) {
        this.admin_data = admin_data1;
    }

    displayAdmin(): void {

        let table = <HTMLElement>document.getElementById("table");
        let tbl: any = "";

        tbl += `<table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">City</th>
          <th scope="col">Date Of Joining</th>
        </tr>
      </thead>
      <tbody>`
        for (let i of this.admin_data) {

            tbl += ` <tr>
          <td>${i.id}</td>
          <td>${i.admin_name}</td>
          <td>${i.admin_email}</td>
          <td>${i.gender}</td>
        </tr>`
        }
        table.innerHTML = tbl + `</tbody></table>`
    }
}
