import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { PeriodicElement } from './app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input({ required: true })
  set elementData(data: PeriodicElement[]) {
    this.dataSource.data = data ?? [];
  }

  @ContentChild('dynamic')
  readonly dynamicRef!: TemplateRef<any>;

  @ContentChild('input')
  readonly inputRef!: TemplateRef<any>;

  readonly displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'dynamic',
    'input',
  ];

  readonly dataSource = new MatTableDataSource<PeriodicElement>([]);
}
