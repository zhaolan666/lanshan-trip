import LANRequest from "../request";

export function getDetailInfos(houseId) {
  return LANRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
