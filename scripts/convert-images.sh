#!/bin/sh
echo "Converting JPEG images from \"scripts/input/\"..."
mkdir -p scripts/output/

# Use ImageMagick to convert JPEG images: https://imagemagick.org
# On macOS it can be installed via Homebrew: brew install imagemagick
magick convert 'scripts/input/*.jpg[1920x3840]' -quality 80 -set filename:basename "%[basename]" "scripts/output/%[filename:basename].jpg"
echo "Done: JPEG images converted and located at \"scripts/output/\""
