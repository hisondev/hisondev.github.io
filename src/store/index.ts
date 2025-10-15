import { createStore } from 'vuex'

export type Lang = 'ko' | 'en'

export interface RootState {
  lang: Lang
}

function readInitialLang(): Lang {
  const v = localStorage.getItem('lang')
  console.log('v', v)
  return (v === 'en' || v === 'ko') ? v : 'ko'
}

export const store = createStore<RootState>({
  state: {
    lang: readInitialLang(),
  },
  getters: {
    isKo: (s) => s.lang === 'ko',
  },
  mutations: {
    setLang(state, v: Lang) {
      state.lang = v
      localStorage.setItem('lang', v)
    },
  },
  actions: {
    setLang({ commit }, v: Lang) {
      commit('setLang', v)
    },
  },
})

export default store