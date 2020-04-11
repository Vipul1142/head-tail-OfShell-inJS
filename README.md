### HEAD and TAIL funtionality of terminal in Node.js

`tead` is a command in shell(terminal) to print first n lines of referenced file.
  - synopsis `head -nN filename`
`tail` is a command in shell(terminal) to print first n lines of referenced file.
  - synopsis `tail -nN filename`
  
Input for the file could be in any one of the following syntax.

- [x] `node head.js file.txt`     ->  print first 10 lines of the given file.
- [x] `node head.js NOFILE`       ->  Print "head: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node head.js -N file.txt`  ->  Print first N lines of the given file.
- [x] `node head.js -N NOFILE`    ->  Print "head: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node head.js -a file.txt`  ->  Print "head: invalid number of lines: 'a'".
- [x] `node head.js -nN file.txt` ->  Print first N lines of the given file.
- [x] `node head.js -nN NOFile`   ->  Print "head: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node head.js -na file.txt` ->  Print "head: invalid number of lines: 'a'".

- [x] `node tail.js file.txt`     ->  print last 10 lines of the given file.
- [x] `node tail.js NOFILE`       ->  Print "tail: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node tail.js -N file.txt`  ->  Print last N lines of the given file.
- [x] `node tail.js -N NOFILE`    ->  Print "tail: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node tail.js -a file.txt`  ->  Print "tail: invalid number of lines: 'a'".
- [x] `node tail.js -nN file.txt` ->  Print last N lines of the given file.
- [x] `node tail.js -nN NOFile`   ->  Print "tail: cannot open 'NOFILE' for reading: No such file or directory".
- [x] `node tail.js -na file.txt` ->  Print "tail: invalid number of lines: 'a'".