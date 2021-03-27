// extract file name

// https://www.codewars.com/kata/597770e98b4b340e5b000071

// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// You'll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommended way to solve it is using RegEx and specifically groups.

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let leftPart = dirtyFileName.slice(0, dirtyFileName.indexOf("."));
    let rightPart = dirtyFileName.slice(dirtyFileName.indexOf("."));
    leftPart = leftPart.slice(leftPart.indexOf("_") + 1);
    rightPart = rightPart.slice(0, rightPart.lastIndexOf("."));
    return leftPart + rightPart;
  }
}

// Best practice and clever solution:

// class FileNameExtractor {

//   static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];

// }
