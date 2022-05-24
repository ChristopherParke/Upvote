export default {
    state: () => ({
        groups: [
            { id: 1, count: 3, status: 1 },
            { id: 2, count: 2, status: 0 },
            { id: 3, count: 5, status: 1 },
        ],
    }),
    getters: {},
    mutations: {
        ADD_GROUP(state, payload) {
            state.groups.push(payload)
        },
        ADD_ICON(state, payload) {
            state.groups[payload-1].count++;
        },
        TOGGLE_STATUS(state, payload) {
            if(state.groups[payload-1].status === 1) {
                state.groups[payload-1].status = 0
            } else {
                state.groups[payload-1].status = 1
            }           
        }
    },
    actions: {
        addGroup({ commit }) {
            let data = {count: 1, status: 0};
            commit('ADD_GROUP', data)
        },
        addIcon({commit}, id) {
            commit("ADD_ICON", id)
        },
        toggleStatus({commit}, id) {
            commit("TOGGLE_STATUS", id);
        }
    },
}
