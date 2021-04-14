import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


//Nebular Imports
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbUserModule } from '@nebular/theme';
import { NbInputModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbWindowModule } from '@nebular/theme';
import { NbCheckboxModule } from '@nebular/theme';
import { NbToastrModule } from '@nebular/theme';
import { NbDialogModule } from '@nebular/theme';
import { NbAlertModule} from '@nebular/theme';
import { NbProgressBarModule } from '@nebular/theme';
import { NbSpinnerModule } from '@nebular/theme';
import { NbSearchModule } from '@nebular/theme';
import { NbListModule } from '@nebular/theme';
import { NbRadioModule} from '@nebular/theme';


//Firebase
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//components
import { RegisterComponent } from './components/register/register.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ChatComponent } from './components/chat/chat.component';
import { GamepanelComponent } from './components/gamepanel/gamepanel.component';
import { CharsheetComponent } from './components/charsheet/charsheet.component';
import { DiceRollerComponent } from './components/dice-roller/dice-roller.component';
import { SpellbookComponent } from './components/open5e/spells/spellbook/spellbook.component';
import { MonstersComponent } from './components/open5e/monsters/monsters.component';
import { BackgroundsComponent } from './components/open5e/backgrounds/backgrounds.component';
import { SectionsComponent } from './components/open5e/sections/sections.component';
import { FeatsComponent } from './components/open5e/feats/feats.component';
import { ConditionsComponent } from './components/open5e/conditions/conditions.component';
import { WeaponsComponent } from './components/open5e/weapons/weapons.component';
import { MagicitemsComponent } from './components/open5e/magicitems/magicitems.component';
import { ClassesComponent } from './components/open5e/classes/classes.component';
import { RacesComponent } from './components/open5e/races/races.component';
import { PlanesComponent } from './components/open5e/planes/planes.component';

import { GameMainComponent } from './components/game-main/game-main.component';
import { DropzoneDirective } from './components/directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { ViewUploadsComponent } from './components/view-uploads/view-uploads.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SearchPageComponent } from './components/open5e/search-page/search-page.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { ViewCharactersComponent } from './components/view-characters/view-characters.component';
import { CreatepartyComponent } from './components/createparty/createparty.component';
import { JoinPartyComponent } from './components/join-party/join-party.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { GameSessionComponent } from './components/game-session/game-session.component';
import { GameSessionDmviewComponent } from './components/game-session-dmview/game-session-dmview.component';
import { ViewFilesComponent } from './components/view-files/view-files.component';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GameMainComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    ViewUploadsComponent,
    ProfileComponent,
    DialogComponent,
    HomeComponent,
    CarouselComponent,
    ChatComponent,
    GamepanelComponent,
    DiceRollerComponent,
    CharsheetComponent,
    SpellbookComponent,
    MonstersComponent,
    BackgroundsComponent,
    SectionsComponent,
    FeatsComponent,
    ConditionsComponent,
    WeaponsComponent,
    MagicitemsComponent,
    ClassesComponent,
    RacesComponent,
    PlanesComponent,
    SpinnerComponent,
    SearchPageComponent,
    UserStatusComponent,
    ViewCharactersComponent,
    CreatepartyComponent,
    JoinPartyComponent,
    SearchResultsComponent,
    GameSessionComponent,
    GameSessionDmviewComponent,
    ViewFilesComponent,
    ListCharactersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbMenuModule.forRoot(),
    NbWindowModule.forRoot(),
    NbUserModule,
    NbSearchModule,
    NbInputModule,
    NbSpinnerModule,
    NbAlertModule,
    NbProgressBarModule,
    NbListModule,
    NbRadioModule,
    NbCheckboxModule,
    NbCardModule,
    NbWindowModule,
    NbCheckboxModule,
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbToastrModule.forRoot(),
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
