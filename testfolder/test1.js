const fs = require('fs').promises;

async function readFileContent(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}
readFileContent('file1.txt');
readFileContent('void.txt');
readFileContent('nonexistent-file.txt');