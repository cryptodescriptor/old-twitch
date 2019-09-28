with open('input.txt', 'r') as input:
  txt = input.read().replace('\n', '')

delim = ' '

def process(char):
  return ':style(' if char == '{' else ')\n' if char == '}' else char

characters = [process(char) for char in txt]

out = ''.join(characters).replace('{0}:style({0}{0}'.format(delim), ':style(')

prefixed = ''

for line in out.rstrip('\n ').split('\n'):
  prefixed += 'twitch.tv##' + line + '\n'

with open('out.txt', 'w') as out:
  out.write(prefixed)