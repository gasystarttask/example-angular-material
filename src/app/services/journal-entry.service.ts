import { Injectable } from '@angular/core';
/* add angular forms */
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {

  constructor() { }

  // declare variable form
  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    date: new FormControl('', Validators.required),
    accounts: new FormControl(''),
    debit: new FormControl(null),
    credit: new FormControl(null)
  });

  
}
