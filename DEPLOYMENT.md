# Deploying to Vercel

This guide will walk you through deploying your Next.js portfolio to Vercel.

## Prerequisites

- A GitHub account (recommended) or GitLab/Bitbucket account
- Your code pushed to a Git repository

## Method 1: Deploy via GitHub (Recommended - Easiest)

This is the easiest and most popular method. Vercel will automatically deploy your site whenever you push to GitHub.

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it (e.g., `sara-portfolio`)
   - Choose Public or Private
   - Don't initialize with README (you already have files)
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit"
   
   # Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import to Vercel

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" or "Log In"
   - Use "Continue with GitHub" (easiest if you have GitHub)

2. **Import your project**
   - Click "Add New..." → "Project"
   - You'll see your GitHub repositories listed
   - Click "Import" next to your portfolio repository

3. **Configure your project**
   - Vercel will auto-detect Next.js settings
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy!**
   - Click "Deploy"
   - Wait 1-2 minutes for the build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Step 3: Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Method 2: Deploy via Vercel CLI

If you prefer using the command line:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate.

### Step 3: Deploy

From your project directory:

```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No (first time)
- **What's your project's name?** → sara-portfolio (or your choice)
- **In which directory is your code located?** → ./

### Step 4: Production Deploy

For production deployment:

```bash
vercel --prod
```

## Automatic Deployments

When connected to GitHub:
- **Every push to `main` branch** → Production deployment
- **Pull requests** → Preview deployments (get a unique URL)
- **Other branches** → Preview deployments

## Troubleshooting

### Build Fails

1. **Check build logs** in Vercel dashboard
2. **Test locally first**: `npm run build`
3. **Common issues**:
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Run `npm run lint`
   - Environment variables → Add them in Vercel dashboard (Settings → Environment Variables)

### Environment Variables

If you need environment variables (API keys, etc.):
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add your variables
4. Redeploy

## Next Steps After Deployment

1. **Update your README** with the live URL
2. **Test all pages** on the deployed site
3. **Check mobile responsiveness**
4. **Update contact form** (if you want to connect it to a backend)
5. **Set up analytics** (optional - Vercel has built-in analytics)

## Useful Vercel Features

- **Preview Deployments**: Every PR gets its own URL
- **Analytics**: Built-in web analytics
- **Speed Insights**: Performance monitoring
- **Automatic HTTPS**: Free SSL certificates
- **Edge Functions**: Serverless functions
- **Image Optimization**: Automatic image optimization

---

Your portfolio is now live! 🚀

