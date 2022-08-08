import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  refetchOnMountOrArgChange : true,
  tagTypes : ['Employee'],
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: () => "employee",
      providesTags:['Employee']
    }),
    getEmployeeById : builder.query({
      query: (id) => ({
        url: `employee/${id}`,
        
      }),

    }),
    deleteEmployeeById : builder.mutation({
      query: (id) => ({
        url:`employee/${id}`,
        method :'DELETE'

      }),
      invalidatesTags:['Employee'],

    }),
    updateEmployee: builder.mutation({
      query: ({id,...payload}) => ({
        url:`employee/${id}`,
        method : 'PUT',
        body: payload,
      }),

    }),
    createEmployee: builder.mutation({
      
      query: (payload) => ({
        url: "employee",
        method: 'POST',
        body: payload,
      }),
      })
  }),
});
  
  
    


export const { useGetEmployeeQuery , useCreateEmployeeMutation,useDeleteEmployeeByIdMutation,useGetEmployeeByIdQuery,useUpdateEmployeeMutation} = baseApi;