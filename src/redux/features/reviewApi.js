import { apiSlice } from "../api/apiSlice";

export const reviewApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    addReview: builder.mutation({
      query: (data) => ({
        url: "http://10.160.21.87:7000/api/review/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => ["Products",{ type: "Product", id: arg.productId }],
    }),
  }),
});

export const {useAddReviewMutation} = reviewApi;
