# 📸 PhotoMark

A beautiful, feature-rich photography blog web application built with Flask and SQLite.

## Features

- 🔐 **User Authentication**: Register, login, and logout with Flask-Login
- 🖼️ **Image Uploads**: Upload and display images with each blog post
- 🔎 **Search Functionality**: Search posts by title or content
- 💬 **Comments System**: Leave comments on individual posts
- 🌙 **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- 📱 **Responsive Design**: Works beautifully on desktop and mobile devices

## Installation

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the application:**
   ```bash
   python app.py
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:5000`

## Usage

### Creating an Account
1. Click "Register" in the navigation bar
2. Fill in your username, email, and password
3. Click "Register" to create your account

### Creating a Post
1. Log in to your account
2. Click "New Post" in the navigation bar
3. Enter a title, content, and optionally upload an image
4. Click "Create Post"

### Searching Posts
- Use the search bar on the home page to filter posts by title or content
- Click "Clear" to remove the search filter

### Commenting
1. Navigate to any post
2. Scroll to the comments section
3. Enter your comment and click "Post Comment"

### Dark Mode
- Click the moon/sun icon in the navigation bar to toggle dark mode
- Your preference is automatically saved and will persist across sessions

## Project Structure

```
BLOG/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── templates/             # Jinja2 HTML templates
│   ├── base.html         # Base template with navigation
│   ├── index.html        # Home page with post listings
│   ├── login.html        # Login page
│   ├── register.html     # Registration page
│   ├── post_form.html    # Create/Edit post form
│   └── post_detail.html  # Individual post view with comments
├── static/
│   ├── css/
│   │   └── style.css     # Main stylesheet with dark mode support
│   ├── js/
│   │   └── darkmode.js   # Dark mode toggle functionality
│   └── uploads/          # Directory for uploaded images
└── photomark.db           # SQLite database (created automatically)
```

## Database Models

- **User**: Stores user accounts with authentication
- **Post**: Stores blog posts with title, content, and optional images
- **Comment**: Stores comments linked to posts and users

## Security Notes

⚠️ **Important**: Before deploying to production:
- Change the `SECRET_KEY` in `app.py` to a secure random value
- Use environment variables for sensitive configuration
- Consider using a production-grade WSGI server (e.g., Gunicorn)
- Implement additional security measures (CSRF protection, rate limiting, etc.)

## License

This project is open source and available for personal and educational use.

