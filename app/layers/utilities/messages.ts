var messages = {
  'confirm_deletion': ( title ) => `Er du sikker på at du vil slette ønsket: ${title}.`,
  'wrong_credentials': () => 'Forkert brugernavn eller adgangskode.',
  'wish_created': ( title) => `Ønske tilføjet: ${title}.`,
  'wish_deleted': ( title ) => `Ønske slettet: ${title}.`,
  'wish_updated': ( title ) => `Ønske opdateret: ${title}.`,
  'owner_updated': ( name ) => `${name} er opdateret.`,
  'logged_out': () => 'Du er blevet logget ud. Log venligst på igen.',
  'server_error': () => 'Noget gik galt. Prøv igen senere.',
  'submit_error': () => 'Noget gik galt. Har du husket at udfylde alle påkrævede felter?',
  'image_upload_error': () => 'Upload fejlede. Tjek størrelse (max: 5MB) og format (.jpg, .png, .gif).'
}

export { messages as default };
