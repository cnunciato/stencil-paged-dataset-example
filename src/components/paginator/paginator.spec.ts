import { flush, render } from '@stencil/core/testing';
import { Paginator } from './paginator';

describe('Paginator', () => {

  it('should build', () => {
    expect(new Paginator()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;

    beforeEach(async () => {
      element = await render({
        components: [ Paginator ],
        html: '<cdn-paginator page="1" pageSize="10" itemCount="100" pageSizeOptions=></cdn-paginator>'
      });

      await flush(element);
    });

    it('should render the correct number of page links', async () => {
      expect(element.querySelector('.pages a').length).toBe(10);
    });
  });
});
