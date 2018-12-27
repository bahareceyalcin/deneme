/**
 * Simple component to abstract the editing of a person
 * object.
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'person-edit',
  template: `
   <div id="contents" class="contents">
  <div class="head">
      <h3 id="head">Tahsilat</h3>
      <button id="btn">XX</button>
  </div>
  
  <div class="row">
      <div id="table"></div>
      <div id="table"></div>
       <div id="table"></div>
       <div id="table"></div>
       <div id="table"></div>
       <div id="table"></div>
  </div>
</div>
  `
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;

  @Input() person;
  @Output() savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      twitter: ''
    });
  }

  ngOnInit() {
    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '',
      surname: this.person.surname || '',
      twitter: this.person.twitter || ''
    });
  }

  onPersonFormSubmit() {
    let dataModel = this.personForm.value;
    this.savePerson.emit(dataModel);
  }
}
