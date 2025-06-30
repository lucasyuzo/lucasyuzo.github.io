import { Component, input, InputSignal } from '@angular/core';
import { BaseComponent } from '../base-component/base.component';

export interface HeaderMenuItem {
    label: string;
    click: () => void;
}

export interface HeaderIconItem {
    source: string;
    click: () => void;
}

@Component({
    selector: "header-component",
    template: `
        <header class="flex justify-between px-6 py-4">
            <h1 class="theme-primary-color">{{ title() || "" }}</h1>
            <div class="flex gap-4">
                @for (item of headerMenuList(); track item.label) {
                    <span
                        class="theme-primary-color"
                        (click)="item.click()"
                    >{{ item.label }}</span>
                }
                @for (item of headerIconList(); track item.source) {
                    <img
                        [src]="item.source"
                        alt=""
                        (click)="item.click()"
                    >
                }
            </div>
        </header>
    `
})
export class HeaderComponent extends BaseComponent {

    readonly title: InputSignal<string> = input<string>("");
    readonly headerMenuList = input<HeaderMenuItem[]>([]);
    readonly headerIconList = input<HeaderIconItem[]>([]);

}
