import { ComponentRef } from '@angular/core';
import { HeaderComponent, HeaderIconItem, HeaderMenuItem } from '../../../../components/header/header.component';
import { ContentFeature } from '../../../../shared/feature/content.feature';

export class HeaderContent implements ContentFeature {

    constructor(private headerComponentRef: ComponentRef<HeaderComponent>) { }

    populate(): void {

        this.headerComponentRef.setInput('title', 'Lucas Yuzo');

        const headerMenuList: HeaderMenuItem[] = [
            {
                label: "Sobre",
                click: () => {
                    console.log("sobre");
                }
            }
        ];
        this.headerComponentRef.setInput('headerMenuList', headerMenuList);

        const headerIconList: HeaderIconItem[] = [
            {
                source: "github-logo.svg",
                click: () => {
                    console.log("github");
                }
            },
            {
                source: "linkedin-logo.svg",
                click: () => {
                    console.log("linkedin");
                }
            }
        ];
        this.headerComponentRef.setInput("headerIconList", headerIconList);
    }

}
