export const enum STATUS_CODE {
  OK = 200,
  CREATED,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  FORBIDDEN = 403,
  NOT_FOUND,
  METHOD_NOT_ALLOWED,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_ERROR = 500,
  OT_UNABLE_TO_CAPTURE_MEDIA = 1500,
  INTERNET_CONNEACTION_ISSUE = 1006,
}