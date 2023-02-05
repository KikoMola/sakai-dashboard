import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/app/dashboard'] }
                ]
            },
            {
                label: 'Ejercicios',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/app/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/app/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/app/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/app/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/app/uikit/button'] },
                ]
            },
            {
                label: 'Comidas',
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/app/utilities/icons'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    }
                ]
            },
            {
                label: 'Ajustes',
                items: [
                    {
                        label: 'Idioma', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Español', icon: 'pi pi-fw pi-bookmark',
                            },
                            {
                                label: 'Inglés', icon: 'pi pi-fw pi-bookmark',
                            },
                        ]
                    }
                ]
            },
        ];
    }
}
