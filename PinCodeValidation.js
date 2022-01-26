/**
 * UC 1: Create a regex pattern to validate pin code 400088
 */
{   
    let pin = 400088;
    let regex = RegExp('[1-9][0-9]{5}');
    let result = regex.test(pin);
    console.log(result);
}
/**
 * UC 2: Restrict the pin code from taking alphabets or special characters at beginning
 */
{
    let pin = "A400088";

    // Beginning should contain only digits from 1 to 9
    let regex = RegExp('^[1-9][0-9]{5}');
    let result = regex.test(pin);
    console.log(result);    // returns false
}