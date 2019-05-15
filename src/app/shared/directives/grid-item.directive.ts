import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

/**
 * 指令可以理解为没有模版的组件，它需要一个宿主元素。
 * 推荐使用方括号 [] 指定 Selector，虽然这个不是必须的。
 */
@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
  /**
   * HostBinding 绑定宿主元素的样式或属性
   * 可以绑定的有 style.xxx 或者 class.xxx 或者 attr.xxx
   */
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';
}
