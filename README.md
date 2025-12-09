# Photo Filter Studio

It lets you transform your photos with beautiful CSS filters through an elegant glass-morphism interface. Upload any image, apply effects, and download the edited result with one click!


## App Preview

Here's a quick look at the Photo Editor:

### Desktop View

https://github.com/user-attachments/assets/7e33f32b-dc87-49a5-b445-ef7592990648

### Mobile View

<img width="320" alt="photo-editor-mobile" src="https://github.com/user-attachments/assets/da23d183-4fc0-42e4-9e47-11e8979f54ee" />

## Features

- **6 Professional Filters**
  - **Brightness** - Enhance image luminosity
  - **Saturation** - Boost color vibrancy
  - **Inversion** - Create negative effects
  - **Grayscale** - Classic black & white
  - **Sepia** - Vintage warm tones
  - **Vivid** - High contrast with enhanced brightness

- **Image Management**
  - Upload custom images from your device
  - Default sample image included
  - Remove uploaded images to revert to default
  - Real-time file name display

- **Export Functionality**
  - Download filtered images as PNG
  - Automatic timestamp-based file naming
  - Preserves applied filters in exported image

- **Premium UI/UX**
  - Glass-morphism design with backdrop blur
  - Smooth CSS animations and transitions
  - Active state highlighting
  - Responsive layout for all devices
  - Atmospheric animated background
  - Subtle film grain texture overlay

---

## File Structure

```
photo-editor/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Filter logic and interactions
└── README.md       # This file
```

---

## Getting Started

### Quick Start

1. Clone or download the project files
2. Open `index.html` in any modern web browser

```bash
# If using a local server (recommended)
npx serve .
```

### Usage

1. **Apply Filters**: Click any filter button to apply the effect
2. **Active Filter**: The active filter will be highlighted with the accent color
3. **Upload Image**: Click "Change Image" to upload your own photo
4. **Remove Image**: Click the ✕ button to remove your uploaded image and revert to default
5. **Download**: Click "Download Image" to save your filtered image as PNG
6. **Reset**: Click "Reset to Original" to remove all filters

---

## Customization

### Changing Colors

Edit the CSS variables in `:root` to customize the color scheme:

```css
:root {
    --bg-primary: #0a0a0f;           /* Main background */
    --bg-secondary: #12121a;         /* Secondary background */
    --accent: #ff6b35;               /* Accent color (buttons, highlights) */
    --accent-glow: rgba(255, 107, 53, 0.3);  /* Glow effect */
    --text-primary: #f5f5f7;         /* Primary text */
    --text-secondary: #8a8a8e;       /* Secondary text */
    --glass: rgba(255, 255, 255, 0.03);      /* Glass effect */
    --glass-border: rgba(255, 255, 255, 0.08); /* Glass borders */
}
```

## Responsive Design

The application automatically adapts to different screen sizes:

- **Desktop** (> 768px): Side-by-side layout with controls and image preview
- **Mobile** (≤ 768px): Stacked vertical layout optimized for touch interaction

---

## Technical Details

### Dependencies

- **Google Fonts**: DM Sans
- No JavaScript frameworks required
- Pure CSS animations
- Vanilla JavaScript for all functionality

### Key Features

- **File Validation**: Only image files can be uploaded
- **Error Handling**: Graceful fallbacks for image loading failures
- **Canvas API**: Used for applying filters during image download
- **FileReader API**: Handles custom image uploads

<p align="center">
  Built with ❤️ using vanilla HTML, CSS & JavaScript
</p>
