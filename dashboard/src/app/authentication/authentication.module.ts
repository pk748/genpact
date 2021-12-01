import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './login/login.component';
import { NzDividerModule, NzSpinModule, NzMessageServiceModule, NzIconModule, NzSelectModule, NzEmptyModule, NzTableModule, NzProgressModule, NzModalModule, NzRadioModule, NzInputNumberModule, NzPageHeaderModule, NzSwitchModule, NzPopoverModule, NzDescriptionsModule, NzBadgeModule, NzBreadCrumbModule } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';

const antdModule = [
    NzAvatarModule,
    NzMenuModule,
    NzDividerModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzAlertModule,
    NzSpinModule,
    NzTableModule,
    NzMessageServiceModule,
    NzIconModule,
    NzSelectModule,
    NzEmptyModule,
    NzProgressModule,
    NzModalModule,
    NzCheckboxModule,
    NzFormModule,
    NzRadioModule,
    NzInputNumberModule,
    NzPageHeaderModule,
    NzSwitchModule,
    NzPopoverModule,
    NzDescriptionsModule,
    NzBadgeModule,
    NzSelectModule,
    NzBreadCrumbModule,
    NzCommentModule
]


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        FormsModule,
        ...antdModule
    ],
    declarations: [
        LoginComponent,
        LandingPageComponent,
    ],
    providers: []
})

export class AuthenticationModule {
    constructor(public router: Router) {

    }
}
