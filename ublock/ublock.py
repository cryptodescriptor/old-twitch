with open('input.txt', 'r') as input:
  txt = input.read().replace('\n', '')

delim = ' '

prefix = 'twitch.tv##'

def process(char):
  return ':style(' if char == '{' else ')\n{0}'.format(prefix) if char == '}' else char

characters = [process(char) for char in txt]

out = prefix + ''.join(characters).replace('{0}:style({0}{0}'.format(delim), ':style(')

with open('out.txt', 'w') as outfile:
  outfile.write(out.rstrip('\ntwitch.tv##'))
