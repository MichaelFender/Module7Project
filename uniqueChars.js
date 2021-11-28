function uniqueCharacters(str)
{
    for(let i = 0; i < str.length; i++)
        for(let x = i + 1; x < str.length; x++)
            if (str[i] == str[x])
                return false
                return true
            }

            let input = "Boob"
 
if (uniqueCharacters(input) == true)
    console.log("The String " + input + " has all unique characters")
else
    console.log("The String " + input + " has duplicate characters")