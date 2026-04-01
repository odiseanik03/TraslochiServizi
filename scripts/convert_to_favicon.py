from PIL import Image, ImageDraw

# Open the source image
img = Image.open("public/images/hero-image.jpeg").convert("RGBA")

# Resize to 48x48 (favicon standard size)
img = img.resize((48, 48), Image.LANCZOS)

# Create a circular mask
mask = Image.new('L', (48, 48), 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, 48, 48), fill=255)

# Apply the mask to make the image circular
output = Image.new('RGBA', (48, 48), (0, 0, 0, 0))
output.paste(img, (0, 0), mask)

# Add a white border for better visibility
border_size = 3
border = Image.new('RGBA', (48, 48), (0, 0, 0, 0))
border_draw = ImageDraw.Draw(border)
border_draw.ellipse((0, 0, 47, 47), fill=None, outline=(255, 255, 255, 255), width=border_size)
output = Image.alpha_composite(output, border)

# Save as favicon.ico in both locations
output.save("public/favicon.ico", format="ICO")
output.save("app/favicon.ico", format="ICO")
print("Circular favicon with border generated successfully.")
