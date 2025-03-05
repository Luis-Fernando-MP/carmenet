import { StateCreator, create } from 'zustand'

import { wines } from './wines'

interface IUseWineStoreStore {
  wineId: keyof typeof wines
  setWineId: (id: keyof typeof wines) => void
}

const state: StateCreator<IUseWineStoreStore> = set => ({
  wineId: 'Buttery chardonnay',
  setWineId: id => set({ wineId: id })
})

const UseWineStoreStore = create(state)

export default UseWineStoreStore
