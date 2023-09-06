function MsgBox(message, title="VBscript by js") {
  let window = window.open(`https://msgbox-vbjs.esdraslov.repl.co/?msg=${message}&title=${title}`)
  return window
}
