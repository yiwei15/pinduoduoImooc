import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {
  @HostBinding('style.grid-area') area = 'title';
  @HostBinding('style.font-size') font = '0.6rem';
  @Input('appGridItemTitle')
  public get fontSize(): string {
    return this.font;
  }

  public set fontSize(value: string) {
    this.font = value;
  }
}
