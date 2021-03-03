import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  getMenu(): Array<any> {
    const menu = [
      { name: 'home', path: './home', children: [] },
      {
        name: 'about',
        path: './about',
        children: [
          {
            name: 'firstChild',
            path: './firstChild',
            children: [
              {
                name: 'child1',
                path: './child1'
              },
              {
                name: 'child2',
                path: './child2'
              },
              {
                name: 'child3',
                path: './child3'
              },
              {
                name: 'child4',
                path: './child4'
              }
            ]
          }
        ]
      },
    ];

    return menu;
  }
}
