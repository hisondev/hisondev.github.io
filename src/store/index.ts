import { createStore } from 'vuex'

export type Lang = 'ko' | 'en'

export interface RootState {
  lang: Lang
  darkMode: boolean
}

function readInitialLang(): Lang {
  const v = localStorage.getItem('lang')
  return (v === 'en' || v === 'ko') ? v : 'en'
}

function readInitialDarkMode(): boolean {
  const v = localStorage.getItem('darkMode')
  if (v === 'true' || v === 'false') return v === 'true'
  return false
}

export const store = createStore<RootState>({
  state: {
    lang: readInitialLang(),
    darkMode: readInitialDarkMode(),
  },
  getters: {
    isKo: (s) => s.lang === 'ko',
    isDark: (s) => s.darkMode,
  },
  mutations: {
    setLang(state, v: Lang) {
      state.lang = v
      localStorage.setItem('lang', v)
    },
    setDarkMode(state, value: boolean) {
      state.darkMode = value
      localStorage.setItem('darkMode', String(value))
    },
  },
  actions: {
    setLang({ commit }, v: Lang) {
      commit('setLang', v)
    },
    setDarkMode({ commit }, value: boolean) {
      commit('setDarkMode', value)
    },
  },
})

export default store