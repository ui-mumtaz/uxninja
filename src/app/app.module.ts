import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { GalleryItems } from './gallery/gallery';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', children:[
    { path: '', component: ProductsComponent},
    { path: 'laptop', component: LaptopComponent},
    { path: 'mobile', component: MobileComponent},
    { path: 'television', component: TelevisionComponent},
    { path: 'washing-machine', component: WashingMachineComponent}
  ]},
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/:id', component: GalleryItemComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    GalleryComponent,
    LoginComponent,
    GalleryItemComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingMachineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GalleryItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
