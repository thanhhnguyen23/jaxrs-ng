import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimengModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  toHello($event: MouseEvent) {
    return this.router.navigate(['say-hello']);
  }
  toCompute($event: MouseEvent) {
    return this.router.navigate(['compute']);
  }
  title = 'JAX-RS with Angular';
}
