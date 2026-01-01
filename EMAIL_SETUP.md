# Email Setup Instructions

This guide explains how to configure the contact form to send emails to your Gmail account.

## Prerequisites

- A Gmail account
- 2-Step Verification enabled on your Gmail account

## Step-by-Step Setup

### 1. Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable it (if not already enabled)

### 2. Generate an App Password

1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. You may need to sign in again
4. Select **Mail** as the app
5. Select **Other (Custom name)** as the device
6. Enter "Portfolio Contact Form" as the name
7. Click **Generate**
8. **Copy the 16-character password** (you'll need this in step 4)

### 3. Create Environment Variables File

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.example` to `.env.local`

### 4. Configure Environment Variables

Open `.env.local` and fill in your values:

```env
SMTP_EMAIL=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=sara.ramazani.dev@gmail.com
```

**Important:**
- Use your actual Gmail address for `SMTP_EMAIL`
- Use the 16-character app password (not your regular Gmail password) for `SMTP_PASSWORD`
- `RECIPIENT_EMAIL` is where messages will be sent (usually the same as `SMTP_EMAIL`)

### 5. Install Dependencies

If you haven't already, install the required packages:

```bash
npm install
```

### 6. Test Locally

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to the contact page and submit a test message

3. Check your email inbox for the message

## Deploying to Vercel

When deploying to Vercel, you need to add these environment variables in the Vercel dashboard:

1. Go to your project on [Vercel](https://vercel.com)
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - `SMTP_EMAIL` = your Gmail address
   - `SMTP_PASSWORD` = your app password
   - `RECIPIENT_EMAIL` = sara.ramazani.dev@gmail.com
4. Make sure to select **Production**, **Preview**, and **Development** environments
5. Redeploy your site

## Security Notes

- ✅ Never commit `.env.local` to Git (it's already in `.gitignore`)
- ✅ Never share your app password publicly
- ✅ App passwords are safer than using your regular Gmail password
- ✅ Each app password can be revoked individually if compromised

## Troubleshooting

### "Email service not configured" error
- Make sure `.env.local` exists and has all required variables
- Restart your development server after creating `.env.local`

### "Invalid login" error
- Double-check your Gmail address is correct
- Make sure you're using an App Password, not your regular password
- Verify 2-Step Verification is enabled

### Emails not arriving
- Check your spam folder
- Verify the `RECIPIENT_EMAIL` is correct
- Check Vercel function logs for errors (if deployed)

## How It Works

1. User submits the contact form
2. Frontend sends data to `/api/contact` endpoint
3. API route validates the data
4. Nodemailer sends email via Gmail SMTP
5. Email arrives in your inbox with sender's details
6. You can reply directly to the sender (reply-to is set to their email)

