#!/usr/bin/env python3
"""Generate all favicon sizes from an SVG source using Pillow + cairosvg fallback."""

import struct
import zlib
import math
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public')

def make_png_bytes(size):
    """
    Programmatically render the DesignX favicon (blue rounded square + white lightning bolt)
    at the given pixel size and return raw PNG bytes.
    """
    from PIL import Image, ImageDraw

    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Rounded square background — #0056D6
    radius = max(2, round(size * 0.22))
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=(0, 86, 214, 255))

    # Lightning bolt polygon (normalised coords 0-1, matches SVG)
    # SVG viewBox 0 0 100 100
    # points: 58,10  30,55  50,55  42,90  70,45  50,45
    raw = [(58,10),(30,55),(50,55),(42,90),(70,45),(50,45)]
    scaled = [(round(x / 100 * size), round(y / 100 * size)) for x, y in raw]
    draw.polygon(scaled, fill=(255, 255, 255, 255))

    import io
    buf = io.BytesIO()
    img.save(buf, format='PNG')
    return buf.getvalue()


def main():
    sizes = {
        'favicon-16x16.png': 16,
        'favicon-32x32.png': 32,
        'apple-touch-icon.png': 180,
        'favicon-192x192.png': 192,
    }

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for filename, size in sizes.items():
        path = os.path.join(OUTPUT_DIR, filename)
        data = make_png_bytes(size)
        with open(path, 'wb') as f:
            f.write(data)
        print(f'  ✓ {filename} ({size}x{size})')

    # favicon.ico — embed 16 and 32 px frames
    from PIL import Image
    import io

    frames = []
    for size in [16, 32]:
        png_data = make_png_bytes(size)
        frames.append(Image.open(io.BytesIO(png_data)))

    ico_path = os.path.join(OUTPUT_DIR, 'favicon.ico')
    frames[0].save(ico_path, format='ICO', sizes=[(16,16),(32,32)], append_images=frames[1:])
    print(f'  ✓ favicon.ico (16+32 px)')

if __name__ == '__main__':
    main()
