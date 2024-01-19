import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ChartService } from '../../service/chart.service';

@Component({
  selector: 'app-setting-dialog',
  templateUrl: './setting-dialog.component.html',
  styleUrls: ['./setting-dialog.component.scss']
})
export class SettingDialogComponent {

  labelColorOptions: any[] = [
    {name:'label-theme1',color:'#6b5b95'},
    {name:'label-theme2',color:'#d64161'},
    {name:'label-theme3',color:'#034f84'},
    {name:'label-theme4',color:'#77a8a8'}
  ];

  labelAlignMentArray : string[] = [
    "left",
    "right",
    "top",
    "bottom"
  ]

  tools:any = {
    download: false,
    selection: false,
    zoom: false,
    zoomin: false,
    zoomout: false,
    pan: false,
    reset: false,
  }

  selectedLabelColor = '';
  selectedLabelAlignment = 'left';
  constructor(public dialogRef: MatDialogRef<SettingDialogComponent>,private chartService: ChartService ){
      this.tools = this.chartService.toolBarOptions;
      this.selectedLabelColor = this.chartService.labelColor;
      this.selectedLabelAlignment = this.chartService.legendAlign;
  }

  saveSettings(){
    this.chartService.labelColor = this.selectedLabelColor;
    this.chartService.toolBarOptions = this.tools;
    this.chartService.legendAlign = this.selectedLabelAlignment;
    this.dialogRef.close('save');
  }

 
}
