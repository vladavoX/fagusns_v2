import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarrs',
  templateUrl: './navbarrs.component.html',
  styleUrls: ['./navbarrs.component.scss']
})
export class NavbarrsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > 0) {
      element.classList.add('navbar-scroll');
    } else {
      element.classList.remove('navbar-scroll');
    }
  }

}
