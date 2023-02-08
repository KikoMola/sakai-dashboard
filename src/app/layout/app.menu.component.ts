import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss'],
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/app/dashboard'],
                    },
                ],
            },
            {
                label: 'Ejercicios',
                items: [
                    {
                        label: 'Form Layout',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/app/uikit/formlayout'],
                    },
                ],
            },
            {
                label: 'Comidas',
                items: [
                    {
                        label: 'PrimeIcons',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/app/utilities/icons'],
                    },
                ],
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/'],
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                            },
                        ],
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/app/pages/crud'],
                    },
                ],
            },
            {
                label: 'Ajustes',
                items: [
                    {
                        label: 'Idioma',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Español',
                                icon: 'icon-es',
                            },
                            {
                                label: 'Inglés',
                                icon: 'icon-en',
                            },
                            {
                                label: 'Francés',
                                icon: 'icon-fr',
                            },
                        ],
                    },
                    {
                        label: 'Tema',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Modo claro',
                                icon: 'pi pi-sun',
                            },
                            {
                                label: 'Modo oscuro',
                                icon: 'pi pi-moon',
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
