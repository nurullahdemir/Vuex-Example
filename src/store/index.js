import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    name: 'nurullah',
    surname: 'demir'
};

const getters = {
    getNameSurnameWith(s) {
        return `${s.name} ${s.surname}`
    }
};

const mutations = {
    setNameSurname(state, value) {
        state.name = value.name
        state.surname = value.surname
    }
};

const actions = {
    updateNameSurname({commit}, name) {
        //datalarımızı burdan çekebiliriz.
        setTimeout(() => {
            commit('setNameSurname', name)
        }, 3000);
    }
};


const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

export default store;