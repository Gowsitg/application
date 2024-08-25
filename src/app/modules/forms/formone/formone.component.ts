import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formone',
  templateUrl: './formone.component.html',
  styleUrls: ['./formone.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class FormoneComponent implements OnInit{

  public applicationOne!: FormGroup;
  public loader: boolean = false;
  constructor(private formbulider: FormBuilder,private toastr: ToastrService) {}
  
  ngOnInit(): void {
    
    this.applicationOne = this.formbulider.group({
      username: ['',Validators.required],
      designation: ['',Validators.required],
      department: ['',Validators.required],
      plwork: ['',Validators.required],
      dobirth: ['',Validators.required],
      doappoinment: ['',Validators.required],
      dorrtire: ['',Validators.required],
      service: ['',Validators.required],
      income: ['',Validators.required],
      adddress1: ['',Validators.required],
      adddress2: ['',Validators.required],
      number: ['',Validators.required],
      empwork: ['',Validators.required],
      loan: ['',Validators.required],
      location: ['',Validators.required],
      remark: ['',Validators.required],
    });
    
 }
 get fform() {
  return this.applicationOne.controls;
}
submitForm() {
    if(this.applicationOne.valid) {
      this.toastr.success('Application Submitted Successfully')
    } else {
      this.toastr.warning('')

    }
  }

cancel() {
   this.applicationOne.reset()
}
}
