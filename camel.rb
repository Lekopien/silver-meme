def camelcase(s)
  words = s.split
  # capitalize the first letter of each word except for the first one, and join them together
  words.map.with_index { |word, index| index == 0 ? word : word.capitalize }.join
end

# example usage:
puts camelcase("hello case") # output: "HelloCase"
puts camelcase("camel case word") # output: "CamelCaseWord"
