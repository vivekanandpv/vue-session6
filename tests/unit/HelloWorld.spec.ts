import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });

  it('increments the counter when the button is clicked', async () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    wrapper.find('[data-testid="increment-button"]').trigger('click');
    await wrapper.vm.$nextTick();

    const outputText = wrapper.find('[data-testid="output-p"]').element
      .textContent;

    expect(outputText).to.equal('Counter: 1');
  });
});
