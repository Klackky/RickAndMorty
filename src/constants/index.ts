export const statuses = {
  any: "ANY",
  alive: "ALIVE",
  dead: "DEAD",
  unknown: "UNKNOWN",
} as const;

export const notFoundError = "Request failed with status code 404" as const;