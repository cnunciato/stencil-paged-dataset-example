import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'cdn-paginator',
  styleUrl: 'paginator.scss',
  scoped: true
})
export class Paginator {
  @Prop() page: number = 0;
  @Prop() pageSize: number = 10;
  @Prop() pageSizeOptions: number[] = [];
  @Prop() itemCount: number;

  @Event() pageChanged: EventEmitter;
  @Event() sizeChanged: EventEmitter;

  handleSelect(event: UIEvent, index: number) {
    event.preventDefault;
    this.pageChanged.emit(index);
  }

  handlePageSizeChange(event) {
    this.sizeChanged.emit(Number(event.currentTarget.value));
  }

  render() {

    if (this.itemCount) {
      let pages = [];
      const start = this.page * this.pageSize + 1;
      const end = this.page * this.pageSize + this.pageSize;

      for (let i = 0; i < this.itemCount / this.pageSize; i++) {
        pages.push(i);
      }

      return (
        <div>
          <span class="pages">
            {
              pages.map(index =>
                <a class={this.page === index ? 'active' : ''} onClick={ event => this.handleSelect(event, index) }>{ index + 1 }</a>
              )
            }
          </span>
          <span class="counts">
            {start} - {this.page === pages[pages.length - 1] ? this.itemCount : end} of {this.itemCount}
          </span>
          {
            this.pageSizeOptions.length
              ? <span class="size">
                  <select onChange={ event => this.handlePageSizeChange(event)}>
                    {
                      this.pageSizeOptions.map(n =>
                        <option>{n}</option>
                      )
                    }
                  </select> per page
                </span>
              : <span></span>
          }
        </div>
      );
    }
  }
}
