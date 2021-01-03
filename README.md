# VoterList-CSVTOJSON-
Voterlist ionic based small project, get voterlist from local csv file in our assets and it will be converted into JSON object and which is display on ion-list


# steps for installation
### 1.open npm command prompt
### 2.add npm update --packages
### 3.add npm install
### 3.ionic serve


# steps for CSV TO JSON Conversion

### 1.Store CSV file into project assets folder
### 2.read CSV file by using http with responstype = text on header
####  readCsv(){
####    this.http.get('assets/WardNo06.csv',{
####       responseType:'text'
####     })
####     .subscribe(
####        data => this.extractData(data),
####       //data => console.log(data),
####       err => this.handleError(err)
####    ) 
####   } 


## Screenshots

## VoterList With 
![Logo](/document/VoterList.jpg)

## VoterList With pipe filter
![Logo](/document/VoterListByFilter.jpg)

## App termination
![Logo](/document/AppTermination.jpg)
