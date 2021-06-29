import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
declare var $ :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public MatrixTable:any;
  public dates:Array<any>;
  public tableshow:boolean=false;
  constructor(private fb:FormBuilder) { }

  counter = Array;
  public Dynamictable:FormGroup=new FormGroup({
    RowWise:this.fb.array([this.addUsertpye()])
  })
  numberReturn(length:number){
    return new Array(length);
  }

  ngOnInit() {
    // this.MatrixTable={
    //   "headRow":3,
    //   "tableHead": [
    //     {
    //       "headerName": "Time Period",
    //       "rows": 3,
    //       "cols":1,
    //       "index":"date_range"
    //     },
    //     {
    //       "headerName": "Hotel",
    //       "cols":2,
    //       "subHeader": [
    //         {
    //           "headerName": "Package",
    //           "cols":1,
    //           "subHeader": [
    //             {
    //               "headerName": "All",
    //               "index": "Hotel_package_all",
    //             }
    //           ]
    //         },
    //         {
    //           "headerName": "Retail",
    //           "cols":1,
    //           "subHeader": [
    //             {
    //               "headerName": "All",
    //               "index": "Hotel_retail_all"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "headerName": "Holiday",
    //       "cols":2,
    //       "subHeader": [
    //         {
    //           "headerName": "Retail",
    //           "cols":2,
    //           "subHeader": [
    //             {
    //               "headerName": "Adult",
    //               "index": "holiday_retail_Adult"
    //             },
    //             {
    //               "headerName": "Child",
    //               "index": "holiday_retail_Child"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "headerName": "Join group",
    //       "cols":2,
    //       "subHeader": [
    //         {
    //           "headerName": "Retail",
    //           "cols":2,
    //           "subHeader": [
    //             {
    //               "headerName": "Adult",
    //               "index": "joinGroup_retail_Adult"
    //             },
    //             {
    //               "headerName": "Child",
    //               "index": "joinGroup_retail_Child"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "headerName": "Activity",
    //       "cols":4,
    //       "subHeader": [
    //         {
    //           "headerName": "Package",
    //           "cols":2,
    //           "subHeader": [
    //             {
    //               "headerName": "Adult",
    //               "index": "Activity_Package_adult"
    //             },
    //             {
    //               "headerName": "Child",
    //               "index": "Activity_package_Child"
    //             }
    //           ]
    //         },
    //         {
    //           "headerName": "Retail",
    //           "cols":2,
    //           "subHeader": [
    //             {
    //               "headerName": "Adult",
    //               "index": "Activity_retail_Adult"
    //             },
    //             {
    //               "headerName": "Child",
    //               "index": "Activity_retail_child"
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     {
    //       "headerName": "Transfer",
    //       "cols":2,
    //       "subHeader": [
           
    //         {
    //           "headerName": "Package",
    //           "cols":2,
    //           "subHeader": [
    //             {
    //               "headerName": "Adult",
    //               "index": "transfer_package_Adult"
    //             },
    //             {
    //               "headerName": "Child",
    //               "index": "transfer_package_Child"
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ],
    //   "tableData":[
    //     { 
    //       "date_range":"27-02-2020",        
    //       "Hotel_package_all":1000,
    //       "Hotel_retail_all":2000,
    //       "holiday_retail_Adult":3000,
    //       "holiday_retail_Child":4000,
    //       "joinGroup_retail_Adult":5000,
    //       "joinGroup_retail_Child":6000,
    //       "Activity_Package_adult":7000,
    //       "Activity_package_Child":8000,
    //       "Activity_retail_Adult":9000,
    //       "Activity_retail_child":10000,
    //       "transfer_package_Adult":11000,
    //       "transfer_package_Child":12000
    //     },
    //     { 
    //       "date_range":"28-02-2020",        
    //       "Hotel_package_all":11000,
    //       "Hotel_retail_all":21000,
    //       "holiday_retail_Adult":31000,
    //       "holiday_retail_Child":41000,
    //       "joinGroup_retail_Adult":51000,
    //       "joinGroup_retail_Child":61000,
    //       "Activity_Package_adult":17000,
    //       "Activity_package_Child":81000,
    //       "Activity_retail_Adult":91000,
    //       "Activity_retail_child":110000,
    //       "transfer_package_Adult":11000,
    //       "transfer_package_Child":12000
    //     },
    //     { 
    //       "date_range":"29-02-2020",        
    //       "Hotel_package_all":1000,
    //       "Hotel_retail_all":2000,
    //       "holiday_retail_Adult":3000,
    //       "holiday_retail_Child":4000,
    //       "joinGroup_retail_Adult":5000,
    //       "joinGroup_retail_Child":6000,
    //       "Activity_Package_adult":7000,
    //       "Activity_package_Child":8000,
    //       "Activity_retail_Adult":9000,
    //       "Activity_retail_child":10000,
    //       "transfer_package_Adult":11000,
    //       "transfer_package_Child":12000
    //     }
      
        
    //   ]
       

        
    //   }

    this.MatrixTable={
      "headRow": 1,
      "tableHead": [
        {
          "headerName": "Proirity",
          "rows": 2,
          "status": "Y",
          "index": "stayperiod",
          "pos": 0
        },
        {
          "headerName": "First responses Time",
         "rows": 2,
          "status": "Y",
          "index": "single_room",
          "pos": 1
        },
        {
          "headerName": "Every responses Time",
          "rows": 2,
          "status": "Y",
          "index": "multi_room",
          "pos": 2
        },
        {
          "headerName": "resolution time",
          "rows": 2,
          "status": "Y",
          "index": "master_room",
          "pos": 3
        },
        {
          "headerName": "Optional hours",
          "rows": 2,
          "status": "Y",
          "index": "queen_room",
          "pos": 4
        },
        {
          "headerName": "Action",
          "rows": 3,
          "cols": 1,
          "status": "Y",
          "index": "action",
          "pos": 13
        }
      ],
      "formData": [
        {
          "start_date": "2020-08-20",
          "end_date": "2020-08-28"
        },
        {
          "start_date": "2020-08-29",
          "end_date": "2020-09-02"
        },
        {
          "start_date": "2020-10-02",
          "end_date": "2020-10-31"
        },
        {
          "start_date": "2020-11-27",
          "end_date": "2020-11-27"
        }
      ],
      "inputFormat": "single",
      "additionalField": {
        "display": false
      },
      "inputType": "absolute"
    }
    this.dates=[
      {"date":"date1"},
      {"date":"date2"}
    ];
    console.log(this.Dynamictable);
    // console.log(((((((((((((((((this.Dynamictable.controls.RowWise)as FormArray).controls[0])as FormGroup).controls.ColumnwisePrimary)as FormArray).controls[0])as FormGroup).controls.ColumnwiseSecondary)as FormArray).controls[0])as FormGroup).controls.ColumnwiseTertiary)as FormArray).controls[0])as FormGroup).controls);
    // console.log(((((this.Dynamictable.controls.RowWise)as FormArray).controls[0]as FormGroup).controls.ColumnwisePrimary)as FormArray);
  }
//  public addrowwise(){
//    return new FormGroup({
//     ColumnwisePrimary:this.fb.array([this.addColumnwisePrimary()])
//    });
//  }
//  public addColumnwisePrimary(){
//   return new FormGroup({
//     ColumnwiseSecondary:this.fb.array([this.ColumnwiseSecondary()])
//    });
//  }
//  public ColumnwiseSecondary(){
//     return new FormGroup({
//       ColumnwiseTertiary:this.fb.array([this.Columnwisetertiary()])
//     });
//  }
//  public Columnwisetertiary(){
//    return new FormGroup({
//     valueBox:new FormControl('')
//    });
//  }
//  public get RowWise(){
//    return ((this.Dynamictable.controls.RowWise)as FormArray).controls
//  }
//  public addControls(){
//    this.getControladdrowwise.push()
//  }
get addrows():any {
  return ((this.Dynamictable.controls.RowWise)as FormArray).controls as any;
  // return this.Dynamictable.get('RowWise') as FormArray
}
 public addrow(){
 
  this.addrows.push(this.addUsertpye());
  // console.log(((((this.Dynamictable.controls.RowWise)as FormArray).controls[i])as FormGroup).controls.date_period);
  // console.log(this.Dynamictable)
  // ((this.Dynamictable.get('RowWise') as FormArray).controls[i] as FormGroup).controls['date_period'].setValue(this.addrow);
  // console.log
 }
 public addUsertpye():FormGroup{
   return this.fb.group({
    date:new FormControl('')
   })
 }
 public generate(i:number){
    this.tableshow=true;
    console.log(this.Dynamictable);
   
 }
//  onSubmit(){
//    console.log('Submit Form');
//  }
}
