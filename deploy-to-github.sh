#!/bin/bash

echo "🚀 Portfolio GitHub Deployment Helper"
echo "===================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore file..."
    cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db
EOF
    echo "✅ .gitignore created"
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Commit if there are changes
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    git commit -m "Portfolio update - $(date)"
    echo "✅ Changes committed"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Create a GitHub repository at github.com/yourusername/portfolio"
echo "2. Run these commands:"
echo "   git remote add origin https://github.com/yourusername/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Deploy to your preferred platform:"
echo "   - Netlify: Drag dist/ folder to netlify.com"
echo "   - Vercel: Connect GitHub repository"
echo "   - GitHub Pages: Enable in repository settings"
echo ""
echo "4. Set up custom domain: usama.yourdomain.com"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions" 