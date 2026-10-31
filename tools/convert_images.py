from pathlib import Path
from PIL import Image
import re

ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "images"
APP = ROOT / "js" / "app.js"

converted = []
original_total = 0
webp_total = 0

for source in sorted(IMAGES.iterdir()):
    if not source.is_file() or source.suffix.lower() not in {".jpg", ".jpeg"}:
        continue

    original_total += source.stat().st_size
    target = source.with_suffix(".webp")

    with Image.open(source) as image:
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGB")
        image.save(target, "WEBP", quality=82, method=6)

    # Reabre o arquivo para garantir que o WebP foi gravado corretamente.
    with Image.open(target) as check:
        check.verify()

    webp_total += target.stat().st_size
    converted.append((source.name, target.name, source.stat().st_size, target.stat().st_size))

code = APP.read_text(encoding="utf-8")
pattern = re.compile(r'("imageSrc"\s*:\s*"\./images/[^"]+)\.(?:jpg|jpeg)(")')
updated_code, replacements = pattern.subn(r'\1.webp\2', code)

if replacements != 28:
    raise RuntimeError(
        f"Esperava atualizar 28 caminhos de imagem no app.js, mas encontrei {replacements}. "
        "Nenhum caminho foi gravado."
    )

APP.write_text(updated_code, encoding="utf-8")

print(f"Imagens convertidas: {len(converted)}")
print(f"Caminhos atualizados: {replacements}")
print(f"Peso original: {original_total / 1024:.1f} KB")
print(f"Peso WebP: {webp_total / 1024:.1f} KB")
if original_total:
    reduction = (1 - webp_total / original_total) * 100
    print(f"Redução total: {reduction:.1f}%")
print("\nDetalhamento:")
for old, new, old_size, new_size in converted:
    reduction = (1 - new_size / old_size) * 100 if old_size else 0
    print(f"- {old} -> {new}: {old_size / 1024:.1f} KB -> {new_size / 1024:.1f} KB ({reduction:.1f}%)")
