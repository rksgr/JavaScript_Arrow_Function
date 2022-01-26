/**
 * UC 1: Create a regex pattern to validate pin code 400088
 */
{   
    let pin = 400088;
    let regex = RegExp('[1-9][0-9]{5}');
    let result = regex.test(pin);
    console.log(result);
}