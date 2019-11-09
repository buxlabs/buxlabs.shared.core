import test from 'ava'
import { string } from '../..'

test('whitespacestrip should remove whitespace characters (t1)', t => {
  const parsed = string.whitespacestrip('\t1234 5678\n')
  t.deepEqual(parsed, '12345678')
})

test('whitespacestrip should remove whitespace characters (t2)', t => {
  const parsed = string.whitespacestrip('b  ar')
  t.deepEqual(parsed, 'bar')
})

test('pad should return the same string if no padding was provided', t => {
  const parsed = string.pad('hello')
  t.deepEqual(parsed, 'hello')
})

test('pad should add (n) whitespaces if pad is a number (t1)', t => {
  const parsed = string.pad('hello world', 5)
  t.deepEqual(parsed, '     hello world')
})

test('pad should add (n) whitespaces if pad is a number (t2)', t => {
  const parsed = string.pad('hello world', 5, false)
  t.deepEqual(parsed, 'hello world     ')
})

test('pad should pad the string with given characters (t1)', t => {
  const parsed = string.pad('hello world', '** ')
  t.deepEqual(parsed, '** hello world')
})

test('pad should pad the string with given characters (t2)', t => {
  const parsed = string.pad('3', '000', false)
  t.deepEqual(parsed, '3000')
})

test('pad should pad given number with given characters (t1)', t => {
  const parsed = string.pad(42, '---- ')
  t.deepEqual(parsed, '---- 42')
})

test('pad should pad given number with given characters (t2)', t => {
  const parsed = string.pad(42, ' ----', false)
  t.deepEqual(parsed, '42 ----')
})

test("pad shouldn't add padding to empty lines", t => {
  const parsed = string.pad('hello\n\nworld', '* ')
  t.deepEqual(parsed, '* hello\n\n* world')
})

test('trim should remove whitespace in left and right', t => {
  const parsed = string.trim(' foo ')
  t.deepEqual(parsed, 'foo')
})

test('uppercase should convert string to uppercase (t1)', t => {
  const parsed = string.uppercase('foo')
  t.deepEqual(parsed, 'FOO')
})

test('uppercase should convert string to uppercase (t2)', t => {
  const parsed = string.uppercase('foo')
  t.deepEqual(parsed, 'FOO')
})

test("underscore shouldn't modify the string (t1)", t => {
  const parsed = string.underscore('foo')
  t.deepEqual(parsed, 'foo')
})

test("underscore shouldn't modify the string (t2)", t => {
  const parsed = string.underscore('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("underscore shouldn't modify the string (t3)", t => {
  const parsed = string.underscore('foo_bar')
  t.deepEqual(parsed, 'foo_bar')
})

test("underscore shouldn't modify the string (t4)", t => {
  const parsed = string.underscore(' foo')
  t.deepEqual(parsed, 'foo')
})

test('underscore should convert string to lowerCase (t1)', t => {
  const parsed = string.underscore('Foo')
  t.deepEqual(parsed, 'foo')
})

test('underscore should convert string to lowerCase (t2)', t => {
  const parsed = string.underscore(' Foo ')
  t.deepEqual(parsed, 'foo')
})

test('underscore should add underscore between camelCase words (t1)', t => {
  const parsed = string.underscore('fooBar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should add underscore between camelCase words (t2)', t => {
  const parsed = string.underscore('fooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test('underscore should add underscore between camelCase words (t3)', t => {
  const parsed = string.underscore('fooBarBarBar')
  t.deepEqual(parsed, 'foo_bar_bar_bar')
})

test('underscore should add underscore between camelCase words (t4)', t => {
  const parsed = string.underscore('fooBarBazBanQux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test('underscore should add underscore between spaced words (t1)', t => {
  const parsed = string.underscore('foo bar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should add underscore between spaced words (t2)', t => {
  const parsed = string.underscore('foo bar baz ban qux')
  t.deepEqual(parsed, 'foo_bar_baz_ban_qux')
})

test('underscore should add underscore between spaced words (t3)', t => {
  const parsed = string.underscore('foo     bar baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test('underscore should add underscore between spaced words (t4)', t => {
  const parsed = string.underscore('foo     bar baz    qux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test('underscore should add underscore between spaced words (t5)', t => {
  const parsed = string.underscore('foo Bar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should add underscore between spaced words (t6)', t => {
  const parsed = string.underscore('foo Bar Baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test('underscore should add underscore between spaced words (t7)', t => {
  const parsed = string.underscore('foo Bar      baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test('underscore should add underscore between spaced words (t8)', t => {
  const parsed = string.underscore('foo Bar      baq')
  t.deepEqual(parsed, 'foo_bar_baq')
})

test('underscore should add underscore between CapitalCase words (t1)', t => {
  const parsed = string.underscore('FooBar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should add underscore between CapitalCase words (t2)', t => {
  const parsed = string.underscore('FooBarBaz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test('underscore should add underscore between CapitalCase words (t3)', t => {
  const parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test('underscore should add underscore between CapitalCase words (t4)', t => {
  const parsed = string.underscore('FooBarBazQux')
  t.deepEqual(parsed, 'foo_bar_baz_qux')
})

test('underscore should add underscore between CapitalCase words (t5)', t => {
  const parsed = string.underscore('FooBarBazQux bar')
  t.deepEqual(parsed, 'foo_bar_baz_qux_bar')
})

test('underscore should convert kebab-case to underscoreCase (t1)', t => {
  const parsed = string.underscore('foo-bar')
  t.deepEqual(parsed, 'foo_bar')
})

test('underscore should convert kebab-case to underscoreCase (t2)', t => {
  const parsed = string.underscore('foo-bar-baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test('underscore should convert kebab-case to underscoreCase (t3)', t => {
  const parsed = string.underscore('foo-BAR-baz')
  t.deepEqual(parsed, 'foo_bar_baz')
})

test('underscore should convert kebab-case to underscoreCase (t4)', t => {
  const parsed = string.underscore('foo-BaR-baz')
  t.deepEqual(parsed, 'foo_ba_r_baz')
})

test('underscore should convert kebab-case to underscoreCase (t5)', t => {
  const parsed = string.underscore('Bar-baz-baN')
  t.deepEqual(parsed, 'bar_baz_ba_n')
})

test('underscore should convert string containing numbers to underscoreCase (t1)', t => {
  const parsed = string.underscore('foo11')
  t.deepEqual(parsed, 'foo_11')
})

test('underscore should convert string containing numbers to underscoreCase (t2)', t => {
  const parsed = string.underscore('foo1o11')
  t.deepEqual(parsed, 'foo_1_o_11')
})

test('underscore should convert string containing numbers to underscoreCase (t3)', t => {
  const parsed = string.underscore('fo_o1o11')
  t.deepEqual(parsed, 'fo_o_1_o_11')
})

test('underscore should convert string containing numbers to underscoreCase (t4)', t => {
  const parsed = string.underscore('1bar')
  t.deepEqual(parsed, '1_bar')
})

test('underscore should convert string containing numbers to underscoreCase (t5)', t => {
  const parsed = string.underscore('1barBan-baz')
  t.deepEqual(parsed, '1_bar_ban_baz')
})

test('underscore should convert string containing numbers to underscoreCase (t6)', t => {
  const parsed = string.underscore('00')
  t.deepEqual(parsed, '00')
})

test('capitalize should capitalize first character of string (t1)', t => {
  const parsed = string.capitalize('foo')
  t.deepEqual(parsed, 'Foo')
})

test('capitalize should capitalize first character of string (t2)', t => {
  const parsed = string.capitalize('foo bar and baz')
  t.deepEqual(parsed, 'Foo bar and baz')
})

test('lowerCase should convert each character to lowerCase', t => {
  const parsed = string.lowercase('Foo BAR and baZ')
  t.deepEqual(parsed, 'foo bar and baz')
})

test('humanize should capitalize first word', t => {
  const parsed = string.humanize('foo bar')
  t.deepEqual(parsed, 'Foo bar')
})

test('humanize should capitalize first word and replace underscores to spaces (t1)', t => {
  const parsed = string.humanize('foo_bar')
  t.deepEqual(parsed, 'Foo bar')
})

test('humanize should capitalize first word and replace underscores to spaces (t2)', t => {
  const parsed = string.humanize('foo_bar. Baz qux _and_qux')
  t.deepEqual(parsed, 'Foo bar. Baz qux  and qux')
})

test("humanize shouldn't capitalize first word and should replace underscores to spaces", t => {
  const parsed = string.humanize('foo_bar. Baz qux _and_qux', false)
  t.deepEqual(parsed, 'foo bar. Baz qux  and qux')
})

test('titleize should capitalize all the words (t1)', t => {
  const parsed = string.titleize('foo bar')
  t.deepEqual(parsed, 'Foo Bar')
})

test('titleize should capitalize all the words (t2)', t => {
  const parsed = string.titleize('foo, bar, baz and qux')
  t.deepEqual(parsed, 'Foo, Bar, Baz And Qux')
})

test('dasherize replaces underscores with dashes in the string (t1)', t => {
  const parsed = string.dasherize('foo_bar')
  t.deepEqual(parsed, 'foo-bar')
})

test('dasherize replaces underscores with dashes in the string (t2)', t => {
  const parsed = string.dasherize('foo_bar__baz')
  t.deepEqual(parsed, 'foo-bar--baz')
})

test('classify creates a class name from a plural (t1)', t => {
  const parsed = string.classify('foos')
  t.deepEqual(parsed, 'Foo')
})

test('classify creates a class name from a plural (t2)', t => {
  const parsed = string.classify('fooBars')
  t.deepEqual(parsed, 'FooBar')
})

test('classify creates a class name from a plural (t3)', t => {
  const parsed = string.classify('fooBar')
  t.deepEqual(parsed, 'FooBar')
})

test('pluralize returns the plural form of the word in the string (t1)', t => {
  const parsed = string.pluralize('car')
  t.deepEqual(parsed, 'cars')
})

test('pluralize returns the plural form of the word in the string (t2)', t => {
  const parsed = string.pluralize('dress')
  t.deepEqual(parsed, 'dresses')
})

test('pluralize returns the plural form of the word in the string (t3)', t => {
  const parsed = string.pluralize('box')
  t.deepEqual(parsed, 'boxes')
})

test('pluralize returns the plural form of the word in the string (t4)', t => {
  const parsed = string.pluralize('bush')
  t.deepEqual(parsed, 'bushes')
})

test('pluralize returns the plural form of the word in the string (t5)', t => {
  const parsed = string.pluralize('bus')
  t.deepEqual(parsed, 'buses')
})

test('pluralize returns the plural form of the word in the string (t6)', t => {
  const parsed = string.pluralize('watch')
  t.deepEqual(parsed, 'watches')
})

test('pluralize returns the plural form of the word in the string (t7)', t => {
  const parsed = string.pluralize('bridge')
  t.deepEqual(parsed, 'bridges')
})

test('pluralize returns the plural form of the word in the string (t8)', t => {
  const parsed = string.pluralize('prize')
  t.deepEqual(parsed, 'prizes')
})

test('pluralize returns the plural form of the word in the string (t9)', t => {
  const parsed = string.pluralize('tomato')
  t.deepEqual(parsed, 'tomatoes')
})

test('pluralize returns the plural form of the word in the string (t10)', t => {
  const parsed = string.pluralize('wife')
  t.deepEqual(parsed, 'wives')
})

test('pluralize returns the plural form of the word in the string (t11)', t => {
  const parsed = string.pluralize('shelf')
  t.deepEqual(parsed, 'shelves')
})

test('pluralize returns the plural form of the word in the string (t12)', t => {
  const parsed = string.pluralize('lady')
  t.deepEqual(parsed, 'ladies')
})

test('pluralize returns the plural form of the word in the string (t13)', t => {
  const parsed = string.pluralize('city')
  t.deepEqual(parsed, 'cities')
})

test('pluralize returns the plural form of the word in the string (t14)', t => {
  const parsed = string.pluralize('toy')
  t.deepEqual(parsed, 'toys')
})

test('pluralize returns the plural form of the word in the string (t15)', t => {
  const parsed = string.pluralize('ad')
  t.deepEqual(parsed, 'ads')
})

test('singularize returns singular form of a word in the string (t1)', t => {
  const parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test('singularize returns singular form of a word in the string (t2)', t => {
  const parsed = string.singularize('cars')
  t.deepEqual(parsed, 'car')
})

test('singularize returns singular form of a word in the string (t3)', t => {
  const parsed = string.singularize('dresses')
  t.deepEqual(parsed, 'dress')
})

test('singularize returns singular form of a word in the string (t4)', t => {
  const parsed = string.singularize('boxes')
  t.deepEqual(parsed, 'box')
})

test('singularize returns singular form of a word in the string (t5)', t => {
  const parsed = string.singularize('bushes')
  t.deepEqual(parsed, 'bush')
})

test('singularize returns singular form of a word in the string (t6)', t => {
  const parsed = string.singularize('buses')
  t.deepEqual(parsed, 'bus')
})

test('singularize returns singular form of a word in the string (t7)', t => {
  const parsed = string.singularize('watches')
  t.deepEqual(parsed, 'watch')
})

test('singularize returns singular form of a word in the string (t8)', t => {
  const parsed = string.singularize('bridges', 'e')
  t.deepEqual(parsed, 'bridge')
})

test('singularize returns singular form of a word in the string (t9)', t => {
  const parsed = string.singularize('prizes', 'e')
  t.deepEqual(parsed, 'prize')
})

test('singularize returns singular form of a word in the string (t10)', t => {
  const parsed = string.singularize('tomatoes')
  t.deepEqual(parsed, 'tomato')
})

test('singularize returns singular form of a word in the string (t11)', t => {
  const parsed = string.singularize('wives')
  t.deepEqual(parsed, 'wife')
})

test('singularize returns singular form of a word in the string (t12)', t => {
  const parsed = string.singularize('shelves', 'f')
  t.deepEqual(parsed, 'shelf')
})

test('singularize returns singular form of a word in the string (t13)', t => {
  const parsed = string.singularize('thieves', 'f')
  t.deepEqual(parsed, 'thief')
})

test('singularize returns singular form of a word in the string (t14)', t => {
  const parsed = string.singularize('cities')
  t.deepEqual(parsed, 'city')
})

test('singularize returns singular form of a word in the string (t15)', t => {
  const parsed = string.singularize('ladies')
  t.deepEqual(parsed, 'lady')
})

test('singularize returns singular form of a word in the string (t16)', t => {
  const parsed = string.singularize('toys')
  t.deepEqual(parsed, 'toy')
})

test('singularize returns singular form of a word in the string (t17)', t => {
  const parsed = string.singularize('ads')
  t.deepEqual(parsed, 'ad')
})

test('swapcase converts uppercase to lowercase and lowercase to uppercase (t1)', t => {
  const parsed = string.swapcase('foo')
  t.deepEqual(parsed, 'FOO')
})

test('swapcase converts uppercase to lowercase and lowercase to uppercase (t2)', t => {
  const parsed = string.swapcase('FOO')
  t.deepEqual(parsed, 'foo')
})

test('swapcase converts uppercase to lowercase and lowercase to uppercase (t3)', t => {
  const parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')
})

test('swapcase converts uppercase to lowercase and lowercase to uppercase (t4)', t => {
  const parsed = string.swapcase('fOo Bar BAZ')
  t.deepEqual(parsed, 'FoO bAR baz')
})

test("camelize shouldn't modify the string (t1)", t => {
  const parsed = string.camelize('foo')
  t.deepEqual(parsed, 'foo')
})

test("camelize shouldn't modify the string (t2)", t => {
  const parsed = string.camelize('foobar')
  t.deepEqual(parsed, 'foobar')
})

test("camelize shouldn't modify the string (t3)", t => {
  const parsed = string.camelize('fooBar')
  t.deepEqual(parsed, 'fooBar')
})

test("camelize shouldn't modify the string (t4)", t => {
  const parsed = string.camelize(' foo')
  t.deepEqual(parsed, 'foo')
})

test('camelize should modify the string to lowerCamelCase by default (t1)', t => {
  const parsed = string.camelize('foo_bar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string to lowerCamelCase by default (t2)', t => {
  const parsed = string.camelize('FooBar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string to lowerCamelCase by default (t3)', t => {
  const parsed = string.camelize('FooBarbazBan')
  t.deepEqual(parsed, 'fooBarbazBan')
})

test('camelize should modify the string to lowerCamelCase by default (t4)', t => {
  const parsed = string.camelize('Foo')
  t.deepEqual(parsed, 'foo')
})

test('camelize should modify the string to lowerCamelCase by default (t5)', t => {
  const parsed = string.camelize('foo_bar_baz_ban_qux')
  t.deepEqual(parsed, 'fooBarBazBanQux')
})

test('camelize should modify the string to lowerCamelCase by default (t6)', t => {
  const parsed = string.camelize('foo-Bar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string to lowerCamelCase by default (t7)', t => {
  const parsed = string.camelize('foo bar')
  t.deepEqual(parsed, 'fooBar')
})

test('camelize should modify the string to lowerCamelCase by default (t8)', t => {
  const parsed = string.camelize('Foo bar ban')
  t.deepEqual(parsed, 'fooBarBan')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t1)', t => {
  const parsed = string.camelize('foo', true)
  t.deepEqual(parsed, 'Foo')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t2)', t => {
  const parsed = string.camelize('foobar', true)
  t.deepEqual(parsed, 'Foobar')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t3)', t => {
  const parsed = string.camelize('fooBar', true)
  t.deepEqual(parsed, 'FooBar')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t4)', t => {
  const parsed = string.camelize(' foo', true)
  t.deepEqual(parsed, 'Foo')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t5)', t => {
  const parsed = string.camelize('Foo_bar', true)
  t.deepEqual(parsed, 'FooBar')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t6)', t => {
  const parsed = string.camelize('foo_bar_baz_ban_qux', true)
  t.deepEqual(parsed, 'FooBarBazBanQux')
})

test('camelize should modify the string to UpperCamelCase if proper flag has been passed (t7)', t => {
  const parsed = string.camelize('Foo bar ban', true)
  t.deepEqual(parsed, 'FooBarBan')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t1)', t => {
  const parsed = string.constantize('foo')
  t.deepEqual(parsed, 'FOO')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t2)', t => {
  const parsed = string.constantize('foobar')
  t.deepEqual(parsed, 'FOOBAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t3)', t => {
  const parsed = string.constantize('fooBar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t4)', t => {
  const parsed = string.constantize('foo_bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t5)', t => {
  const parsed = string.constantize('Foo_Bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t6)', t => {
  const parsed = string.constantize('FooBar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t7)', t => {
  const parsed = string.constantize('foo-bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t8)', t => {
  const parsed = string.constantize('foo-bar_baz')
  t.deepEqual(parsed, 'FOO_BAR_BAZ')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t9)', t => {
  const parsed = string.constantize('FooBarBazQux')
  t.deepEqual(parsed, 'FOO_BAR_BAZ_QUX')
})

test('constantize should modify the string to the string in CONST_CONVENTION (t10)', t => {
  const parsed = string.constantize('foo   bar')
  t.deepEqual(parsed, 'FOO_BAR')
})

test("truncate should truncate the string if it's longer than the given maximum string length (t1)", t => {
  const parsed = string.truncate('Once upon a time in a world far far away')
  t.deepEqual(parsed, 'Once upon a time in a world...')
})

test("truncate should truncate the string if it's longer than the given maximum string length (t2)", t => {
  const parsed = string.truncate('Once upon a time in a world far far away', 17)
  t.deepEqual(parsed, 'Once upon a ti...')
})

test('tail removes an initial substring with length consisting of the difference and prepends a prefix', t => {
  const parsed = string.tail('Once upon a time in a world far far away', 15)
  t.deepEqual(parsed, '...far far away')
})

test('lowerfirst should lowercase first character of string (t1)', t => {
  const parsed = string.lowerfirst('Foo')
  t.deepEqual(parsed, 'foo')
})

test('lowerfirst should lowercase first character of string (t2)', t => {
  const parsed = string.lowerfirst('Foo bar baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test('unescape should convert the HTML entities in string to their corresponding characters (t1)', t => {
  const parsed = string.unescape('&amp;')
  t.deepEqual(parsed, '&')
})

test('unescape should convert the HTML entities in string to their corresponding characters (t2)', t => {
  const parsed = string.unescape('&lt;script&gt;alert("foo")&lt;/script&gt;')
  t.deepEqual(parsed, '<script>alert("foo")</script>')
})

test('repeat should return new string which contains the specified number of copies of the string', t => {
  const parsed = string.repeat('foo', 2)
  t.deepEqual(parsed, 'foofoo')
})

test('singlespace should return new string which contains singlespace', t => {
  const parsed = string.singlespace('foo     bar   baz')
  t.deepEqual(parsed, 'foo bar baz')
})

test('quote return a string inside quotes (t1)', t => {
  const parsed = string.quote('foo bar baz')
  t.deepEqual(parsed, '"foo bar baz"')
})

test('quote return a string inside quotes (t2)', t => {
  const parsed = string.quote('foo bar baz', 'en')
  t.deepEqual(parsed, '"foo bar baz"')
})

test('quote return a string inside quotes (t3)', t => {
  const parsed = string.quote('foo bar baz', 'pl')
  t.deepEqual(parsed, '„foo bar baz”')
})

test('unquote removes quotes from string (t1)', t => {
  const parsed = string.unquote('„foo bar baz”')
  t.deepEqual(parsed, 'foo bar baz')
})

test('unquote removes quotes from string (t2)', t => {
  const parsed = string.unquote('"foo bar baz"')
  t.deepEqual(parsed, 'foo bar baz')
})

test('squeeze return a string with removed double characters (t1)', t => {
  const parsed = string.squeeze('foo')
  t.deepEqual(parsed, 'fo')
})

test('squeeze return a string with removed double characters (t2)', t => {
  const parsed = string.squeeze('yellow moon')
  t.deepEqual(parsed, 'yelow mon')
})

test('squeeze return a string with removed double characters (t3)', t => {
  const parsed = string.squeeze('fooo    bar')
  t.deepEqual(parsed, 'fo bar')
})

test('squeeze return a string with removed double characters (t4)', t => {
  const parsed = string.squeeze('putters shoot balls')
  t.deepEqual(parsed, 'puters shot bals')
})

test('squeeze return a string with removed double characters (t5)', t => {
  const parsed = string.squeeze('yellow moon', 'o')
  t.deepEqual(parsed, 'yellow mon')
})

test('squeeze return a string with removed double characters (t6)', t => {
  const parsed = string.squeeze('putters shoot balls', 'm-z')
  t.deepEqual(parsed, 'puters shot balls')
})

test('summarize return a string with dots if string length is longer or equal 100', t => {
  const parsed = string.summarize(`
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum.
    Aenean non nibh sed augue gravida ultricies. Fusce dapibus libero vitae diam malesuada dictum.
    Curabitur congue venenatis ante, non congue tortor lobortis in. Sed hendrerit egestas eleifend.
    Nullam non accumsan augue. Maecenas sed tellus diam. Maecenas et dui auctor, elementum sapien in, fermentum nisi.
    Etiam in tempus libero, non finibus dui. Nunc vulputate mauris odio, quis vehicula dui malesuada eu.
    Etiam a justo quis nisl viverra finibus convallis in lorem. Sed eu massa consequat, venenatis mi at, lobortis lectus.
    Nulla euismod mattis justo id consequat. Proin`
  )
  t.deepEqual(parsed.substr(parsed.length - 3), '...')
})

test('summarize return a string with dots if string length is longer or equal x', t => {
  const parsed = string.summarize('foo bar baz ban', 10)
  t.deepEqual(parsed.substr(parsed.length - 3), '...')
})

test('wrap, insert string between passed character (t1)', t => {
  const parsed = string.wrap('foo bar baz ban', '"')
  t.deepEqual(parsed, '"foo bar baz ban"')
})

test('wrap, insert string between passed character (t2)', t => {
  const parsed = string.wrap('foo bar baz', '„', '”')
  t.deepEqual(parsed, '„foo bar baz”')
})

test('wrap, insert string between passed character (t3)', t => {
  const parsed = string.wrap('foo bar baz', '(', ')')
  t.deepEqual(parsed, '(foo bar baz)')
})

test('unwrap, removed starting and ending character (t1)', t => {
  const parsed = string.unwrap('"foo bar baz ban"', '"')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('unwrap, removed starting and ending character (t2)', t => {
  const parsed = string.unwrap('„foo bar baz”', '„', '”')
  t.deepEqual(parsed, 'foo bar baz')
})

test('unwrap, removed starting and ending character (t3)', t => {
  const parsed = string.unwrap('(foo bar baz)', '(', ')')
  t.deepEqual(parsed, 'foo bar baz')
})

test('strip should remove whitespace in left and right', t => {
  const parsed = string.strip(' foo ')
  t.deepEqual(parsed, 'foo')
})

test('strip should remove from string passed string (t1)', t => {
  const parsed = string.strip('foo bar baz ban', 'baz')
  t.deepEqual(parsed, 'foo bar ban')
})

test('strip should remove from string passed string (t2)', t => {
  const parsed = string.strip('foo bar', 'o')
  t.deepEqual(parsed, 'f bar')
})

test('strip should remove from string passed string (t3)', t => {
  const parsed = string.strip('foo bar baz ban', ['o', 'r', 'a'])
  t.deepEqual(parsed, 'f b bz bn')
})

test('replace should replace string characters with newString', t => {
  const parsed = string.replace('foo bar baz ban', 'baz', 'qux')
  t.deepEqual(parsed, 'foo bar qux ban')
})

test('index returns the index of the first occurence of the given substring (t1)', t => {
  const parsed = string.index('hello', 'e')
  t.deepEqual(parsed, 1)
})

test('index returns the index of the first occurence of the given substring (t2)', t => {
  const parsed = string.index('hello', 'lo')
  t.deepEqual(parsed, 3)
})

test('index returns the index of the first occurence of the given substring (t3)', t => {
  const parsed = string.index('hello', 'x')
  t.deepEqual(parsed, -1)
})

test('chop returns string with the last character removed (t1)', t => {
  const parsed = string.chop('')
  t.deepEqual(parsed, '')
})

test('chop returns string with the last character removed (t2)', t => {
  const parsed = string.chop('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed (t3)', t => {
  const parsed = string.chop('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chop returns string with the last character removed (t4)', t => {
  const parsed = string.chop('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chop returns string with the last character removed (t5)', t => {
  const parsed = string.chop('foo bar baz bar')
  t.deepEqual(parsed, 'foo bar baz ba')
})

test('chomp returns string with the given record separator removed from the end of string (t1)', t => {
  const parsed = string.chomp('foo bar')
  t.deepEqual(parsed, 'foo bar')
})

test('chomp returns string with the given record separator removed from the end of string (t2)', t => {
  const parsed = string.chomp('')
  t.deepEqual(parsed, '')
})

test('chomp returns string with the given record separator removed from the end of string (t3)', t => {
  const parsed = string.chomp('foo bar', 'ar')
  t.deepEqual(parsed, 'foo b')
})

test('chomp returns string with the given record separator removed from the end of string (t4)', t => {
  const parsed = string.chomp('foo bar', 'qux')
  t.deepEqual(parsed, 'foo bar')
})

test('chomp returns string with the given record separator removed from the end of string (t5)', t => {
  const parsed = string.chomp('foo bar baz ban\r\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string (t6)', t => {
  const parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chomp returns string with the given record separator removed from the end of string (t7)', t => {
  const parsed = string.chomp('foo bar baz ban\n\r')
  t.deepEqual(parsed, 'foo bar baz ban\n')
})

test('chomp returns string with the given record separator removed from the end of string (t8)', t => {
  const parsed = string.chomp('foo bar baz ban\n')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string (t9)', t => {
  const parsed = string.chomp('foo bar baz ban\r')
  t.deepEqual(parsed, 'foo bar baz ban')
})

test('chomp returns string with the given record separator removed from the end of string (t10)', t => {
  const parsed = string.chomp('foo\r\n\r\r\n')
  t.deepEqual(parsed, 'foo\r\n\r')
})

test('dot returns string with "." at the end of the string (t1)', t => {
  const parsed = string.dot('')
  t.deepEqual(parsed, '.')
})

test('dot returns string with "." at the end of the string (t2)', t => {
  const parsed = string.dot('foo bar')
  t.deepEqual(parsed, 'foo bar.')
})

test('dot returns string with "." at the end of the string (t3)', t => {
  const parsed = string.dot('foo bar.')
  t.deepEqual(parsed, 'foo bar.')
})

test('crop truncates string at full words (t1)', t => {
  const parsed = string.crop('foo bar baz ban bar', 100)
  t.deepEqual(parsed, 'foo bar baz ban bar')
})

test('crop truncates string at full words (t2)', t => {
  const parsed = string.crop('foo bar baz ban bar', 10)
  t.deepEqual(parsed, 'foo bar...')
})

test('crop truncates string at full words (t3)', t => {
  const parsed = string.crop('consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut fermentum', 70)
  t.deepEqual(parsed, 'consectetur adipiscing elit. Suspendisse venenatis ultrices arcu ut...')
})

test('hyphenate replaces spaces with hyphens, split camelCase text, remove non-word chars and convert to lower case (t1)', t => {
  const parsed = string.hyphenate('%# lorem ipsum  ? $  dolor')
  t.deepEqual(parsed, 'lorem-ipsum-dolor')
})

test('hyphenate replaces spaces with hyphens, split camelCase text, remove non-word chars and convert to lower case (t2)', t => {
  const parsed = string.hyphenate('loremIpsum')
  t.deepEqual(parsed, 'lorem-ipsum')
})

test('slugify convert to lower case, remove non-word chars and replace spaces with the delimeter (t1)', t => {
  const parsed = string.slugify('loremIpsum dolor special chars')
  t.deepEqual(parsed, 'loremipsum-dolor-special-chars')
})

test('slugify convert to lower case, remove non-word chars and replace spaces with the delimeter (t2)', t => {
  const parsed = string.slugify('loremIpsum dolor special chars', '_')
  t.deepEqual(parsed, 'loremipsum_dolor_special_chars')
})

test('initials converts string to initials (t1)', t => {
  const parsed = string.initials('Foo Bar')
  t.deepEqual(parsed, 'FB')
})

test('initials converts string to initials (t2)', t => {
  const parsed = string.initials('Foo Bar', ('.'))
  t.deepEqual(parsed, 'F.B')
})

test('initials converts string to initials (t3)', t => {
  const parsed = string.initials('Foo Barin-Bar', ('.'))
  t.deepEqual(parsed, 'F.B.B')
})

test('initials converts string to initials (t4)', t => {
  const parsed = string.initials(['foo bar', 'ban bar'], '.')
  t.deepEqual(parsed, ['F.B', 'B.B'])
})

test('htmlstrip returns text content of html tags (t1)', t => {
  const parsed = string.htmlstrip('<div>foo</div>')
  t.deepEqual(parsed, 'foo')
})

test('htmlstrip returns text content of html tags (t2)', t => {
  const parsed = string.htmlstrip('<div><div>foo</div></div>')
  t.deepEqual(parsed, 'foo')
})

test('htmlstrip returns text content of html tags (t3)', t => {
  const parsed = string.htmlstrip('<div>foo<div>foo</div></div>')
  t.deepEqual(parsed, 'foofoo')
})

test('htmlstrip returns text content of html tags (t4)', t => {
  const parsed = string.htmlstrip('Hello <b><i>world!</i></b>')
  t.deepEqual(parsed, 'Hello world!')
})

test('htmlstrip returns text content of html tags (t5)', t => {
  const parsed = string.htmlstrip('<a href="">lorem <strong>ipsum</strong></a>')
  t.deepEqual(parsed, 'lorem ipsum')
})

test('htmlstrip returns text content of html tags (t6)', t => {
  const parsed = string.htmlstrip('<article attr="foo \'bar\'">lorem</article> ipsum')
  t.deepEqual(parsed, 'lorem ipsum')
})

test('htmlstrip returns text content of html tags (t7)', t => {
  const parsed = string.htmlstrip('<a href="https://example.com">lorem ipsum</a>')
  t.deepEqual(parsed, 'lorem ipsum')
})

test('split should return an array (t1)', t => {
  const result = string.split('foo,bar,bazz', ',')
  t.deepEqual(result, ['foo', 'bar', 'bazz'])
})

test('split should return an array (t2)', t => {
  const result = string.split('foo bar baz')
  t.deepEqual(result, ['foo bar baz'])
})

test('celsius should convert the temperature to the Celsius scale (t1)', t => {
  const result = string.celsius('25')
  t.deepEqual(result, '25°C')
})

test('celsius should convert the temperature to the Celsius scale (t2)', t => {
  const result = string.celsius('25°C')
  t.deepEqual(result, '25°C')
})

test('celsius should convert the temperature to the Celsius scale (t3)', t => {
  const result = string.celsius('0°F')
  t.deepEqual(result, '-18°C')
})

test('celsius should convert the temperature to the Celsius scale (t4)', t => {
  const result = string.celsius('70°F')
  t.deepEqual(result, '21°C')
})

test('celsius should convert the temperature to the Celsius scale (t5)', t => {
  const result = string.celsius('70°F')
  t.deepEqual(result, '21°C')
})

test('celsius should convert the temperature to the Celsius scale (t6)', t => {
  const result = string.celsius('-10°F')
  t.deepEqual(result, '-23°C')
})

test('celsius should convert the temperature to the Celsius scale (t7)', t => {
  const result = string.celsius('0K')
  t.deepEqual(result, '-273°C')
})

test('celsius should convert the temperature to the Celsius scale (t8)', t => {
  const result = string.celsius('300K')
  t.deepEqual(result, '27°C')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t1)', t => {
  const result = string.fahrenheit('50')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t2)', t => {
  const result = string.fahrenheit('50°F')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t3)', t => {
  const result = string.fahrenheit('30°C')
  t.deepEqual(result, '86°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t4)', t => {
  const result = string.fahrenheit('10°C')
  t.deepEqual(result, '50°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t5)', t => {
  const result = string.fahrenheit('-20.21°C')
  t.deepEqual(result, '-4°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t6)', t => {
  const result = string.fahrenheit('1K')
  t.deepEqual(result, '-458°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t7)', t => {
  const result = string.fahrenheit('300K')
  t.deepEqual(result, '80°F')
})

test('fahrenheit should convert the temperature to the Fahrenheit scale (t8)', t => {
  const result = string.fahrenheit('100K')
  t.deepEqual(result, '-280°F')
})

test('kelvin should convert the temperature to the Kelvin scale (t1)', t => {
  const result = string.kelvin('100')
  t.deepEqual(result, '100K')
})

test('kelvin should convert the temperature to the Kelvin scale (t2)', t => {
  const result = string.kelvin('100K')
  t.deepEqual(result, '100K')
})

test('kelvin should convert the temperature to the Kelvin scale (t3)', t => {
  const result = string.kelvin('26°C')
  t.deepEqual(result, '299K')
})

test('kelvin should convert the temperature to the Kelvin scale (t4)', t => {
  const result = string.kelvin('-10°C')
  t.deepEqual(result, '263K')
})

test('kelvin should convert the temperature to the Kelvin scale (t5)', t => {
  const result = string.kelvin('50°F')
  t.deepEqual(result, '283K')
})

test('kelvin should convert the temperature to the Kelvin scale (t6)', t => {
  const result = string.kelvin('-100°F')
  t.deepEqual(result, '200K')
})

test('ltrim should remove all white space characters from the beginning of the string', t => {
  const result = string.ltrim('   qwe')
  t.deepEqual(result, 'qwe')
})

test('ltrim should remove all white space characters only from the beginning of the string', t => {
  const result = string.ltrim('   qwe  ')
  t.deepEqual(result, 'qwe  ')
})

test('ltrim should remove all specified characters regardless of the order of occurrence from the beginning of the string', t => {
  const result = string.ltrim('-_-qwe-_-', '_-')
  t.deepEqual(result, 'qwe-_-')
})

test('rtrim should remove all white space characters from the end of the string', t => {
  const result = string.rtrim('qwe   ')
  t.deepEqual(result, 'qwe')
})

test('rtrim should remove all white space characters only from the end of the string', t => {
  const result = string.rtrim('  qwe   ')
  t.deepEqual(result, '  qwe')
})

test('rtrim should remove all specified characters regardless of the order of occurrence from the end of the string', t => {
  const result = string.rtrim('-_-qwe-_-', '_-')
  t.deepEqual(result, '-_-qwe')
})

test('uid generates a new id', assert => {
  assert.deepEqual(string.uid().length, 32)
})

test('uid can create ids with given length', assert => {
  assert.deepEqual(string.uid(5).length, 5)
})

test('bytes should convert the string with specific unit to bytes', assert => {
  assert.deepEqual(string.bytes('1B'), 1)
  assert.deepEqual(string.bytes('2B'), 2)
  assert.deepEqual(string.bytes('1KB'), 1024)
  assert.deepEqual(string.bytes('2KB'), 2048)
  assert.deepEqual(string.bytes('400KB'), 409600)
  assert.deepEqual(string.bytes('2GB'), 2147483648)
  assert.deepEqual(string.bytes('2TB'), 2199023255552)
  assert.deepEqual(string.bytes('2PB'), 2251799813685248)
  assert.deepEqual(string.bytes('2EB'), 2305843009213694000)
  assert.deepEqual(string.bytes('2ZB'), 2.3611832414348226e+21)
  assert.deepEqual(string.bytes('2YB'), 2.4178516392292583e+24)
  assert.deepEqual(string.bytes('20YB'), 2.4178516392292583e+25)
  assert.deepEqual(string.bytes('200YB'), 2.4178516392292583e+26)
})
