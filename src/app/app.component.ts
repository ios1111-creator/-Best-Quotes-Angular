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
  sentence: string = '';
  author: string = '';
  quotation: Quotation = {author: '', sentence: '', votes: 0}

  show() {
    this.showForm = !this.showForm
  }

  onAddQuote() {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0}
  }

  addVotes(quotation: Quotation, value: number) {
    quotation.votes += value
  }
}
