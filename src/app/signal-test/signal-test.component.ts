import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signal-test',
  standalone: true,
  imports: [],
  templateUrl: './signal-test.component.html',
  styleUrl: './signal-test.component.scss'
})
export class SignalTestComponent {
  data$: Observable<any> | undefined;
  http = inject(HttpClient);
  searchSig = signal<string>('');

  //I want to filter data by search user name
  fullData$ = toObservable(this.searchSig).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(() =>
      this.getData().pipe(
        map(users => users.filter((user: { username: string; }) => this.searchSig().includes(user.username)))
      ))
  );

  //I wants to load all available users for searching
  availabeUsers$ =  this.getData();

  fullDataSign = toSignal(this.fullData$);
  fetchUserDataSign = toSignal(this.availabeUsers$);


  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value);
  }

  //To handle multiple calls calling every time endpoint will provide high latency to avoid that used share Replay
  getData(): Observable<any> {
    if (!this.data$) {
      this.data$ = this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
        shareReplay(1) // Share and replay emitted values
      );
    }
    return this.data$;
  }
}
