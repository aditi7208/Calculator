import { CurrencyPipe} from '@angular/common';
import { Component, input} from '@angular/core';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  standalone:true,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
 results=input<{
    year:number;
    interest:number;
    valueEndofYear:number;
    annualInvestment:number;
    totalInterest:number;
    totalAmountInvested:number;
  }[]>()
// private InvestmentService=inject(InvestmentService);

// get results(){
//   return this.InvestmentService.resultData;
// }
}
