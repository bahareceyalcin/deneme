//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
  //  <div>   
  //      <button (click)="onEditPerson($event)">TAHSİLAT</button>
  //       <button (click)="onOpenAbout($event)">KREDİ</button>
  //       <button (click)="onOpenProtocol($event)">PROTOKOL</button></div>
    //  <button (click)="createTab($event)">CREATE</button>
@Component({
  selector: 'my-app',
  template: `
 <button (click)="onOpenCollection($event)">TAHSİLAT</button>
         <button (click)="onOpenCredit($event)">KREDİ</button>
         <button (click)="onOpenProtocol($event)">PROTOKOL</button>
  
      <my-tabs>
      </my-tabs>

    <ng-template let-person="person" #personEdit>
      <person-edit [person]="person" (savePerson)="onPersonFormSubmit($event)"></person-edit>
    </ng-template>
    <ng-template #collection>
    <div id="contents" class="contents">
<div class="head">
    <h3 id="head">Tahsilat</h3>
    <button id="btn">XX</button>
</div>

<div class="row">
    <div id="table">bir</div>
    <div id="table">bir</div>
     <div id="table">bir</div>
     <div id="table">bir</div>
     <div id="table"></div>
     <div id="table"></div>
</div>
</div>
  </ng-template>
    <ng-template #credit>
      <div id="contents" class="contents">
  <div class="head">
      <h3 id="head">Kredi</h3>
      <button id="btn">XX</button>
  </div>
  
  <div class="row">
      <div id="table">bir</div>
      <div id="table">bir</div>
       <div id="table">bir</div>
       <div id="table">bir</div>
       <div id="table"></div>
       <div id="table"></div>
  </div>
</div>
    </ng-template>


<ng-template #protocol>
   <div id="contents" class="contents">
  <div class="head">
      <h3 id="head">Protokol</h3>
      <button id="btn">XX</button>
  </div>
  
  <div class="row">
      <div id="table">iki</div>
      <div id="table">iki</div>
       <div id="table">iki</div>
       <div id="table">bir</div>
       <div id="table"></div>
       <div id="table"></div>
  </div>
</div>
  </ng-template>  
  `
})
export class AppComponent {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('about') aboutTemplate;
   @ViewChild('protocol') protocolTemplate;
   @ViewChild('credit') creditTemplate;
   @ViewChild('collection') collectionTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  people = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    }
  ];

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }
  onOpenCollection()
  {
    this.tabsComponent.openTab('Collection', this.collectionTemplate, {}, true);
  }
  onOpenCredit()
  {
    this.tabsComponent.openTab('Credit', this.creditTemplate, {}, true);
  }
  onOpenProtocol()
  {
    this.tabsComponent.openTab('Protocol', this.protocolTemplate, {}, true);
  }
    createTab(event){
    console.log(event.target.attributes);
    
    this.tabsComponent.openTab(
      event.target.innerHTML,
      event.template,
      event.dataContext,
      false,
    );
    }
}
