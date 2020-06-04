import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import App from "@/App.vue";
import store from '@/store'
import router from '@/router'
import Home from '@/containers/Home.vue'
import DrawerComp from "@/components/common/drawer.comp.vue";
import SearchComp from "@/components/common/search.comp.vue";

describe('App.vue', () => {
  let mainWrapper
  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Quasar);
    mainWrapper = shallowMount(App, {
      Vue,
      router,
      store
    });
  });
  afterEach(() => {
    mainWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(mainWrapper.isVueInstance).toBeTruthy();
  });
  it('it should have a q-page element', () => {
    expect(mainWrapper.html()).toContain("q-layout");
  });

  describe("it should render router view", () => {
    it('it should have a q-page', () => {
      expect(mainWrapper.html()).toContain("q-page");
    });
    it("it should load the Home view by default", () => {
      expect(Home).toBeTruthy();
    });
  });
  describe("it should load DrawerComp component", () => {
    it("it should have a drawer-comp", () => {
      expect(mainWrapper.html()).toContain("drawer-comp");
    });
    it("it should load the DrawerComp", () => {
      expect(DrawerComp).toBeTruthy();
    });
  });
  describe("it should load SearchComp component", () => {
    it("it should have a search-comp", () => {
      expect(mainWrapper.html()).toContain("search-comp");
    });
    it("it should load the SearchComp", () => {
      expect(SearchComp).toBeTruthy();
    });
  });
  it('method testing', () => {
    mainWrapper.vm.getLeftDrawer()
    expect(store.state.config.leftDrawerOpen).toBe(false)
  })
})
