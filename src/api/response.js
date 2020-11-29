import axiosInstance from "../api/axios";

export const fetchBooks = async (inputValue) => (await axiosInstance.get(`/books/v1/volumes?q=${inputValue}`))
