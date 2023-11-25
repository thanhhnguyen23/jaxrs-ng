import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Operation, OperationTypes } from '../schema/operation.schema';
import { ComputeService } from './service/compute.service';

@Component({
  selector: 'app-compute',
  standalone: true,
  imports: [CommonModule, FormsModule, PrimengModule],
  templateUrl: './compute.component.html',
  styleUrl: './compute.component.scss',
})
export class ComputeComponent implements OnInit {
  public responseData!: string;
  public postData!: string;
  public operation!: Operation;
  public operations!: SelectItem[];

  constructor(private computeService: ComputeService) {
    this.operations = computeService.operationTypes;
  }

  ngOnInit(): void {
    this.operation = new Operation();
    this.operation.operation = OperationTypes.ADD;
  }
  doCompute($event: MouseEvent) {
    this.postData;
    this.responseData;

    this.operation.result;
    this.computeService
      .doCompute(this.operation)
      .subscribe((data: Operation) => {
        this.postData = JSON.stringify(this.operation, null, 4);
        this.operation.result = data.result;
        this.responseData = JSON.stringify(data, null, 4);
      });
  }
}
