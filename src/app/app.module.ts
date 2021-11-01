import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

//w imports znajdują się zaimportowane klasy z poszczególnych plików module.ts dla odpowiednich komponentów
//providers: - nie należy na to patrzeć (przestarzały element)
//bootstrap to nie css, oznacza jaki moduł zostanie wywołany jako pierwszy na głównej stronie zaraz po jej otwarciu
//poniższe opisy pochodzą z wideo 103:
//kolejność importów w imports: [] ma znaczenie dla kolejności ich odczytywania przez angular, który patrzy na routingi (path) w app-routing.module.ts (c.d niżej)
//i jeśli AppRoutingModule byłoby pierwsze w imports, to angular pobrałby najpierw ścieżkę path: '', a po kolejnym kliknięciu w dowolny link pobrałby path: **, przez co nie wyświetlałby poprawnej zawartości komponentu związanego z danym linkiem, a jedynie zawartośc komponentu not-found (teraz robi to na końcu)

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
