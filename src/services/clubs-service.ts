import * as HttpResponse from "../utils/http-helper";
import * as CLubRepositoy from "../repositories/clubs-repository";

export const getClubService = async () => {
  const data = await CLubRepositoy.fidAllClubs();
  const response = HttpResponse.ok(data);
  return response;
};
