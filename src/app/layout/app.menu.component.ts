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
                        label: 'Añadir comida',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/utilities/icons'],
                    },
                    {
                        label: 'Listado hoy',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/app/utilities/icons'],
                    },
                    {
                        label: 'Buscar por día',
                        icon: 'pi pi-fw pi-calendar-plus',
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
                        icon: 'pi pi-fw pi-comments',
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
                        icon: 'pi pi-fw pi-desktop',
                        items: [
                            {
                                label: 'Modo claro',
                                icon: 'pi pi-sun',
                                command: () => this.changeTheme('lara-light-indigo', 'light')
                            },
                            {
                                label: 'Modo oscuro',
                                icon: 'pi pi-moon',
                                command: () => this.changeTheme('arya-blue', 'dark')
                            },
                        ],
                    },
                ],
            },
        ];
    }

    changeTheme(theme: string, colorScheme: string) {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
        this.layoutService.config.colorScheme
        this.replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = theme;
            this.layoutService.config.colorScheme = colorScheme;
            this.layoutService.onConfigUpdate();
        });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }
}
