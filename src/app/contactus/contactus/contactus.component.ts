import { Component, OnInit } from '@angular/core';
// import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  // @ViewChild('content', {static: false}) content: ElementRef
  /**
   * Description : Number of Days
   */
  public days : number = 4 ;
  /**
   * Meal Preferences
   */
  public mainMealPreferencs : Array<any> = [];
  /**
   * Description : Meal 
   */
  public mealPreferences : Array<any> = [
    {
      type : 'Breakfast',
      status : 'N'
    },
    {
      type : 'Lunch',
      status : 'N'
    },
    {
      type : 'Dinner',
      status : 'N'
    }
  ];
  arrayOne(n: number): any[] {
    return Array(n);
  }
  constructor() { }

  ngOnInit() {
    for(let i : number = 0;i < this.days; i++) {
      this.mainMealPreferencs.push( [
        {
          type : 'Breakfast',
          ['status' + i] : 'N'
        },
        {
          type : 'Lunch',
          ['status' + i] : 'N'
        },
        {
          type : 'Dinner',
          ['status' + i] : 'N'
        }
      ]);
    }
  }
  /**
   * Description : Add Meal
   */
  public addMeal(mealcount,daycount) {
    console.log(daycount,mealcount);
    this.mainMealPreferencs[daycount][mealcount]['status'+daycount] == 'N' ? this.mainMealPreferencs[daycount][mealcount]['status'+daycount] = 'Y' : this.mainMealPreferencs[daycount][mealcount]['status'+daycount]= 'N';
    console.log(this.mainMealPreferencs);
  }

  // public downloadPDF() {
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const content = this.content.nativeElement;

  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('test.pdf');
  // }

}
