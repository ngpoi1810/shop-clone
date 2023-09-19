import axios, { AxiosError, HttpStatusCode } from 'axios'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}
export function isAxiosUnprocessableEntityError(error: unknown) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
