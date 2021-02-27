# Commands

#### echo "Sttring" print the string on shell
#### echo -n "String" to print on same line

``` 
 echo "User info for userid: $USER"
 echo UID: $UID
 echo HOME: $HOME
```
#### The $USER, $UID, and $HOME environment variables are used to display information about login user

####  \` allows you to assign the output of a shell command to a variable.
## [Redirection](https://www.guru99.com/linux-redirection.html#:~:text=Redirection%20is%20a%20feature%20in,input%20and%20give%20an%20output.&text=The%20standard%20output%20(stdout)%20device%20is%20the%20screen.)

## Output Redirection
#### '>' create a file and add the command output in it 
#### '>>' create a file and add the comand but if used again instead of modifying it appends 

## Input Redirection

####Input redirection is the opposite of output redirection. Instead of taking the output of acommand and redirecting it to a file, input redirection takes the content of a file and redirects it to a command.

#### symbol = '<'

#### There’s another method of input redirection, called inline input redirection. This method allowsyou to specify the data for input redirection on the command line instead of in a file.

#### symbol = ' << '

#### 'wc' Command get you count of text in the data . give no. of lines,words,bytes in text

## Piping

####Piping provides a way to link commands to provide more detailed output. Don’t think of piping as running two commands back to back though. The Linux system actually runs both commands at the same time, linking them together internally in the system. As the first command producesoutput, it’s sent immediately to the second command. No intermediate files or buffer areas are used to transfer the data.

## Maths 

#### we can perform Maths using expr command 

#### ex.```$ expr 1 + 5```

#### To assign the result of a mathematical equation to a variable, you have to use the backtick character to extract the output from the expr command:
#### bc command open calculator in bash to exit type quit 
