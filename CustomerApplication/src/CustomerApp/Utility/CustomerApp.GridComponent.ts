import {Component,Input,Output,EventEmitter}from '@angular/core';


@Component({
    selector:"Grid-UI",
    templateUrl:"./CustomerApp.Grid.html"
})
export class GridComponent
{
    gridColumns:Array<any>=new Array<any>();
    gridData:Array<any>=new Array<any>();
    @Input("grid-columns")
     set setGridColumns(_gridColumns:Array<any>)
        {
        this.gridColumns=_gridColumns;
        }
    @Input("grid-data")
        set setGridData(_gridData:Array<any>)
        {
        this.gridData=_gridData;
        }
        @Output("grid-selected")
     eventemitter:EventEmitter<any>=new EventEmitter<any>();
        SelectGrid(_Selected:any)
        {
          this.eventemitter.emit(_Selected);
        }
}