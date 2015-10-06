var messages = {
  'confirm_deletion': ( title ) => `Er du sikker på at du vil slette ønsket: ${title}.`,
  'wrong_credentials': () => 'Forkert brugernavn eller adgangskode.',
  'wish_created': ( title) => `Ønske tilføjet: ${title}.`,
  'wish_deleted': ( title ) => `Ønske slettet: ${title}.`,
  'wish_updated': ( title ) => `Ønske opdateret: ${title}.`,
  'logged_out': () => 'Du er blevet logget ud. Log venligst på igen.',
  'server_error': () => 'Noget gik galt. Prøv igen senere.'
}

export { messages as default };
