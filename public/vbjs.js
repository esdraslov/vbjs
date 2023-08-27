function MsgBox(message, title="VBscript by js") {
  let window = window.open(`https://esdraslov.github.io/vbjs/popup?msg=${message}&title=${title}`) // i dont know how i make the arg detect ;-;
  return window
}
