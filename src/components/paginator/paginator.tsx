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

  private pageCount: number = 0;

  private handlePrevious(event) {
    if (this.page !== 0) {
      this.handleSelect(event, this.page - 1)
    }
  }

  private handleNext(event) {
    if (this.page !== this.pageCount - 1) {
      this.handleSelect(event, this.page + 1);
    }
  }

  handleSelect(event: UIEvent, index: number) {
    event.preventDefault();
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

      this.pageCount = pages.length;

      return (
        <div>
          <span class="pages">
            <span>
              <a
                class={ this.page === 0 ? 'disabled' : ''}
                onClick={ event => this.handlePrevious(event)}>
                Previous
              </a>
            </span>
            <span>
              {
                pages.map(index =>
                  <a
                    class={this.page === index ? 'active' : ''}
                    onClick={ event => this.handleSelect(event, index) }>
                    { index + 1 }
                  </a>
                )
              }
            </span>
            <span>
              <a
                class={ this.page === pages.length - 1 ? 'disabled' : ''}
                onClick={ event => this.handleNext(event) }>
                Next
              </a>
            </span>
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
