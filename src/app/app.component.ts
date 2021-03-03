import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuServiceService } from './services/menu-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IndCompli';
  name: string;
  menu: Array<any> = [];
  breadCrumbList: Array<any> = [];

  constructor(private _router: Router, private menuService: MenuServiceService){}

  ngOnInit() {
    this.menu = this.menuService.getMenu();
    this.listenRouting();
  }

  listenRouting() {
    let routerUrl: string,
        routerList: Array<any>,
        target: any;

        this._router.events.subscribe((router: any) =>{
          routerUrl = router.urlAfterRedirects;
          if(routerUrl && typeof routerUrl === 'string'){
            target = this.menu;
            this.breadCrumbList.length = 0;

            routerList = routerUrl.slice(1).split('/');
            routerList.forEach((router,index) => {
                target = target.find(page => page.path.slice(2) === router);

                this.breadCrumbList.push({
                  name: target.name,
                  // 第二層開始路由要加上前一層的routing, 用相對位置會造成routing錯誤
                  path: (index === 0) ? target.path : `${this.breadCrumbList[index-1].path}/${target.path.slice(2)}`
                });

                // 下一層要比對的目標是這一層指定的子頁面
                if (index+1 !== routerList.length) {
                  target = target.children;
                }
            });


          }
        });
  }
}
