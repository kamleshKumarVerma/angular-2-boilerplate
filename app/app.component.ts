import {Component} from '@angular/core';
import {RouterOutlet, RouteConfig, RouteDefinition} from '@angular/router-deprecated';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    directives: [RouterOutlet, NavbarComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
    public appRoutes: RouteDefinition[];

    constructor() {
        this.appRoutes = APP_ROUTES;
    }
}
