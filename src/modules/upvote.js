export default {
    state: () => ({
        groups: [
            { id: 1, count: 3, selected: 1 },
            { id: 2, count: 2, selected: 0 },
            { id: 3, count: 5, selected: 1 },
        ],
    }),
    getters: {},
    mutations: {
        ADD_ICON(state, payload) {
            state.groups[payload-1].count++;
        },
        TOGGLE_SELECTED(state, payload) {
            if(state.groups[payload-1].selected === 1) {
                state.groups[payload-1].selected = 0
            } else {
                state.groups[payload-1].selected = 1
            }           
        }
    },
    actions: {
        addIcon({commit}, id) {
            commit("ADD_ICON", id)
        },
        toggleSelected({commit}, id) {
            commit("TOGGLE_SELECTED", id);
        }
    },
}
