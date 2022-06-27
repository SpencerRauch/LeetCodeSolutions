# /*
# This is a staircase of size n=4:
#    #
#   ##
#  ###
# ####
# Its base and height are both equal to n. 
# It is drawn using # symbols and spaces. 
# The last line is not preceded by any spaces.
# The staircase is right-aligned.
# Write a program that prints a staircase of size n.
# */

def staircase(n):
   for i in range(n):
      spaces = " " * (n-1-i)
      symbols = "#" * (i+1)
      print(spaces+symbols)

staircase(4)

