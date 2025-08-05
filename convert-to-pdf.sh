#!/bin/bash

echo "🚀 Converting Deployment Guide to PDF..."

# Check if pandoc is installed
if ! command -v pandoc &> /dev/null; then
    echo "❌ Pandoc is not installed. Installing..."
    sudo apt-get update
    sudo apt-get install -y pandoc texlive-xetex
fi

# Check if we're in the right directory
if [ ! -f "DEPLOYMENT_GUIDE_PDF.md" ]; then
    echo "❌ DEPLOYMENT_GUIDE_PDF.md not found in current directory"
    exit 1
fi

# Convert markdown to PDF
echo "📄 Converting DEPLOYMENT_GUIDE_PDF.md to PDF..."
pandoc DEPLOYMENT_GUIDE_PDF.md \
    -o "Portfolio_Deployment_Guide.pdf" \
    --pdf-engine=xelatex \
    -V geometry:margin=1in \
    -V fontsize=11pt \
    -V mainfont="DejaVu Sans" \
    -V monofont="DejaVu Sans Mono" \
    --toc \
    --toc-depth=2

if [ $? -eq 0 ]; then
    echo "✅ Successfully created Portfolio_Deployment_Guide.pdf"
    echo "📁 File location: $(pwd)/Portfolio_Deployment_Guide.pdf"
    echo "📏 File size: $(du -h Portfolio_Deployment_Guide.pdf | cut -f1)"
else
    echo "❌ Failed to create PDF"
    exit 1
fi

echo ""
echo "🎯 PDF Guide Created Successfully!"
echo "📖 You can now download and share this PDF guide"
echo "💡 The guide contains all steps for deploying your portfolio" 