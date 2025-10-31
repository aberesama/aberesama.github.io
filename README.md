# Personal Portfolio Website - Customization Guide

This guide provides instructions on how to easily update the content of your personal portfolio website. All the data for your site (personal info, resume, projects, etc.) is stored in a single file, making it simple to manage.

## The Central Configuration File

All the content you need to edit is located in: `src/constants.tsx`.

Open this file in a text editor to make your changes. Below is a breakdown of each section you can modify.

---

### 1. Personal Information

This is where you update your name, title, contact details, and profile picture.

Find the `PERSONAL_INFO` object and edit the values.

```javascript
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Job Title',
  // INSTRUCTION: Replace this URL with a direct link to your profile image.
  // You can upload your photo to a site like ImgBB or Postimages.
  avatarUrl: 'https://your-image-url.com/avatar.jpg',
  email: 'your.email@example.com',
  phone: '+1 234 567 890',
  location: 'City, Country',
};
```
- **`avatarUrl`**: To change your profile picture, upload a new image to an image hosting service (like [ImgBB](https://imgbb.com/) or [Postimages](https://postimages.org/)) and paste the direct image link here.

---

### 2. Social Media Links

Update your social media profiles by editing the `SOCIAL_LINKS` array. You can add, remove, or change the order of the links.

```javascript
export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: <svg>...</svg> },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: <svg>...</svg> },
    // Add more links here
];
```
- **Note:** The `icon` is an SVG code block. If you want to add a new social network not already listed, you will need to find its SVG icon and paste it in.

---

### 3. "About Me" Section

To change the text in your "About Me" page, edit the `ABOUT_TEXT` object.

```javascript
export const ABOUT_TEXT = {
  p1: "This is the first paragraph of your bio. Talk about your professional background and passion.",
  p2: "This is the second paragraph. Mention your key skills, experience, and what you're looking for.",
};
```

You can also update the services you offer in the `SERVICES` array.

```javascript
export const SERVICES: Service[] = [
  { title: 'Data Science & Analytics', description: 'Your description here.', icon: <DevIcon /> },
  { title: 'Web Development', description: 'Your description here.', icon: <DesignIcon /> },
  // ... more services
];
```

---

### 4. Resume Page

All the content for your resume page is here.

#### Education & Experience
Update the `EDUCATION` and `EXPERIENCE` arrays. Each item represents a timeline entry.

```javascript
export const EXPERIENCE: TimelineItem[] = [
    { 
        date: '2022 Jan - Present', 
        title: 'Your Job Title', 
        institution: 'Company Name', 
        description: 'A brief description of your roles and responsibilities.' 
    },
    // ... more experience items
];
```

#### Skills
Update your skills and proficiency levels (out of 100) in the `SKILLS` array.

```javascript
export const SKILLS: Skill[] = [
    { name: 'Python, SQL, HTML/CSS, JS', level: 95 },
    { name: 'Data Analysis & Visualization', level: 93 },
    // ... more skills
];
```

---

### 5. Portfolio Projects

Showcase your work by editing the `PORTFOLIO_PROJECTS` array. Each object is a new project.

```javascript
export const PORTFOLIO_PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Project Title', 
    category: 'Development', // Used for filtering
    imageUrl: 'https://your-project-image-url.com/image.jpg', 
    description: 'A detailed description of the project.', 
    details: { 
        client: 'Client Name', 
        date: 'Month Year', 
        url: 'https://project-live-url.com' // Link to the live project
    } 
  },
  // ... more projects
];
```
- **`imageUrl`**: Just like your avatar, upload a thumbnail for your project and paste the direct link here.

---

### 6. Blog Posts

To add or edit blog posts, modify the `BLOG_POSTS` array.

```javascript
export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 1, 
    title: 'Blog Post Title', 
    category: 'Category Name', 
    date: 'Month Day, Year', 
    imageUrl: 'https://blog-image-url.com/image.jpg', 
    content: `Your blog content goes here. You can use line breaks for paragraphs.`
  },
  // ... more posts
];
```

By following this guide, you can keep your portfolio fresh and up-to-date with your latest achievements without needing to touch any other part of the codebase.
