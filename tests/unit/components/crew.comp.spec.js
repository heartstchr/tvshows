import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import CrewComp from "@/components/crew.comp.vue";

describe('crew.comp.vue', () => {
    let crewCompWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        crewCompWrapper = shallowMount(CrewComp, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        crewCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(crewCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a card element', () => {
        expect(crewCompWrapper.find("card")).toMatchObject({"selector": "card"});
    });

    describe("it should render router view", () => {
        it('it should have a card', () => {
            expect(crewCompWrapper.find("card")).toMatchObject({"selector": "card"});
        });
        it("it should load the Home view by default", () => {
            expect(CrewComp).toBeTruthy();
        });
    });
})
