import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
  overrideExisting:true,
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: () => `http://10.160.21.87:7000/api/brand/active`
    }),
  }),
});

export const {
 useGetActiveBrandsQuery
} = brandApi;
