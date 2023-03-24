import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { ResultService } from '../../service/result.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let resultService: ResultService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [ ResultService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    resultService = TestBed.inject(ResultService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the result', () => {
    const formValues = {
      taxBase: 30000,
      pensionPlan: 1500,
      pensionPlanComp: 8500,
      inlineRadioOptions: 'ESP'
    };
    spyOn(resultService, 'calculate').and.callThrough();
    spyOn(component.myForm, 'reset');
    component.myForm.setValue(formValues);
    component.calculate();
    expect(resultService.calculate).toHaveBeenCalledWith(formValues);
    expect(component.result).toBe('3000.00');
    expect(component.myForm.reset).toHaveBeenCalled();
  });

  it('should not calculate the result if the form is invalid', () => {
    const formValues = {
      taxBase: 30000,
      pensionPlan: 3000, // exceeds max limit
      pensionPlanComp: 5000,
      inlineRadioOptions: 'ESP'
    };
    spyOn(resultService, 'calculate');
    component.myForm.setValue(formValues);
    component.calculate();
    expect(resultService.calculate).not.toHaveBeenCalled();
    expect(component.result).toBe('');
    expect(component.myForm.controls['pensionPlan'].valid).toBe(false);
  });


});
