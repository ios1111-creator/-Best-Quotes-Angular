import {Component} from '@angular/core';
import {Quotation} from "./models/quotation";
import {quotes} from "./models/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-best-quotes';
  showForm: boolean = false;
  quotes: Quotation[] = quotes;



  addVotes(quotation: Quotation, value: number) {
    quotation.votes += value
  }
onAddQuotation(quotation:Quotation){
    this.quotes.unshift(quotation)
}
  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0)
  }
}
