import { StateCreator, create } from 'zustand'

interface IUseThemeStoreStore {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

const state: StateCreator<IUseThemeStoreStore> = set => ({
  theme: 'light',
  setTheme: theme => set({ theme })
})

const UseThemeStoreStore = create(state)

export default UseThemeStoreStore
