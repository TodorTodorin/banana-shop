import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {MdButton} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-friends',
  templateUrl: 'friends.component.html',
  styleUrls: ['friends.component.css'],
  directives:[
    MdButton,
    MD_CARD_DIRECTIVES,
    MdInput,
    MdIcon
  ]
})
export class FriendsComponent implements OnInit {
  friends: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.friends = af.database.list('/friends')
  }
  postRetard(value){
    this.friends.push(value);
  }

  ngOnInit() {
  }

}
