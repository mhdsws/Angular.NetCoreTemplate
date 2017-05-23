import { Component } from '@angular/core'

@Component({
    selector: 'navbar',
    template: `
        <md-toolbar color="primary">
            <button md-button routerLink="/">Message Board</button>
            <button md-button routerLink="/messages">Messages List</button>
        </md-toolbar>
    `
})
export class NavComponent {
    constructor() {}   
}