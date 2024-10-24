import { create } from 'zustand'

export const useAudio = create((set, get) => ({
  isActive: true,
  handleToggle: () => {
    const currentState = get()

    set({ isActive: !currentState.isActive })
  }
}
))
