import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  csvData: any[] = [];
  headerRow: any[] = [];
  constructor(private http: HttpClient, private papa: Papa) {
    this.readCsv();

  }

  
  // read csv file
   readCsv(){
    this.http.get('assets/WardNo06.csv',{
      responseType:'text'
    })
    .subscribe(
       data => this.extractData(data),
      //data => console.log(data),
      err => this.handleError(err)
    ) 
  } 

   extractData(res){
    let csvData = res || '';
    
    this.papa.parse(csvData, {
      complete: parsedData => {
        this.headerRow = parsedData.data.splice(0,1)[0];

        parsedData.data.forEach(rowArray => {
           let object = {
             srno: rowArray[0],
             voterName: rowArray[1],
             fatherName: rowArray[2],
             husbandName: rowArray[3],
             plotNo: rowArray[4],
             age: rowArray[5],
             gender: rowArray[6],
           }
           this.csvData.push(object);
          
        });
      }
    })
  }

  handleError(err){
    console.log(err);
  } 


}
