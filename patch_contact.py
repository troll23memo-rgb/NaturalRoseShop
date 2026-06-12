from pathlib import Path
path = Path('styles.css')
text = path.read_text(encoding='utf-8')
needle = '  margin-bottom: 4px;\n}\n.contact-map iframe'
replacement = '  margin-bottom: 4px;\n}\n.contact-info a:hover {\n  color: var(--rose);\n}\n.contact-map {\n  min-height: 360px;\n}\n.contact-map iframe'
if needle not in text:
    raise RuntimeError('needle not found')
text = text.replace(needle, replacement, 1)
# add responsive footer wrap
needle2 = 'footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}'
replacement2 = 'footer .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}'
if needle2 not in text:
    raise RuntimeError('footer needle not found')
text = text.replace(needle2, replacement2, 1)
path.write_text(text, encoding='utf-8')
print('patched styles.css')
