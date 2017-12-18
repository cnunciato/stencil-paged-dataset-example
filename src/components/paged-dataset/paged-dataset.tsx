import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'cdn-paged-dataset',
  styleUrl: 'paged-dataset.scss',
  scoped: true
})
export class PagedDataset {
  page: number = 0;

  @State() items: any[];
  @State() itemCount = 0;
  @State() pageSize: number = 10;

  @Listen('pageChanged')
  handleSelected(event: CustomEvent) {
    this.page = event.detail
    this.fetch();
  }

  @Listen('sizeChanged')
  handleSizeChanged(event: CustomEvent) {
    this.page = 0;
    this.pageSize = event.detail;
    this.fetch();
  }

  componentWillLoad() {
    this.fetch();
  }

  render() {
    if (this.items) {
      return (
        <div>
          <div class="container">
            <table>
              <thead>
                <th>ID</th>
                <th>Value</th>
              </thead>
              <tbody>
                {
                  this.items.map(item =>
                    <tr>
                      <td>{item.id + 1}</td>
                      <td>{item.value}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
          <cdn-paginator page={this.page} pageSize={this.pageSize} pageSizeOptions={[10, 20, 50]} itemCount={this.itemCount}></cdn-paginator>
        </div>
      );
    }
  }

  private fetch() {

    // In practice we'd probably dispatch a Redux action for this, but you get the idea.

    const start = this.page * this.pageSize;
    const end = this.page * this.pageSize + this.pageSize;

    fetch(`/assets/data.json?start=${start}&end=${end}`)
      .then(response => {
        response.json().then(result => {
          this.itemCount = result.total;

          // This is just me faking out a paged result, since my mock dataset is static JSON.
          this.items = result.data.slice(start, end);
        });
      });
  }
}
