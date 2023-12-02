function file(path) {

    let fileInfo = path.split('\\').pop();
    let lastDotIndex = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.slice(0,lastDotIndex);
    let fileExt = fileInfo.slice(lastDotIndex+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

file('C:\\Internal\\training-internal\\Template.pptx');
// file('C:\\Projects\\Data-Structures\\LinkedList.cs');