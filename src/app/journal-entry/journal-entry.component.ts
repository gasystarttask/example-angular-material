import { Component, OnInit } from '@angular/core';
import { JournalEntryService } from '../services/journal-entry.service'

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  constructor(public service: JournalEntryService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.service.form.valid) {
      console.log(this.service.form.value);
    }
  }
}
