import { AfterViewInit, Component, HostListener,  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public innerWidth: any;
  @ViewChild('clouds') clouds! : ElementRef;
  @ViewChild('rocketSmoke') rocketSmoke! : ElementRef;
  @ViewChild('rocket') rocket! : ElementRef;
  @HostListener('document:mousemove', ['$event'])
  handleMousemove(event: MouseEvent) {
   
    var xClouds = - (event.pageX - ( window.innerWidth  - ( 1920 * 2.6 )) ) / 20;
    var yClouds = + (event.pageY - ( window.innerHeight + ( 485 * 5.4 ) ) ) / 20;
    this.clouds.nativeElement.setAttribute('style', `left: ${xClouds}px; bottom:  ${yClouds}px`);

    var xRocketSmoke = - (event.pageX - ( window.innerWidth * 2.6 ) ) / 20;
    var yRocketSmoke = - (event.pageY - ( window.innerHeight - ( 10 * 5 ) ) )/ 20;
    this.rocketSmoke.nativeElement.setAttribute('style', `right: ${xRocketSmoke}px; top:  ${yRocketSmoke}px`);


    var xrocket = (event.pageX - ( window.innerWidth * 0.3) ) / 20;
    var yrocket = - (event.pageY - ( window.innerHeight - ( 100 * 9 ) ) )/ 20;
    this.rocket.nativeElement.setAttribute('style', `left: ${xrocket}px; top:  ${yrocket}px`);
    
  }
  objectKeys = Object.keys;
  title = 'Welcome';
  logo = '/assets/icons/ms-icon-144x144.png';
  name='Vinicius Gomes';
  contacts = {
    phone: '+34 658 021 441',
    whatsapp: '+34 658 021 441',
    email: 'viniciusllgomes@gmail.com'
  };
    
}
