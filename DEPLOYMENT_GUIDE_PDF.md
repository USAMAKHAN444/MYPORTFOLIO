# 🚀 Complete Portfolio Deployment Guide
## Step-by-Step Instructions for Deploying Your Portfolio

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Prepare Your Project](#step-1-prepare-your-project)
3. [Step 2: Deploy to GitHub](#step-2-deploy-to-github)
4. [Step 3: Deploy to Vercel](#step-3-deploy-to-vercel)
5. [Step 4: Configure Custom Domain](#step-4-configure-custom-domain)
6. [Step 5: Test Your Deployment](#step-5-test-your-deployment)
7. [Step 6: Troubleshooting](#step-6-troubleshooting)
8. [Step 7: Update Your Portfolio](#step-7-update-your-portfolio)
9. [Step 8: Final Checklist](#step-8-final-checklist)

---

## ✅ Prerequisites

Before starting, ensure you have:
- ✅ Your portfolio project is ready
- ✅ A GitHub account
- ✅ A domain (like `quantiaxionix.info`)
- ✅ Node.js and npm installed

---

## 🛠️ Step 1: Prepare Your Project

### 1.1 Navigate to Your Project Directory
```bash
cd /path/to/your/project
```

### 1.2 Install Dependencies
```bash
npm install
```

### 1.3 Build Your Project
```bash
npm run build
```

**Expected Output:**
```
✓ built in 21.29s
dist/portfolio-usamashakeel.html    0.82 kB │ gzip:  0.44 kB
dist/assets/main-BD4wmhpy.css      28.33 kB │ gzip:  5.57 kB
dist/assets/main-BtL7wLIi.js      193.26 kB │ gzip: 56.56 kB
```

### 1.4 Verify Build Files
```bash
ls -la dist/
```

**Expected Files:**
- `portfolio-usamashakeel.html`
- `assets/` folder
- `Usama_Shakeel_CV.pdf`

---

## 📁 Step 2: Deploy to GitHub

### 2.1 Initialize Git Repository
```bash
git init
```

### 2.2 Add All Files to Git
```bash
git add .
```

### 2.3 Make Initial Commit
```bash
git commit -m "Initial portfolio commit"
```

### 2.4 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"New repository"**
3. Name it: `MYPORTFOLIO`
4. Make it **Public**
5. Click **"Create repository"**

### 2.5 Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/USAMAKHAN444/MYPORTFOLIO.git
git branch -M main
git push -u origin main
```

### 2.6 Verify GitHub Upload
- Go to: `https://github.com/USAMAKHAN444/MYPORTFOLIO`
- Check that all files are uploaded correctly

---

## ☁️ Step 3: Deploy to Vercel

### 3.1 Access Vercel Dashboard
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sign in with your GitHub account
3. Click **"New Project"**

### 3.2 Import from GitHub
1. Click **"Import Git Repository"**
2. Find and select: `USAMAKHAN444/MYPORTFOLIO`
3. Click **"Import"**

### 3.3 Configure Project Settings
Set these values exactly:

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Vite` |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### 3.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for deployment
3. Note your Vercel URL (e.g., `myportfolio-2le2.vercel.app`)

---

## 🌐 Step 4: Configure Custom Domain

### 4.1 Add Domain in Vercel
1. Go to your project dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Click **"Add Domain"**
5. Enter: `usama.quantiaxionix.info`
6. Click **"Add"**

### 4.2 Configure DNS Records in Namecheap

**Step 4.2.1: Access Namecheap Dashboard**
1. Go to [namecheap.com](https://namecheap.com)
2. Sign in to your account
3. Go to **"Domain List"**
4. Find `quantiaxionix.info`
5. Click **"Manage"**

**Step 4.2.2: Access DNS Settings**
1. Click **"Advanced DNS"** tab
2. Scroll down to **"Host Records"**

**Step 4.2.3: Add CNAME Record**
1. Click **"Add New Record"**
2. Set **Type:** `CNAME Record`
3. Set **Host:** `usama`
4. Set **Value:** `cname.vercel-dns.com`
5. Set **TTL:** `Automatic`
6. Click **"Save"**

**Step 4.2.4: Add TXT Record (if needed)**
1. Click **"Add New Record"**
2. Set **Type:** `TXT Record`
3. Set **Host:** `_vercel`
4. Set **Value:** `vc-domain-verify=usama.quantiaxionix.info,49eda6466e216c996d46`
5. Set **TTL:** `Automatic`
6. Click **"Save"**

### 4.3 Wait for DNS Propagation
- **Time Required:** 5-30 minutes
- **Check Status:** Go back to Vercel dashboard
- **Success Indicator:** Domain shows "Valid Configuration"

---

## 🧪 Step 5: Test Your Deployment

### 5.1 Test All URLs
Try these URLs in your browser:

| URL | Expected Result |
|-----|----------------|
| `https://usama.quantiaxionix.info/` | ✅ Portfolio loads (clean URL) |
| `https://usama.quantiaxionix.info/portfolio-usamashakeel.html` | ✅ Portfolio loads (backup) |
| `https://myportfolio-2le2.vercel.app/` | ✅ Portfolio loads (Vercel default) |

### 5.2 Verify Portfolio Features
Check that these features work:

- ✅ **Light/Dark Mode Toggle** - Click the sun/moon icon in header
- ✅ **Infinite Horizontal Scroll** - Skills section scrolls automatically
- ✅ **Updated Phone Number** - Shows `+92 3055620643`
- ✅ **Colorful Text Gradients** - "AI Engineer" and description have colors
- ✅ **Responsive Design** - Works on mobile and desktop

### 5.3 Test Contact Links
- ✅ **WhatsApp Link** - Opens with correct number
- ✅ **Email Link** - Opens email client
- ✅ **CV Download** - Downloads your resume

---

## 🔧 Step 6: Troubleshooting

### 6.1 Common Issues and Solutions

**Issue: 404 Error**
```bash
# Solution: Check build files
ls -la dist/
# Should show: portfolio-usamashakeel.html, assets/, etc.
```

**Issue: Domain Shows "Verification Needed"**
- Check DNS records are correct
- Wait 5-30 minutes for propagation
- Verify TXT record is added

**Issue: Portfolio Shows Blank Page**
- Check Vercel deployment logs
- Verify `vercel.json` configuration
- Ensure all files are in `dist/` folder

**Issue: Build Errors**
```bash
# Solution: Check for errors
npm run build
# Fix any errors shown
```

### 6.2 Vercel Configuration File
Your `vercel.json` should look like this:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/portfolio-usamashakeel.html"
    }
  ]
}
```

---

## 📝 Step 7: Update Your Portfolio

### 7.1 Make Changes Locally
```bash
# Edit your files
nano src/components/Hero.tsx
# or use your preferred editor
```

### 7.2 Build and Deploy Changes
```bash
npm run build
git add .
git commit -m "Update portfolio content"
git push
```

**Vercel will auto-deploy in 2-3 minutes**

### 7.3 Verify Updates
- Check your live site after deployment
- Test all features still work
- Verify changes appear correctly

---

## ✅ Step 8: Final Checklist

### Domain Configuration
- [ ] Custom domain added to Vercel
- [ ] DNS records configured correctly
- [ ] Domain shows "Valid Configuration"
- [ ] No "Verification Needed" status

### Portfolio Features
- [ ] Light/Dark mode works
- [ ] Skills section scrolls infinitely
- [ ] Phone number is correct (+92 3055620643)
- [ ] All sections display properly
- [ ] Contact links work correctly

### URLs Working
- [ ] `https://usama.quantiaxionix.info/` (clean URL)
- [ ] `https://usama.quantiaxionix.info/portfolio-usamashakeel.html` (backup)
- [ ] `https://myportfolio-2le2.vercel.app/` (Vercel default)

### Performance
- [ ] Page loads quickly
- [ ] Images display correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive

---

## 🎯 Your Portfolio URLs

### Primary Domain
- **Main URL:** `https://usama.quantiaxionix.info/`

### Backup URLs
- **Backup 1:** `https://usama.quantiaxionix.info/portfolio-usamashakeel.html`
- **Backup 2:** `https://myportfolio-2le2.vercel.app/`

---

## 📞 Support Information

### Your Project Details
- **GitHub Repository:** `USAMAKHAN444/MYPORTFOLIO`
- **Vercel Project:** `myportfolio-2le2`
- **Custom Domain:** `usama.quantiaxionix.info`
- **Framework:** Vite + React + TypeScript

### Useful Commands
```bash
# Build project
npm run build

# Start development server
npm run dev

# Check Git status
git status

# Push changes
git add . && git commit -m "Update" && git push
```

---

## 🚀 Congratulations!

Your portfolio is now live and accessible at your custom domain! 

**Key Features Deployed:**
- ✅ Professional AI Engineer portfolio
- ✅ Light/Dark mode toggle
- ✅ Infinite horizontal scroll for skills
- ✅ Updated contact information
- ✅ Colorful gradient text effects
- ✅ Responsive design for all devices
- ✅ Custom domain with clean URL

**Next Steps:**
1. Share your portfolio URL with potential employers
2. Update content as needed using the deployment process
3. Monitor Vercel dashboard for any issues
4. Consider adding analytics to track visitors

---

*This guide covers the complete deployment process for your portfolio. Keep this document for future reference when updating your site.* 