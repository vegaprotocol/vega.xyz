const fs = require('fs')
const path = require('path')

const languages = require('./languages.js')

const contentDirectories = [
  { path: 'src/content/articles', isPapers: false },
  { path: 'src/content/faqs', isPapers: false },
  { path: 'src/content/papers', isPapers: true },
]

function ensureLanguageFilesExist(contentDirectory) {
  const directoryPath = path.resolve(__dirname, contentDirectory.path)

  function recursiveDirectoryCheck(dirPath) {
    const items = fs.readdirSync(dirPath)

    items.forEach((item) => {
      const itemPath = path.join(dirPath, item)
      if (fs.statSync(itemPath).isDirectory()) {
        recursiveDirectoryCheck(itemPath)
      } else if (item.endsWith('.md')) {
        const englishFilePath = path.join(dirPath, 'index.en.md')
        if (fs.existsSync(englishFilePath)) {
          const englishContent = fs.readFileSync(englishFilePath, 'utf-8')
          languages.forEach((language) => {
            const languageFilePath = path.join(
              dirPath,
              `index.${language.code}.md`
            )
            if (!fs.existsSync(languageFilePath)) {
              fs.writeFileSync(languageFilePath, englishContent)
              console.log(`Created file: ${languageFilePath}`)
            }
          })
        }
      }
    })
  }

  recursiveDirectoryCheck(directoryPath)
}

contentDirectories.forEach((directory) => ensureLanguageFilesExist(directory))
