import { Component } from '@angular/core';
import { StoreModule } from './store/store.module';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app',
  standalone: true,
  imports: [StoreModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}
