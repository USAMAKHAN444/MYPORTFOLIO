# 🚀 Portfolio Deployment Guide

## Your Portfolio is Ready for Deployment!

Your portfolio has been successfully built and is ready to deploy to your subdomain.

### 📁 Built Files Location
All your production files are in the `dist/` folder:
- `portfolio-usamashakeel.html` - Main HTML file
- `assets/` - CSS and JavaScript files
- `Usama_Shakeel_CV.pdf` - Your CV file

---

## 🎯 Deployment Options

### Option 1: Netlify (Recommended - Free)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `dist` folder to Netlify
3. Your site will be live instantly with a URL like `https://random-name.netlify.app`
4. To use your subdomain:
   - Go to Site Settings → Domain Management
   - Add custom domain: `usama.yourdomain.com`
   - Update your DNS settings in Namecheap

### Option 2: Vercel (Free & Fast)
1. Go to [vercel.com](https://vercel.com) and sign up
2. Connect your GitHub repository
3. Vercel will automatically deploy your site
4. Add custom domain in Vercel dashboard

### Option 3: Namecheap Hosting (Your Current Provider)
1. **Access your Namecheap hosting control panel**
2. **Upload files to public_html folder:**
   ```bash
   # Upload these files to your hosting:
   - dist/portfolio-usamashakeel.html → public_html/portfolio-usamashakeel.html
   - dist/assets/ → public_html/assets/
   - dist/Usama_Shakeel_CV.pdf → public_html/Usama_Shakeel_CV.pdf
   ```

3. **Create subdomain in Namecheap:**
   - Go to your Namecheap dashboard
   - Navigate to "Domain List" → Your Domain → "Manage"
   - Go to "Advanced DNS"
   - Add a CNAME record:
     - Host: `usama`
     - Value: `yourdomain.com` (or your hosting server)
     - TTL: Automatic

---

## 🔧 Manual Upload Instructions

### For Namecheap Hosting:
1. **Access your hosting control panel** (cPanel)
2. **Go to File Manager**
3. **Navigate to public_html folder**
4. **Upload all files from the `dist/` folder**
5. **Ensure file structure is:**
   ```
   public_html/
   ├── portfolio-usamashakeel.html
   ├── assets/
   │   ├── main-BtL7wLIi.js
   │   └── main-BD4wmhpy.css
   └── Usama_Shakeel_CV.pdf
   ```

### For Subdomain Setup:
1. **In Namecheap dashboard:**
   - Go to "Domain List" → Your Domain → "Manage"
   - Click "Advanced DNS"
   - Add CNAME record:
     - Host: `usama`
     - Value: `yourdomain.com`
     - TTL: Automatic

2. **Wait for DNS propagation** (can take up to 24 hours)

---

## 🌐 Final Result
Your portfolio will be accessible at:
- **Subdomain**: `https://usama.yourdomain.com`
- **Features**: All animations, light/dark mode, and responsive design

---

## 📞 Need Help?
- **Namecheap Support**: Available 24/7
- **Netlify/Vercel**: Excellent documentation and support
- **Technical Issues**: Check browser console for any errors

---

## ✅ Checklist
- [ ] Choose deployment platform
- [ ] Upload files to hosting
- [ ] Configure subdomain DNS
- [ ] Test website functionality
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test light/dark mode toggle

**Your portfolio is ready to go live! 🎉** <>