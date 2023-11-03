const TOKEN_KEY = "SESSION"

export function saveTokens(tokens) {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
}

 export function getTokens() {
  return JSON.parse(localStorage.getItem(TOKEN_KEY));
 }

export function deleteTokens() {
  localStorage.removeItem(TOKEN_KEY);
}


export const findInputError = (errors, name) => {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}

export const isFormInvalid = err => {
  if (Object.keys(err).length > 0) return true
  return false
}