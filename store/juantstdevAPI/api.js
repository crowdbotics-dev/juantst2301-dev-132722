import axios from "axios"
const juantstdevAPI = axios.create({
  baseURL: "https://juantst2301-dev-132722.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return juantstdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return juantstdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_newmo_list(payload) {
  return juantstdevAPI.get(`/api/v1/newmo/`)
}
function api_v1_newmo_create(payload) {
  return juantstdevAPI.post(`/api/v1/newmo/`, payload)
}
function api_v1_newmo_retrieve(payload) {
  return juantstdevAPI.get(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_newmo_update(payload) {
  return juantstdevAPI.put(`/api/v1/newmo/${payload.id}/`, payload)
}
function api_v1_newmo_partial_update(payload) {
  return juantstdevAPI.patch(`/api/v1/newmo/${payload.id}/`, payload)
}
function api_v1_newmo_destroy(payload) {
  return juantstdevAPI.delete(`/api/v1/newmo/${payload.id}/`)
}
function api_v1_rojo_list(payload) {
  return juantstdevAPI.get(`/api/v1/rojo/`)
}
function api_v1_rojo_create(payload) {
  return juantstdevAPI.post(`/api/v1/rojo/`, payload)
}
function api_v1_rojo_retrieve(payload) {
  return juantstdevAPI.get(`/api/v1/rojo/${payload.id}/`)
}
function api_v1_rojo_update(payload) {
  return juantstdevAPI.put(`/api/v1/rojo/${payload.id}/`, payload)
}
function api_v1_rojo_partial_update(payload) {
  return juantstdevAPI.patch(`/api/v1/rojo/${payload.id}/`, payload)
}
function api_v1_rojo_destroy(payload) {
  return juantstdevAPI.delete(`/api/v1/rojo/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return juantstdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return juantstdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return juantstdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return juantstdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return juantstdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juantstdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return juantstdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return juantstdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return juantstdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return juantstdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juantstdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return juantstdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_newmo_list,
  api_v1_newmo_create,
  api_v1_newmo_retrieve,
  api_v1_newmo_update,
  api_v1_newmo_partial_update,
  api_v1_newmo_destroy,
  api_v1_rojo_list,
  api_v1_rojo_create,
  api_v1_rojo_retrieve,
  api_v1_rojo_update,
  api_v1_rojo_partial_update,
  api_v1_rojo_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
