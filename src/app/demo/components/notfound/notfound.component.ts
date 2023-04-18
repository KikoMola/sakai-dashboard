import { Component } from '@angular/core';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
})
export class NotfoundComponent {
    imageUrl: string;

    constructor() {
        const imageNumber = Math.floor(Math.random() * 6) + 1;
        this.imageUrl = `assets/img/gatos/${imageNumber}.png`;
        // this.imageUrl = `assets/img/logos/logo1.png`
    }
}
