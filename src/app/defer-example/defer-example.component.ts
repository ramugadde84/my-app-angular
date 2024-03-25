import { Component } from '@angular/core';
import { RecommendedMoviesComponent } from '../recommended-movies/recommended-movies.component';

@Component({
  selector: 'app-defer-example',
  standalone: true,
  imports: [ RecommendedMoviesComponent],
  templateUrl: './defer-example.component.html',
  styleUrl: './defer-example.component.scss'
})
export class DeferExampleComponent {
  public load = false;
}
