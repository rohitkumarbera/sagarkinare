from PIL import Image
import os

logo_path = r"d:\Sagarkinare\public\images\original\sagar_kinare_logo_transparent.png"
orig_logo_path = r"d:\Sagarkinare\public\images\original\sagar_kinare_logo.png"

if os.path.exists(logo_path):
    img = Image.open(logo_path)
    print("Transparent Logo Size:", img.size)
    
    # Get bounding box of non-zero alpha
    bbox = img.getbbox()
    print("Bounding Box of transparent logo:", bbox)
    if bbox:
        cropped_img = img.crop(bbox)
        # Save crisp trimmed logo
        trimmed_path = r"d:\Sagarkinare\public\images\original\sagar_kinare_logo_trimmed.png"
        cropped_img.save(trimmed_path, "PNG")
        print(f"Saved trimmed logo to {trimmed_path} with size {cropped_img.size}")

if os.path.exists(orig_logo_path):
    img_orig = Image.open(orig_logo_path)
    print("Original Logo Size:", img_orig.size)
