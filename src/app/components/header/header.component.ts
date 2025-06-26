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
    templateUrl: "./header.component.html",
})
export class HeaderComponent implements BaseComponent {

    readonly title: InputSignal<string> = input<string>("");
    readonly headerMenuList = input<HeaderMenuItem[]>([]);
    readonly headerIconList = input<HeaderIconItem[]>([]);

}
