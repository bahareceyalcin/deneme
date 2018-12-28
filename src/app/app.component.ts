//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
@Component({
  selector: 'my-app',
  template: `
         <button (click)="onOpenCollection($event)">TAHSİLAT</button>
         <button (click)="onOpenCredit($event)">KREDİ</button>
         <button (click)="onOpenProtocol($event)">PROTOKOL</button>
      <my-tabs>
      </my-tabs>   
    <ng-template #collection>
    <div id="collection" class="contents">
      <div class="head">
          <h3 id="head">Tahsilat</h3>
          <button id="collection" class="resizetab" (click)="resizeTab($event)" >XX</button>
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
      <div id="credit" class="contents">
        <div class="head">
            <h3 id="head">Kredi</h3>
            <button id="credit" class="resizetab"  (click)="resizeTab($event)">XX</button>
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
    <div id="protocol" class="contents">
      <div class="head">
          <h3 id="head">Protokol</h3>
          <button id="protocol" class="resizetab"  (click)="resizeTab($event)">XX</button>
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
  `,
  styles: [
    `
    .contents{
      border: 1px;
      border-radius: 5px;
      background-color: #f7f7f7;
      padding: 10px;
    }
    .resizetab{
      float: right;
      margin-top: -40px;
    }
    `
  ]
})
export class AppComponent {
   @ViewChild('protocol') protocolTemplate;
   @ViewChild('protocol') tempProtocolTemplate;
   @ViewChild('credit') creditTemplate;
   @ViewChild('collection') collectionTemplate;
   @ViewChild(TabsComponent) tabsComponent;
  onOpenCollection()
  {
    this.tabsComponent.openTab('Collection', this.collectionTemplate, {}, true,false);
  }
  onOpenCredit()
  {

    this.tabsComponent.openTab('Credit', this.creditTemplate, {}, true,false);
  }
  onOpenProtocol()
  { 
    if ( this.tabsComponent.dynamicTabs[0].isPinned==false)
    this.tabsComponent.openTab('Protocol', this.protocolTemplate, {}, true,false);
    else{
      console.log("yeea");
    }
  }
  createTab(event)
  {
  this.tabsComponent.openTab(
    event.target.innerHTML,
    event.template,
    event.dataContext,
    false,
    false
  );
}
resizeTab(event){
  this.tabsComponent.dynamicTabs[0].isPinned=true;
  console.log(this.tabsComponent);
  // var elem = document.getElementById(id);
  var target = event.target || event.srcElement || event.currentTarget;
  var idAttr = target.attributes.id;
  var value = idAttr.nodeValue;
  var elem = document.getElementById(value);
  elem.style.width="150px";
}
}
