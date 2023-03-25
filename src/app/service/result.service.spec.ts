import { TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';

describe('ResultService', () => {
  let service: ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultService);
  });



  describe('calculate', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });


    it('should calculate the totalDiscount for Spain, 3000 result', () => {
      const formValues = {
        taxBase: 30000,
        pensionPlan: 1500,
        pensionPlanComp: 8500,
        inlineRadioOptions: 'ESP'
      };
      service.calculate(formValues);
      expect(service.totalDiscount).toBe(3000);
    });

    it('should calculate the totalDiscount for Spain, 3000 result', () => {
      const formValues = {
        taxBase: 50000,
        pensionPlan: 1500,
        pensionPlanComp: 8500,
        inlineRadioOptions: 'ESP'
      };
      service.calculate(formValues);
      expect(service.totalDiscount).toBe(3700);
    });

    it('should calculate the totalDiscount for Andorra correctly', () => {
      const formValues = {
        taxBase: 30000,
        pensionPlan: 1500,
        pensionPlanComp: 8500,
        inlineRadioOptions: 'AND'
      };
      service.calculate(formValues);
      expect(service.totalDiscount).toBe(500);
    });


  });

});
