import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  isMenuModalVisible: boolean;
  openMenuModal: () => void;
  closeMenuModal: () => void;
}

export const useModalStore = create<ModalState>()(
  devtools((set) => ({
    isMenuModalVisible: false,
    openMenuModal: () => set((state) => ({ isMenuModalVisible: true })),
    closeMenuModal: () => set((state) => ({ isMenuModalVisible: false })),
  }))
  // devtools(
  //   persist(
  //     (set) => ({
  //       isMenuModalVisible: false,
  //       openMenuModal: () => set((state) => ({ isMenuModalVisible: true })),
  //       closeMenuModal: () => set((state) => ({ isMenuModalVisible: false })),
  //     }),
  //     {
  //       name: "modal",
  //     }
  //   )
  // )
);
