import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {
  @Output() selectedRowsChange: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() selectedHeaderChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() editClicked: EventEmitter<any> = new EventEmitter<any>();

  @Input() data: any[];
  @Input() dataProperties: string[];
  @Input() displayColumns: string[];

  @Input() selectedHeader: string;
  @Input() selectedRows: number[];
  constructor() { }

  ngOnInit(): void {
  }
  onSelectedRowChange(selectedItem: any) {
    if (this.selectedRows) {
      this.selectedRows = _.xorBy(this.selectedRows, [selectedItem], this.dataProperties[0]);
      this.selectedRowsChange.emit(this.selectedRows);
    }

    console.log(this.selectedRows);
  }
  onEdit(item: any, $event) {
    $event.stopPropagation();
    this.editClicked.emit(item);
  }
  onHeaderClicked(headerName: string) {
    this.selectedHeader = headerName;
    this.selectedHeaderChange.emit(headerName);
  }
}