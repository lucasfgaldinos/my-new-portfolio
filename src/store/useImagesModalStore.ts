import { create } from "zustand";

type ImagesModalState = {
  modalIsOpen: boolean;
  imgs: string[] | undefined;
  openModal: (images: string[]) => void;
  closeModal: () => void;
};

export const useImagesModalStore = create<ImagesModalState>((set) => ({
  modalIsOpen: false,
  imgs: [],

  openModal: (imgs) =>
    set({
      modalIsOpen: true,
      imgs: imgs,
    }),

  closeModal: () =>
    set({
      modalIsOpen: false,
      imgs: [],
    }),
}));
