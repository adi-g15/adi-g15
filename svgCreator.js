const {writeFile, mkdir} = require('fs').promises

let folderName = 'outputSVGs'
mkdir(folderName)

for (let i = 1; i <= 100; ++i) {
    let svgContent = `<svg height="15" width="250" xmlns::xlink="http://www.w3.org/1999/xlink"">
        <a xlink:href="https://github.com/AdityaGupta150/100DaysOfCode" target="_blank">
            <text x="0" y="15" fill="red">#${i}</text>
        </a>
    </svg>`
    writeFile(`${folderName}/${i}.svg`, svgContent)
        .then(() => console.log('🎉 Done!!'))
        .catch(err => console.error('Some error occurred ! 😄'))
}
