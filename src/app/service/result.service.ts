import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  amountPlan: number = 0;
  totalDiscount: number = 0;

  constructor() {}

  calculate(form: any) {
    this.amountPlan = form.pensionPlan + form.pensionPlanComp;

    if (form.inlineRadioOptions == 'ESP') {
      this.totalDiscount = this.irpfSpain(form.taxBase);
    } else if (form.inlineRadioOptions == 'AND') {
      this.totalDiscount = this.irpfAndorra(form.taxBase);
    }
  }

  irpfSpain(taxbase: number) {

    let total: number = 0;
    if (taxbase <= 12450) {
      total = this.amountPlan * (19 / 100);
    } else if (taxbase >= 12450 && taxbase <= 20199) {
      total = this.amountPlan * (24 / 100);
    } else if (taxbase >= 20200 && taxbase <= 35199) {
      total = this.amountPlan * (30 / 100);
      console.log(total);
    } else if (taxbase >= 35200 && taxbase <= 59999) {
      total = this.amountPlan * (37 / 100);
    } else if (taxbase >= 60000 && taxbase <= 299999) {
      total = this.amountPlan * (45 / 100);
    } else if (taxbase >= 300000) {
      total = this.amountPlan * (47 / 100);
    }
    return total;
  }

  irpfAndorra(taxbase: number) {

    let total: number = 0;

    if ( taxbase >= 24000 && taxbase <= 40000) {
      total = this.amountPlan * (5 / 100);
    } else if (taxbase >= 40000) {
      total = this.amountPlan * (10 / 100);
    }
    console.log('total',total)
    return total;
  }
}
