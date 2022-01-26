/**
 * UC 1: Email Validation: Make sure at least three characters are present 
 */
 {
    let valid_email_id ="abc";
    let invalid_email_id  = "ab";

    // Atleast three characters should be present
    let regex = RegExp("[a-zA-Z0-9]{3,}");

    let result_valid_email_id = regex.test(valid_email_id);
    let result_invalid_email_id = regex.test(invalid_email_id);

    console.log("Result with valid email Id:"+ result_valid_email_id);      // Returns true
    console.log("Result with invalid email Id:"+ result_invalid_email_id);  // Returns false
}
