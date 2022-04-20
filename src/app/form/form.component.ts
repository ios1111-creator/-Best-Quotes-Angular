import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Quotation} from "../models/quotation";
import {quotes} from "../models/database";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
@Output() quotese=new EventEmitter<any>();

  quotation: Quotation = {author: '', sentence: '', votes: 0}
  quotes: Quotation[] = quotes;
  showForm: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onAddQuote() {
    this.quotese.emit(this.quotation)
    this.quotation = {author: '', sentence: '', votes: 0}
  }
  show() {
    this.showForm = !this.showForm
  }
}
