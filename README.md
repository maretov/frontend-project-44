### Hexlet tests and linter status: [![Actions Status](https://github.com/maretov/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/maretov/frontend-project-44/actions) 
### Codeclimate status: [![Maintainability](https://api.codeclimate.com/v1/badges/f33d4e0a4673df93a057/maintainability)](https://codeclimate.com/github/maretov/frontend-project-44/maintainability)


# The first educational project "Brain-games"
This repository is the first project in the [Hexlet](hexlet.io) online programming school. It implements 5 math console games that run on Linux in a bash.


## Requirements:
- a computer
- os linux
- nodejs version 13.2.0 or higher
- git any version
- utilite "make" any version 


## Install and test:
1) Clone this repository:
```
  git clone https://github.com/maretov/frontend-project-44.git
```
2) Go to directory "frontend-project-44"
```
  cd ./frontend-project-44/
```
3) Install dependencies:
```
  make install
```
4) Install package as local in your OS (you may need to use sudo):
```
  npm link
```
5) Use this command to check if the games are running:
```
  brain-games
```
the following message should appear in the console:
```
  Welcome to the Brain Games!
  May I have your name? // Type your name and press Enter
  Hello, ${your name}!
```
*See how to install and test:*
[![asciicast](https://asciinema.org/a/574874.svg)](https://asciinema.org/a/574874)


## LET's PLAY!
**All games require three correct answers to win**


1. First game is "brain-even".  
The computer shows the number. The player must enter "yes" if the number is even. Otherwise enter "no".  
[![asciicast](https://asciinema.org/a/571147.svg)](https://asciinema.org/a/571147)


2.  Secomd game is "brain-calc".  
The computer shows a mathematical expression. The player must calculate it and enter the answer.
[![asciicast](https://asciinema.org/a/571148.svg)](https://asciinema.org/a/571148)


3. Third game is "brain-gcd".
The computer shows two random numbers. The player must calculate and enter the greatest common divisor of these numbers.
[![asciicast](https://asciinema.org/a/574877.svg)](https://asciinema.org/a/574877)


4. Fourth game is "brain-progression".
The computer shows a series of numbers forming an arithmetic progression, replacing any of the numbers with two dots. The player must determine and enter this number.
[![asciicast](https://asciinema.org/a/571446.svg)](https://asciinema.org/a/571446)


5. Fifth game is "brain-prime".
The computer shows the number. The player must enter "yes" if given number is prime. Otherwise enter "no".
[![asciicast](https://asciinema.org/a/571459.svg)](https://asciinema.org/a/571459)
