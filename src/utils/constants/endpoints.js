export const apiRoot = "https://jobposting-be.jobhax.com"; //"https://backend.jobhax.com"; //"http://10.0.0.75:8000"; //"http://0.0.0.0:8000";

//USER REQUESTS//
export const USERS = type => `${apiRoot}/api/users/${type}/`;

//JOB_APPS REQUESTS//
export const JOB_APPS = `${apiRoot}/api/positionapps/`;

export const GET_SOURCES = `${apiRoot}/api/positionapps/sources/`;

export const GET_STATUSES = `${apiRoot}/api/positionapps/statuses/`;

export const CONTACTS = jobappId =>
  `${apiRoot}/api/positionapps/${jobappId}/contacts/`;

export const GET_NEW_JOBAPPS = timestamp =>
  `${apiRoot}/api/positionapps/?timestamp=${timestamp}`;

export const NOTES = jobappId =>
  `${apiRoot}/api/positionapps/${jobappId}/notes/`;

//METRICS REQUESTS//
export const METRICS = type => `${apiRoot}/api/metrics/${type}`;

//COMPANIES REQUESTS//
export const COMPANIES = `${apiRoot}/api/companies/`;

//ALUMNI REQUESTS//
export const ALUMNI = `${apiRoot}/api/alumni/`;

//REVIEWS REQUESTS//
export const REVIEWS = `${apiRoot}/api/reviews/`;

export const SOURCE_TYPES = `${apiRoot}/api/reviews/sourceTypes/`;

export const EMPLOYMENT_AUTHORIZATIONS = `${apiRoot}/api/reviews/employmentAuthorizations/`;

//AUTOCOMPLETE REQUEST//
export const AUTOCOMPLETE = type => `${apiRoot}/api/${type}/`;

//POLL REQUESTS//
export const GET_POLL = `${apiRoot}/api/polls/`;

export const VOTE_POLL = pollId => `${apiRoot}/api/polls/${pollId}/vote/`;

//NOTIFICATIONS REQUESTS//
export const NOTIFICATIONS = `${apiRoot}/api/notifications/`;

//TOKENLESS REQUESTS//
export const FAQS = `${apiRoot}/api/faqs/`;

export const AGREEMENTS = `${apiRoot}/api/agreements/`;

export const FEEDBACKS = `${apiRoot}/api/feedbacks/`;
