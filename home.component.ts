import {Component} from '@angular/core';
@Component({
 selector:`app-home`,
 template:`<h2>Amazon Home</h2>
<div id="offer">{{msg}}</div> 
<p> this is our first component</p> 
 `,
 styles:['h2{text-align:center;color:darkcyan}', '#offer{border:2px solid darkcyan;border-radius:20px; box-shadow:2px 3px 4px darkcyan}']
})

export class HomeComponent{
    public msg = '02-Aug-2020 to 04-Aug-2020 Monsoon Sale 70%off';
}