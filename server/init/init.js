Accounts.config({ sendVerificationEmail: true, forbidClientAccountCreation: false });

Accounts.sendEnrollmentEmail(function(userId, email){
  console.log(userId);
  console.log(email);
  return true;
});