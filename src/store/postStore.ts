import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],

}))

export default usePostStore