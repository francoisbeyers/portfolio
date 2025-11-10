# Resend Email Setup Instructions

Your contact form is now configured to send emails using Resend. Follow these steps to complete the setup:

## 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month)
3. Verify your email address

## 2. Get Your API Key

1. Log into your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name like "Portfolio Contact Form"
5. Copy the API key (you'll only see it once!)

## 3. Add API Key to Your Project

1. Open the `.env.local` file in your project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_123456789abcdef
   ```
3. Save the file

## 4. Update Email Domain (Optional but Recommended)

By default, emails are sent from `onboarding@resend.dev`. For a more professional look:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `beyers.tech`)
4. Follow the DNS verification instructions
5. Once verified, update the "from" address in `/app/api/contact/route.ts`:
   ```typescript
   from: 'Francois Beyers <contact@beyers.tech>',
   ```

## 5. Test the Contact Form

1. Restart your development server: `npm run dev`
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your inbox at francois.beyers@gmail.com (Resend testing mode)

**Note**: In testing mode, Resend only sends emails to the verified account owner's email (francois.beyers@gmail.com). To send to other recipients like francois@beyers.tech, you need to verify a domain in Resend.

## 6. Deploy to Production

When deploying to Vercel/Netlify/etc:

1. Add the `RESEND_API_KEY` environment variable in your hosting platform
2. Redeploy your site

## Troubleshooting

**"Failed to send message"**
- Check that your API key is correctly set in `.env.local`
- Restart your dev server after adding the API key
- Check the browser console for specific error messages

**Not receiving emails**
- Check your spam folder
- Verify the API key is valid in Resend dashboard
- Check Resend dashboard logs for delivery status

**Free Tier Limits**
- 3,000 emails per month
- 100 emails per day
- Upgrade to paid plan if you exceed these limits

## Support

- Resend Documentation: https://resend.com/docs
- Resend Support: support@resend.com
