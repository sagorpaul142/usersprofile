import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (params) => `user?limit=${params.limit}&skip=${params.skip}`
        }),
        getSingleUser: builder.query({
            query: (id) => `users/${id}`
        })
    })
})

export const {useGetUsersQuery, useGetSingleUserQuery} = userSlice;