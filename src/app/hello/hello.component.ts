import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { HelloService } from './service/hello.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule, FormsModule, PrimengModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
})
export class HelloComponent {
  public name!: string;
  public greeting!: string;

  constructor(private helloService: HelloService) {}

  sayHello($event: MouseEvent) {
    this.helloService.sayHello(this.name).subscribe((data: any) => {
      this.greeting = data;
    });
  }
}
