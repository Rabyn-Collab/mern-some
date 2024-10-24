import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const cocktailApi = createApi({
  reducerPath: 'cocktailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'www.thecocktaildb.com/api/json/v1/1' }),
  endpoints: (builder) => ({



    getAllCocktails: builder.query({
      query: () => ({
        url: '/filter.php',
        method: 'GET'
      })
    })






  })



});