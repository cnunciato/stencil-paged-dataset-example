import { Component } from '@stencil/core';

@Component({
  tag: 'cdn-home',
  styleUrl: 'home.scss',
  scoped: true
})
export class Home {

  render() {
    return (
      <div>
        <h1>Paged Dataset Example</h1>
        <p>
          The idea with this example is that the <code>paginator</code> component
          is responsible for drawing the page links and dispatching events
          when a page is selected, and interested components can register to
          be notified when that happens. Here, the containing component, <code>paged-dataset</code>,
          retrieves the first page of data, then tells the pagination component
          how many results exist in total, how many to display per page, and which page-size options
          (if any) to expose. When a user interacts with the <code>paginator</code>, it
          dispatches an event, and <code>paged-dataset</code> handles that event by
          dispatching another call to the remote data source to retrieve a new page.
        </p>
        <cdn-paged-dataset></cdn-paged-dataset>
      </div>
    );
  }
}
