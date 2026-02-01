# Setup Instructions to View the Website

## Step 1: Install Node.js

1. Go to: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version for Windows
3. Run the installer and follow the setup wizard
4. Restart your terminal/Cursor after installation

## Step 2: Verify Installation

Open a new terminal in Cursor and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x)

## Step 3: Install Dependencies

In the project directory, run:
```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

## Step 4: Start Development Server

Run:
```bash
npm run dev
```

## Step 5: Open in Browser

The terminal will show:
```
  ▲ Next.js 14.x.x
  - Local:        http://localhost:3000
```

Click the link or open http://localhost:3000 in your browser!

---

## Alternative: Quick Preview (Without Node.js)

If you want to see the structure without installing Node.js, you can:
1. Open the component files in Cursor to see the code
2. The design is mobile-first and responsive
3. All sections are implemented and ready

But to see it **actually running** with all styles and interactions, you'll need Node.js installed.

---

## Need Help?

- Node.js installation issues? Check: https://nodejs.org/en/download/
- Having trouble? Make sure you've restarted Cursor after installing Node.js
