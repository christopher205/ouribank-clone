import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private render : Renderer2) {}

  title = 'ouribank-clone';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = document.documentElement.scrollTop || document.body.scrollTop;
    const navEL = document.querySelector('#nav');
    if (offset > 100) {
      this.render.addClass(navEL, 'bgheader');
    } else {
      this.render.removeClass(navEL, 'bgheader');
    }
  }


}
