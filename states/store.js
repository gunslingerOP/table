import create from "zustand";
const Student = create((set) => ({
  name: null,
  age: null,
  address: null,
  gender: null,
  data: [],
  arr: [],
  isModal: false,

  setIsModal: (value) => set({ isModal: value }),
  setData: (value) => set({ data: value }),
  setArr: (arr) => set({ arr }),
  setName: (value) => set({ name: value }),
  setAge: (value) => set({ age: value }),
  setAddress: (value) => set({ address: value }),
  setGender: (value) => set({ gender: value }),
}));
export default Student;
