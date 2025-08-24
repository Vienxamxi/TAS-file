class TASBuilder {
    constructor(title = "Untitled TAS File") {
        this.title = title;
        this.styles = {
            Fontsize: 20,
            Color: "red",
            Bold: false,
            Italic: false,
            Underline: false,
        };
        this.subtitles = [];
    }

    setStyle({ Fontsize, Color, Bold, Italic, Underline }) {
        if (Fontsize !== undefined) this.styles.Fontsize = Fontsize;
        if (Color !== undefined) this.styles.Color = Color;
        if (Bold !== undefined) this.styles.Bold = Bold;
        if (Italic !== undefined) this.styles.Italic = Italic;
        if (Underline !== undefined) this.styles.Underline = Underline;
    }

    addSubtitle(start, end, text) {
        this.subtitles.push({ start, end, text });
    }

    build() {
        let content = `TAS
[Script Info]
Info: This is a Text Advance Subtitle script.
Title: ${this.title}
ScriptType: 1.0+

[Ver1 Styles]
Format: Fontsize, Color, Bold, Italic, Underline
Style: Default, ${this.styles.Fontsize}, ${this.styles.Color}, ${this.styles.Bold}, ${this.styles.Italic}, ${this.styles.Underline}

[Script]
`;

        this.subtitles.forEach((item, index) => {
            content += `${index + 1}. ${item.start} --> ${item.end},,${item.text}\n`;
        });

        return content;
    }
}

module.exports = TASBuilder;
