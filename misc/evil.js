function WriteFile()
{

var fh = fopen("http://aozakiaoko.github.io/misc/data.txt", 3); // Open the file for writing

if(fh!=-1) // If the file has been successfully opened
{
    var str = "Some text goes here...";
    fwrite(fh, str); // Write the string to a file
    fclose(fh); // Close the file 
}

}

$(document).ready(WriteFile());