#!/bin/bash

# 🚀 Portfolio Upload Helper Script
echo "🚀 Portfolio Upload Helper"
echo "=========================="

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found!"
    echo "Please run 'npm run build' first"
    exit 1
fi

echo "✅ Build files found in dist/ folder"
echo ""
echo "📁 Files ready for upload:"
ls -la dist/
echo ""
echo "📁 Assets folder contents:"
ls -la dist/assets/
echo ""

echo "🎯 Next Steps:"
echo "1. Upload all files from dist/ folder to your hosting public_html/"
echo "2. Configure subdomain DNS in Namecheap dashboard"
echo "3. Wait for DNS propagation (up to 24 hours)"
echo ""
echo "📋 Upload Checklist:"
echo "   ✅ portfolio-usamashakeel.html → public_html/portfolio-usamashakeel.html"
echo "   ✅ assets/ → public_html/assets/"
echo "   ✅ Usama_Shakeel_CV.pdf → public_html/Usama_Shakeel_CV.pdf"
echo ""
echo "🌐 Your portfolio will be live at: usama.yourdomain.com"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions" 