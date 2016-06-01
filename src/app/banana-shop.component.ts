import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
//import {MdCheckbox} from '@angular2-material/checkbox';
//import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';;
import { FriendsComponent } from './+friends';
@Component({
  moduleId: module.id,
  selector: 'banana-shop-app',
  templateUrl: 'banana-shop.component.html',
  styleUrls: ['banana-shop.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    //MdCheckbox,
    //MdRadioGroup,
    //MdRadioButton,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [ MdIconRegistry]
})
@Routes([
  {path: '/friends', component: FriendsComponent},
  {path: '*', component: FriendsComponent}
])
export class BananaShopAppComponent {
  title = 'My retarded friends';
  views: Object[] = [
    {
      name:'My Account',
      description:'Edit my account information',
      icon: "assignment ind"
    },
    {
      name:'My retarded friends',
      description:'Retarded Retarded Retarded',
      icon: "pets",
      href: "/friends"
    }
  ];
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/friends']);
  }
}
