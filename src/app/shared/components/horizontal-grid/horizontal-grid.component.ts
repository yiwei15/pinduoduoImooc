import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  private _username = '';
  @Output() usernameChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  /**
   * get / set 是属性访问限定符，如果我们对于属性的读和写有一些逻辑操作
   * 可以利用 get / set 进行处理
   */
  @Input()
  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
    this.usernameChange.emit(this._username);
  }
}
