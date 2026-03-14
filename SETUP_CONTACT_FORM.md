# Contact Form Setup Guide

## Overview
The contact form on the Support page is configured to use **Resend** to send emails.

## Setup Steps

### 1. Create a Resend Account
- Go to [https://resend.com](https://resend.com)
- Sign up for a free account
- Verify your email address

### 2. Get Your API Key
- Log in to your Resend dashboard
- Go to API Keys section
- Copy your API key (starts with `re_`)

### 3. Configure Environment Variables
- Create a `.env.local` file in the project root (copy from `.env.local.example`)
- Add your Resend API key:
  ```
  RESEND_API_KEY=re_your_api_key_here
  ```

### 4. Update Email Addresses
Edit `app/api/contact/route.ts` and update these constants:

```typescript
const FROM_EMAIL = 'contact@myinflationrate.com';  // Change to your domain
const TO_EMAIL = 'alfred007@agentmail.to';         // Where to receive submissions
```

**Note:** The `FROM_EMAIL` domain should be verified in your Resend account. You can use:
- A custom domain (requires DNS verification)
- Resend's default domain (e.g., `onboarding@resend.dev`)

### 5. Verify Your Domain (Optional but Recommended)
If using a custom domain:
1. In Resend dashboard, add your domain
2. Follow the DNS verification steps
3. Once verified, use it in `FROM_EMAIL`

## Features

✅ **Form Validation**
- Required fields: Name, Email, Message
- Email format validation
- Client-side and server-side validation

✅ **Rate Limiting**
- 5 submissions per IP per 24 hours
- Prevents spam

✅ **User Feedback**
- Success message on successful submission
- Error messages for failures
- Loading state during submission

✅ **Email Format**
The form sends emails with:
- Sender: "Haplos Contact <contact@myinflationrate.com>"
- Subject: "Haplos Website Contact: [Topic]"
- Body: Formatted message with name, email, topic, and message

## Testing

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/support`

3. Fill out the contact form and submit

4. Check your email (the address you set in `TO_EMAIL`)

## Troubleshooting

**"Email service is not configured"**
- Make sure `RESEND_API_KEY` is set in `.env.local`
- Restart the dev server after adding the environment variable

**"Failed to send email"**
- Verify your API key is correct in `.env.local`
- Check your Resend dashboard for API logs
- Ensure `FROM_EMAIL` domain is verified in Resend

**"Too many requests"**
- Rate limit is 5 submissions per IP per 24 hours
- This is configurable in `app/api/contact/route.ts`

## Deployment

When deploying to Vercel:
1. Add `RESEND_API_KEY` to environment variables in Vercel dashboard
2. No other changes needed - the API route will work automatically
3. Rate limiting uses IP from `x-forwarded-for` header (Vercel compatible)

## Customization

### Change Rate Limit
Edit `app/api/contact/route.ts`, line ~27:
```typescript
if (limit.count >= 5) {  // Change 5 to desired limit
```

### Change Email Recipients
Edit `app/api/contact/route.ts`, lines ~5-6:
```typescript
const FROM_EMAIL = 'your-email@domain.com';
const TO_EMAIL = 'recipient@domain.com';
```

### Modify Email Format
Edit the email body formatting in `app/api/contact/route.ts`, around line ~70:
```typescript
const emailBody = `...`;  // Customize the format
```
