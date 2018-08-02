import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { WikiComponent } from './views/theme/wiki.component';
import { AppRoutingModule } from './app-routing.module';
import { AddWikiComponent } from './view/add-wiki/add-wiki.component';
import { HomeComponent } from './view/home/home.component';

import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { AdvancedFormsRoutingModule } from './views/forms/advanced-forms/advanced-forms-routing.module';
import { TimepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { SelectModule } from 'ng-select';
import { FormComponent } from './view/form/form.component';
import { CoreUIIconsComponent } from './views/icons/coreui-icons.component';
import { FlagsComponent } from './views/icons/flags.component';
import { SimpleLineIconsComponent } from './views/icons/simple-line-icons.component';
import { FontAwesomeComponent } from './views/icons/font-awesome.component';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { TablesComponent } from './views/tables/tables.component';
import { FileUploadComponent } from './view/file-upload/file-upload.component';
import { AngularFirestoreModule } from '../../node_modules/angularfire2/firestore';
import { AngularFireStorageModule ,AngularFireUploadTask} from '../../node_modules/angularfire2/storage';
import { DropZoneDirective } from './view/drop-zone.directive';
import { FirebaseConfig } from '../environments/firebaseconfig';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import { FileSizePipe } from './file-size.pipe';
import { CustomerAppComponent } from './view/customer-app/customer-app.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebaseConfig),
    AngularFireDatabaseModule,
    TabsModule.forRoot(),
    ChartsModule,
    RouterModule,
    TextMaskModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AngularFirestoreModule,
    AngularFireStorageModule,
   
    AngularFireAuthModule,

    


    SelectModule
    
  ],
  declarations: [
    AppComponent,
    P404Component,
    P500Component,
    LoginComponent,
    TablesComponent,
    CoreUIIconsComponent,
    RegisterComponent,
    WikiComponent,
    FlagsComponent,
    FontAwesomeComponent,
    SimpleLineIconsComponent,
    AddWikiComponent,
    DefaultLayoutComponent,
    HomeComponent,
    FormComponent,
    DropZoneDirective,
    FileSizePipe,
    ButtonsComponent,
    FileUploadComponent,
    CustomerAppComponent,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  FirebaseService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
