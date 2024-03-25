import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const storeCallback = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  // logout: () => set(() => ({ user: null })),
})

export const useAuthStore = create(
  persist(storeCallback, {
    name: 'auth-storage',
    storage: createJSONStorage(() => localStorage),
  })
)