import { Component, OnInit } from '@angular/core';
import { FileHandle } from './../../dragDrop.directive';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
  constructor() { }

  ngOnInit() {
  }

}
