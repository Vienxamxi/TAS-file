````markdown
# 🎬 TAS File (Text Advance Subtitle)

**TAS File** is a lightweight and flexible Node.js package that allows you to **create and read `.tas` (Text Advance Subtitle)** files for use in video subtitling. It supports advanced text formatting such as bold, italic, underline, and positioning.

---

## 📦 Installation

```bash
npm install tas-file
````

---

## 🚀 Usage

### Example: Create a `.tas` Subtitle File

```js
const createTASFile = require('tas-file');

createTASFile({
  title: "Demo TAS Subtitle",
  style: {
    Fontsize: 24,
    Color: 'blue',
    Bold: true,
    Italic: false,
    Underline: true
  },
  subtitles: [
    {
      start: "00:00:00.000",
      end: "00:00:10.000",
      text: "Hello, this is the first subtitle."
    },
    {
      start: "00:00:10.000",
      end: "00:00:20.000",
      text: "{\\i}Italic subtitle{/i}"
    },
    {
      start: "00:00:20.000",
      end: "00:00:30.000",
      text: "{\\u}Underline subtitle{/u}"
    },
    {
      start: "00:00:30.000",
      end: "00:00:40.000",
      text: "{\\b}Bold subtitle{/b}"
    }
  ]
}, 'output.tas');
```

> The output will be saved as `output.tas` in your current directory.

---

## 🎨 Style Configuration

You can set global styles for your `.tas` file using the following properties:

| Property    | Description     | Example          |
| ----------- | --------------- | ---------------- |
| `Fontsize`  | Font size       | `20`, `24`, etc. |
| `Color`     | Font color      | `red`, `blue`    |
| `Bold`      | Bold text       | `true` / `false` |
| `Italic`    | Italic text     | `true` / `false` |
| `Underline` | Underlined text | `true` / `false` |

---

## 🔣 Inline Text Formatting Tags

You can apply inline styles using formatting tags inside the `text` field:

| Tag              | Meaning         |
| ---------------- | --------------- |
| `{\\i}...{/i}`   | Italic text     |
| `{\\b}...{/b}`   | Bold text       |
| `{\\u}...{/u}`   | Underlined text |
| `{\\on}...{/on}` | Top center      |
| `{\\un}...{/un}` | Bottom center   |
| `{\\lf}...{/lf}` | Left center     |
| `{\\rt}...{/rt}` | Right center    |
| `{\\ul}...{/ul}` | Bottom left     |
| `{\\ur}...{/ur}` | Bottom right    |
| `{\\ol}...{/ol}` | Top left        |
| `{\\or}...{/or}` | Top right       |

You can combine tags with `\n` for multiline effects:

```js
text: "{\\i}This is italic line 1{/i}\nLine 2 continues here."
```

---

## 📁 File Format (Generated `.tas` File)

Here is an example structure of the generated `.tas` file:

```
TAS
[Script Info]
Info: This is a Text Advance Subtitle script.
Title: Demo TAS Subtitle
ScriptType: 1.0+

[Ver1 Styles]
Format: Fontsize, Color, Bold, Italic, Underline
Style: Default, 24, blue, true, false, true

[Script]
1. 00:00:00.000 --> 00:00:10.000,,Hello, this is the first subtitle.
2. 00:00:10.000 --> 00:00:20.000,,{\i}Italic subtitle{/i}
3. 00:00:20.000 --> 00:00:30.000,,{\u}Underline subtitle{/u}
```

---

## 🤝 Contributing

Want to improve this package? Pull requests and feedback are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 👨‍💻 Author

**Progamingsang**

---

## 🔗 Repository

GitHub: [https://github.com/Vienxamxi/TAS-file](https://github.com/Vienxamxi/TAS-file)

---
## 📄 License

````
Copyright (c) 2025 by Vienxamxi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
