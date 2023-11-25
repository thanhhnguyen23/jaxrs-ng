import { Injectable } from '@angular/core';
import { Operation, OperationTypes } from '../../schema/operation.schema';
import { Observable } from 'rxjs/internal/Observable';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ComputeService {
  operationTypes: SelectItem[] = [];

  constructor(private http: HttpClient) {
    this.operationTypes = [
      { label: OperationTypes.ADD, value: OperationTypes.ADD },
      { label: OperationTypes.SUBTRACT, value: OperationTypes.SUBTRACT },
      { label: OperationTypes.MULTIPLY, value: OperationTypes.MULTIPLY },
      { label: OperationTypes.DIVIDE, value: OperationTypes.DIVIDE },
    ];
  }

  doCompute(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>('jaxrs-ng-web/api/v1/compute', operation);
  }
}
