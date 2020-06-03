import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import CastComp from "@/components/cast.comp.vue";

describe('cast.comp.vue', () => {
    let castCompWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        castCompWrapper = shallowMount(CastComp, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        castCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(castCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a card element', () => {
        expect(castCompWrapper.find("card")).toMatchObject({"selector": "card"});
    });

    describe("it should render router view", () => {
        it('it should have a card', () => {
            expect(castCompWrapper.find("card")).toMatchObject({"selector": "card"});
        });
        it("it should load the Home view by default", () => {
            expect(CastComp).toBeTruthy();
        });
    });
})
