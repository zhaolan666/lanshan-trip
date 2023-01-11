import LANRequest from "../request";

export function getCityAll() {
  return LANRequest.get({
    url: "/city/all",
  });
}
