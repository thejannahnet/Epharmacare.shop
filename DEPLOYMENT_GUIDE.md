This guide explains how to deploy your **E Pharma Care** site. 

> [!IMPORTANT]
> **Next.js vs WordPress**: This website is built using **Next.js** (a modern React framework), which is different from **WordPress**. You cannot "upload" this code into a WordPress dashboard. Instead, you host it on a platform like **Vercel**, which is much faster and more secure for this type of custom application.

## 1. Why not WordPress?
- **Speed**: Next.js sites are significantly faster than WordPress.
- **Security**: There are no plugins to hack; the site is "static" and highly secure.
- **Customization**: This site has custom features (like the cart and slider) that are easier to maintain in Next.js.

## 2. Deploying to Vercel (The Best Way)

### Option A: Using the Vercel CLI (Recommended for local dev)
1. Open your terminal in the project directory.
2. Run `npx vercel`.
3. Follow the prompts to log in and set up the project.
4. Once deployed, you will get a `.vercel.app` URL.

### Option B: Using GitHub/GitLab/Bitbucket (Recommended for production)
1. Push your code to a private repository on GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New"** > **"Project"**.
3. Import your repository.
4. Vercel will automatically detect Next.js settings. Click **"Deploy"**.

## 2. Environment Variables
In the Vercel Dashboard, go to **Settings** > **Environment Variables** and add:
- `GOOGLE_SHEET_ID`: Your Google Sheet ID.
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Your service account email.
- `GOOGLE_PRIVATE_KEY`: Your service account private key.
- `RESEND_API_KEY`: Your Resend API key for emails.

## 3. Connecting Your Domain

1. In the Vercel Dashboard, go to **Settings** > **Domains**.
2. Enter your domain (e.g., `epharmacare.shop`) and click **Add**.
3. Vercel will provide DNS records (A record and CNAME).
4. Go to your domain registrar (e.g., Namecheap, GoDaddy) and update the DNS settings:
   - **A Record**: `@` pointing to `76.76.21.21`
   - **CNAME**: `www` pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually 10-60 minutes).

## 4. Final Verification
Once the domain is connected, Vercel will automatically provision an SSL certificate (HTTPS). Your site will be live at your custom domain!
