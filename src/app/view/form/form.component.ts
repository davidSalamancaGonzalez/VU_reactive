import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultService } from '../../service/result.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  result: string = ""
  amountInvested: number = 0;

  constructor(private fb: FormBuilder,
              private resultCalc : ResultService) { }

 myForm : FormGroup = this.fb.group({
    taxBase: [ , [Validators.required]],
    pensionPlan: [ , [Validators.required, Validators.max(1500)]],
    pensionPlanComp: [ , [Validators.required , Validators.max(8500)]],
  })

calculate(){

  if(this.myForm.valid){
    this.resultCalc.calculate(this.myForm.value)
    this.result = this.resultCalc.totalDiscount.toFixed(2)
    this.myForm.reset()
  } else {
    this.myForm.markAllAsTouched()
  }
}

validField(field: string){
  return this.myForm.controls[field].errors && this.myForm.controls[field].touched
}

test(){

  console.log(this.myForm)
}

}
