/\w/ = /[a-zA-Z0-9_]/ // represents any single char
/\W/ = /[^a-zA-Z0-9_]/ // represents non-word-char

// In regex, the uppercase metacharacter is always the inverse of the lowercase counterpart.


/[0-9]/g // The g means Global, and causes the replace call to replace all matches, not just the first one.


// The plus (+) is a quantifier that matches one or more occurrences of the preceding element. 


/[a-zA-Z0-9-]+/g // if a-zA-Z0-9 and - return arr, if multiple serial matches, it combines



