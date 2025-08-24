const fs = require('fs');
const TASBuilder = require('./app');

function createTASFile(options, outputFilename = 'output.tas') {
    const builder = new TASBuilder(options.title);

    if (options.style) {
        builder.setStyle(options.style);
    }

    if (options.subtitles && Array.isArray(options.subtitles)) {
        options.subtitles.forEach((s) => {
            builder.addSubtitle(s.start, s.end, s.text);
        });
    }

    const tasContent = builder.build();

    fs.writeFileSync(outputFilename, tasContent, 'utf8');
    console.log(`✅ File "${outputFilename}" has been created.`);
}

module.exports = createTASFile;
