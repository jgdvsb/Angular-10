import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent{
  public product = {
    Name:`Samsung TV`,
    Price:45000.55
  };
  public disableButton=false;//false
}