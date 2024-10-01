import * as PLayerRepository from "../repositories/players-repository";
import { noContent, ok as ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PLayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
