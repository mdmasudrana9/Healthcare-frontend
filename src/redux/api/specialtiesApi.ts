import { baseApi } from "@/redux/api/baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSpecialtyMutation } = specialtiesApi;
