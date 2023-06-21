import { AfterViewInit, Component, OnInit } from '@angular/core';
declare function iniciar_plugins(): any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    setTimeout(() => {
      iniciar_plugins();
     this.loadScripts();
      
    }, 500)

  }


  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/libs/@frostui/tailwindcss/frostui.js',       
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('body')[0].appendChild(node);
    }

  }
}