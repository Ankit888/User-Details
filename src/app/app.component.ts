import { Component, OnInit,} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as packageInfo from '../../data/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'AcademyDetails';
  myReactiveForm!: FormGroup;
  count = false;
  version = packageInfo;
  ngOnInit(): void {
    console.log(this.version.users);
  }


}
