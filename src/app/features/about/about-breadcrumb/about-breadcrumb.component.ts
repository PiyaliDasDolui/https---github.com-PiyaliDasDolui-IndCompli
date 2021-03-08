import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuServiceService } from '../../../services/menu-service.service';


@Component({
  selector: 'app-about-breadcrumb',
  templateUrl: './about-breadcrumb.component.html',
  styleUrls: ['./about-breadcrumb.component.css']
})
export class AboutBreadcrumbComponent implements OnInit {

  name: string;
  menu: Array<any> = [];
  breadCrumbList: Array<any> = [];
  isBreadcrumbToShow = true;
  constructor(private _router: Router, private menuService: MenuServiceService){
    console.log(_router.url);
    // // _router.events.subscribe(e => {
    //   console.log(e);
    // })

  }

  ngOnInit() {
    debugger;
    this.menu = this.menuService.getMenu();
    this.listenRouting1();
    console.log(this.breadCrumbList.length);
  }

  listenRouting1() {
    let routerUrl: string,
        routerList: Array<any>,
        target: any;
        debugger;
        routerUrl = this._router.url;
        if(routerUrl && typeof routerUrl === 'string'){
          this.breadCrumbList.length = 0;
          routerList = routerUrl.slice(1).split('/');

          routerList.forEach((router,index) => {
                    this.breadCrumbList.push({
                      name: router,
                      path: routerUrl
                    });
                });
        }

        // this._router.events.subscribe((router: any) =>{
        //   debugger;
        //   routerUrl = router.urlAfterRedirects;
        //   if(routerUrl && typeof routerUrl === 'string'){
        //     //target = this.menu;
        //     this.breadCrumbList.length = 0;

        //     routerList = routerUrl.slice(1).split('/');
        //     routerList.forEach((router,index) => {
        //         //target = target.find(page => page.path.slice(2) === router);

        //         this.breadCrumbList.push({
        //           name: router,
        //           // 第二層開始路由要加上前一層的routing, 用相對位置會造成routing錯誤
        //           path: ""
        //         });

        //         // 下一層要比對的目標是這一層指定的子頁面
        //         if (index+1 !== routerList.length) {
        //           target = target.children;
        //         }
        //     });


        //   }
        // });
  }
}
