const utilities = require('..')
const documentation = {
  pad: `Takes two arguments: value, pad, left
        Returns string with added pad from left side or right side.
        When pad is string, prepends or appends them to the value(depending on left is truthy value).
        When pad is a number, prepends or appends (pad) whitespaces to the value(depending on left is truthy value).
        When left is truthy, pad is prepends to value, otherwise pad is appends to value.
        By default left is truthy.`,

  trim: ` Takes one argument: string
          Removes whitespace from the start and the end of the string.`,

  strip: `Takes two arguments: string, pattern
          Removes from the string, passed pattern. Pattern could be a string or an array.
          When pattern is a string then removes substring.
          When pattern is an array or pattern is one character string then removes globally from the string single character.
          When pattern has not been passed, trims the string.`,

  uppercase: `Takes one argument: string
              Converts string to 'UPPERCASE'.`,

  underscore: `Takes one argument: string
               Returns new string with words separated by "_". All letters are lowercase.`,

  capitalize: `Takes one argument: string
               Converts first letter of the string to 'UPPERCASE'.`,

  unescape: `Takes one argument: string
             Converts the HTML entities in string to their corresponding characters.`,

  lowerfirst: `Takes one argument: string
               Converts first letter of the string to 'lowercase'.`,

  lowercase: `Takes one argument: string
              Converts string to 'lowercase'.`,

  humanize: `Takes two arguments: string, capitalize
             Replaces '_' with singlespaces
             When capitalize is truthy, converts first char of the string to 'UPPERCASE'.
             By default capitalize is truthy.`,

  titleize: `Takes one argument: string
             Converts to 'UPPERCASE' first letter of each word in string(separated by singlespace).`,

  dasherize: `Takes one argument: string
             Replaces globally in the string "_" to "-".`,

  classify: `Takes one argument: string
             Creates a class name from the string.`,

  pluralize: `Takes one argument: string
              Returns plural form of the string.`,

  singularize: `Takes two arguments: string, appendix
                Returns singular form of the string.
                By default appendix is empty string.`,

  camelize: `Takes two arguments: string, camelcased
             Converts string to "lowerCase" or "UpperCase" notation.
             When camelcased is falsy returns string in "lowerCase" notation otherwise in "UpperCase" notation.
             By default camelcased is falsy.`,

  constantize: `Takes one argument: string
                Converts string to "CONSTANT_NOTATION".`,

  truncate: `Takes three arguments: string, length, ending
             Truncates a given string if is longer than passed length and replaces last chars of new string with passed ending.
             When the string length is smaller than passed length returns string.
             By default length is equal 30
             By default ending is equal '...'`,

  tails: `Takes three arguments: string, length, ending`,

  swapcase: `Takes one argument: string
             Replaces in string lower case letters to uppercase and uppercase letters to lowercase.`,

  repeat: `Takes two arguments: string, count
           Repeats the string (count) times.`,

  singlespace: `Takes one argument: string
                Replaces in the string multiple spaces to single spaces.`,

  whitespacestrip: `Takes one argument: string
                    Removes from string whitespaces.`,

  quote: `Takes two arguments: string, lang
          Puts the string inside quotations marks.
          When lang equals 'en' returns  string inside "".
          When lang is not equal 'en' returns string inside „”.
          When lang has not been passed returns string inside "".`,

  unquote: `Takes one argument: string
            If string is between quotations characters ("", „”), removes them and returns string, otherwise returns tne string.`,

  squeeze: `Takes two arguments: string, pattern
            Replaces in string multiple repetitions of the same characters to the one character.
            pattern is a string based on which the regular expression is created. By default is equal a-zA-Z`,

  wrap:   `Takes three arguments: string, firstCharacter, lastCharacter
           Wraps string between firstCharacter and lastCharacter.
           When firstCharacter has been no passed to the funciton returns string.
           When only firstCharacter has been passed without lastCharacter. Wraps string between firstCharacter.`,

  unwrap: `Takes three arguments: string, firstCharacter, lastCharacter
           Removes from string firstCharacter and lastCharacter if they exist in string.
           When firstCharacter has been no passed to the funciton returns string.
           When only firstCharacter has been passed without lastCharacter. Removes from start and the end of the string the firstCharacter.`,

  split: `Takes two arguments: string, separator
          Splits the string into an arrary of strings.
          When separator has not been passed returns an array containing string.`
}

for (let name in utilities) {
  const utility = utilities[name]
  for (let method in utility) {
    if (!documentation[method]) {
      throw new Error(`Documentation missing for: ${method}`)
    }
  }
}
