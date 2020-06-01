import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Quasar from "quasar";
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  let homeWrapper;
  // const router = new VueRouter({ routes });

  beforeEach(() => {
    Vue.use(Quasar);
    homeWrapper = shallowMount(Home, {
      Vue
    });
  });

  afterEach(() => {
    homeWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(homeWrapper.isVueInstance).toBeTruthy();
  });
  it('it should have a div element with class="container"', () => {
    expect(homeWrapper.html()).toContain("q-page");
  });
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    homeWrapper = shallowMount(Home, {
      propsData: { msg }
    })
    expect(homeWrapper.text()).toMatch(msg)
  })
})
