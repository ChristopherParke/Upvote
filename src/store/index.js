import { createStore } from 'vuex'

import upvote from '../modules/upvote'

const store = createStore({
    modules: {
        upvote,
    },
})

export default store;