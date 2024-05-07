import fs, { writeFileSync } from 'fs';
import path from 'path';

const paths = {
  fonts: path.join(process.cwd(), "src", "assets", "fonts"),
  styles: path.join(process.cwd(), "src", "assets", "styles", "fonts.scss")
}
if(!fs.existsSync(paths.fonts))
  fs.mkdirSync(paths.fonts)
if(!fs.existsSync(paths.styles.replace("\\fonts.scss", "")))
  fs.mkdirSync(paths.styles.replace("\\fonts.scss", ""))
if(!fs.existsSync(paths.styles))
  fs.writeFileSync(paths.styles, "// Auto-include fonts at `../fonts with npm run fonts`\n", 'utf-8')

const fonts = fs.readdirSync(paths.fonts);
let styles = fs.readFileSync(paths.styles, 'utf-8');

const createFont = (fontName: string) => `
@font-face {
  font-family: "${fontName.replace(/\.svg|\.eot|\.ttf|\.woff/g, "")}";
  src: url("../fonts/${fontName}");
}
`

const deleteNotFoundFonts = async () => {
  return new Promise<void>(resolve => {
    const fontPattern = /font-family:\s*\"([^\"]+)\"/g;
    const matches = [...styles.matchAll(fontPattern)];
    if (matches) {
      const fontFamilies = matches.map(match => match[1]);
      for (const fontFamily of fontFamilies) {
        if(!fonts.map(font => font.replace(".ttf", "")).includes(fontFamily)) {
          const findPattern = new RegExp(`@font-face\\s*{\\s*font-family:\\s*"${fontFamily}";[\\s\\S]*?\\}`, 'g')
          styles = styles.replace(findPattern, "")
        }
      }
    }
    resolve()
  })

}

const createFonts = async() => {
  return new Promise<void>(resolve => {
    const fontPattern = /@font-face[^}]*\}/g;
    for (const font of fonts) {
      const matches = styles.matchAll(fontPattern)
      let lastMatch;
      for (const match of matches) {
        lastMatch = match;
      }
      if (lastMatch) {
        const lastIndex = lastMatch.index + lastMatch[0].lastIndexOf("}") + 1;
        const beforeMatch =  styles.slice(0, lastIndex);
        const afterMatch = styles.slice(lastIndex);
        if (!styles.includes(font))
          styles = beforeMatch + `\n${createFont(font)}`+ afterMatch;
      } else {
        console.log(styles)
        styles += `\n${createFont(font)}`;
      }
    }
    resolve()
  })
}

deleteNotFoundFonts().then(() => {
  createFonts().then(() => {
    writeFileSync(paths.styles, styles.trimEnd());
  })
})

