import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './EmployeeTable.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Name", field: "name", sortable: true, filter: true
      }, {
        headerName: "Phone", field: "phone", sortable: true, filter: true
      },{
        headerName: "Email", field: "email", sortable: true, filter: true
      },{
        headerName: "DOB", field: "DOB", sortable: true, filter: true
      }],
      rowData: [
        {
          name: "Alice Scott",
          phone: "(839) 866-8273",
          email: "Alice.Scott@gmail.com",
          DOB: "09/06/1980"
        },
        {
          name: "Lyra Sloan",
          phone: "(716) 497-8560",
          email: "Lyra.Sloan@gmail.com",
          DOB: "31/01/1997"
        },
        {
          name: "Akeel Findlay",
          phone: "(651) 495-0850",
          email: "Akeel.Findlay@gmail.com",
          DOB: "15/07/1981"
        },
        {
          name: "Lacey-May Hays",
          phone: "(986) 694-9001",
          email: "Lacey-May.Hays@gmail.com",
          DOB: "26/12/1984"
        },
        {
          name: "Denny Norman",
          phone: "(818) 285-1322",
          email: "Denny.Norman@gmail.com",
          DOB: "24/05/1992"
        },
        {
          name: "Karter Daugherty",
          phone: "(283) 320-9057",
          email: "Karter.Daugherty@gmail.com",
          DOB: "27/03/1984"
        },
        {
          name: "Raheem Orr",
          phone: "(500) 295-7328",
          email: "Raheem.Orr@gmail.com",
          DOB: "16/10/1997"
        },
        {
          name: "Cayden Perkins",
          phone: "(340) 792-5978",
          email: "Cayden.Perkins@gmail.com",
          DOB: "03/09/1989"
        },
        {
          name: "Maverick Willis",
          phone: "(321) 625-1070",
          email: "Maverick.Willis@gmail.com",
          DOB: "04/07/1994"
        },
        {
          name: "Samira Good",
          phone: "(744) 342-5916",
          email: "Samira.Good@gmail.com",
          DOB: "26/05/1993"
        }
      ]
      
    }
  }

  render() {
    return (
      <div
        className="ag-theme-alpine tablediv"
        style={{
        height: '490px',
        fontSize: '20px',
        fontFamily: 'Open Sans',
        width: '100%',
     }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default Table;