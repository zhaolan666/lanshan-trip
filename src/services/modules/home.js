import LANRequest from "../request";

export function getHomeHotSuggests() {
  return LANRequest.get({
    url: "/home/hotSuggests",
  });
}

export function getHomeCategories() {
  return LANRequest.get({
    url: "/home/categories",
  });
}

export function getHomeHouselist(currentPage) {
  return LANRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage,
    },
  });
}
