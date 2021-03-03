import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { BreadCrumb } from './breadcrumb';

import { distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  buildBreadCrumb(root: ActivatedRoute, url: string = '',
  breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    debugger;
    // If no routeConfig is avalailable we are on the root path
    const lable = root.routeConfig ? root.routeConfig.data['breadcrumb'] : 'Home';
    const path = root.routeConfig ? root.routeConfig.path : '';

    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      lable: lable,
      url: nextUrl
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];

    if(root.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(root.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
  breadcrumb$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => this.buildBreadCrumb(this.activateRoute.root))
  );

  @Input() img: string;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

}
