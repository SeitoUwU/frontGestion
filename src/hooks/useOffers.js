import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import offerApi from "../api/offers.api";

export function useOffers(params) {
  return useQuery(["offers", params], () => offerApi.list(params));
}

export function useCreateOffer() {
  const qc = useQueryClient();
  return useMutation(OfferAPI.create, {
    onSuccess: () => qc.invalidateQueries(["offers"]),
  });
}
