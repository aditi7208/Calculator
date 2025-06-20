import { Component, signal,EventEmitter } from '@angular/core';

// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,UserInputComponent,InvestmentResultsComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   resultsData=signal<{
    year:number;
    interest:number;
    valueEndofYear:number;
    annualInvestment:number;
    totalInterest:number;
    totalAmountInvested:number;
  }[]|undefined>(undefined);
   

   onCalculateInvestmentResults(data: InvestmentInput)
    {
    const{initialInvestment, duration, expectedReturn,annualInvestment } = data;
    // const{initialInvestment, duration, expectedReturn,annualInvestment } = data;
    const annualData=[];
    let investmentValue=initialInvestment;

    for (let i=0;i< duration;i++){
        const year=i+1;
    // const interestEarnedInYear=investmentValue* (expectedReturn/100);
      const interestEarnedInYear=investmentValue * (expectedReturn/100);
    investmentValue +=interestEarnedInYear + annualInvestment;
    const totalInterest = investmentValue-annualInvestment* year -initialInvestment;
    annualData.push({
        year:year,
        interest:interestEarnedInYear,
        valueEndofYear:investmentValue,
        annualInvestment: annualInvestment,
        totalInterest:totalInterest,
        totalAmountInvested:initialInvestment+annualInvestment * year,
    });
    
    }
    // this.resultsData.set(annualData);
    this.resultsData.set(annualData);
}

   
 
}
