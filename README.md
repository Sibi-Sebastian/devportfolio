# Sibi Sebastian - Backend Developer Portfolio

Professional portfolio website showcasing backend development expertise with Node.js, Express, SQL, and MERN Stack.

## Features

- Modern, professional design
- Responsive for all devices
- Sections: Home, About, Skills, Projects, Contact
- Live project showcases
- Contact form integration

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Firebase Deployment

### First Time Setup

1. Install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)

4. Initialize Firebase in your project:
```bash
firebase init
```
   - Select "Hosting"
   - Choose your Firebase project
   - Set build directory as "build"
   - Configure as single-page app: Yes
   - Don't overwrite index.html

5. Update `.firebaserc` with your project ID

### Deploy to Firebase

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Your site will be live at: `https://your-project-id.web.app`

## Quick Deploy Script

Add this to your `package.json` scripts:
```json
"deploy": "npm run build && firebase deploy"
```

Then simply run:
```bash
npm run deploy
```

## Technologies Used

- React.js
- JavaScript
- CSS3
- Firebase Hosting
- Web3Forms (Contact Form)

## Contact

- Email: sibisebastian013@gmail.com
- LinkedIn: [linkedin.com/in/sibi-sebastian-b71092220](https://linkedin.com/in/sibi-sebastian-b71092220)
- Phone: 7795146489
