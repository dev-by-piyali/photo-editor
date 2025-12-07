let currentFilter = 'brightness(1)'
const DEFAULT_IMAGE_URL =
  'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE='
let isCustomImage = false

/**
 * Initialize on page load - check if photo exists and update button states
 */
document.addEventListener('DOMContentLoaded', function () {
  const photo = document.getElementById('photo')

  // Check if default image loads successfully
  photo.onload = function () {
    updateButtonStates(true)
  }

  photo.onerror = function () {
    updateButtonStates(false)
  }

  // If image already has src and is loaded
  if (photo.complete && photo.naturalHeight !== 0) {
    updateButtonStates(true)
  }
})

/**
 * Update filter buttons enabled/disabled state
 */
function updateButtonStates(enabled) {
  const filterBtns = document.querySelectorAll('.filter-btn')
  const resetBtn = document.querySelector('.reset-btn')
  const downloadBtn = document.querySelector('.download-btn')
  const removeBtn = document.getElementById('removeBtn')

  filterBtns.forEach((btn) => {
    btn.disabled = !enabled
  })

  if (resetBtn) resetBtn.disabled = !enabled
  if (downloadBtn) downloadBtn.disabled = !enabled

  // Remove button only enabled when custom image is uploaded
  if (removeBtn) removeBtn.disabled = !isCustomImage
}

/**
 * Load image from file input
 */
function loadImage(event) {
  const file = event.target.files[0]

  if (file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.')
      return
    }

    const reader = new FileReader()

    reader.onload = function (e) {
      const photo = document.getElementById('photo')
      const fileName = document.getElementById('fileName')

      // Set image source
      photo.src = e.target.result
      isCustomImage = true

      // Update file name display
      fileName.textContent = file.name
      fileName.title = file.name

      // Reset filter and enable buttons
      resetFilter()
      updateButtonStates(true)
    }

    reader.onerror = function () {
      alert('Error reading file. Please try again.')
    }

    reader.readAsDataURL(file)
  }
}

/**
 * Remove uploaded image and revert to default
 */
function removeImage() {
  const photo = document.getElementById('photo')
  const fileName = document.getElementById('fileName')
  const imageInput = document.getElementById('imageInput')
  const removeBtn = document.getElementById('removeBtn')

  // Reset to default image
  photo.src = DEFAULT_IMAGE_URL
  isCustomImage = false

  // Reset file input
  imageInput.value = ''

  // Update file name display
  fileName.textContent = 'Default image loaded'
  fileName.title = ''

  // Reset filter and update button states
  resetFilter()
  if (removeBtn) removeBtn.disabled = true
}

/**
 * Apply filter to the image
 */
function setFilter(f, btn) {
  const photo = document.getElementById('photo')

  // Check if photo exists
  if (!photo.src || photo.naturalHeight === 0) {
    return
  }

  currentFilter = f
  photo.style.filter = f

  // Update active state
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'))
  if (btn) btn.classList.add('active')
}

/**
 * Reset filter to original
 */
function resetFilter() {
  const photo = document.getElementById('photo')
  currentFilter = 'brightness(1)'
  photo.style.filter = currentFilter
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'))
}

/**
 * Download the filtered image
 */
function downloadImage() {
  const photo = document.getElementById('photo')

  // Check if image is loaded
  if (!photo.src || photo.naturalHeight === 0) {
    alert('No image to download.')
    return
  }

  // Create canvas to apply filter and export
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  // Set canvas dimensions to match image
  canvas.width = photo.naturalWidth
  canvas.height = photo.naturalHeight

  // Apply filter to canvas
  ctx.filter = currentFilter

  // Draw image on canvas
  ctx.drawImage(photo, 0, 0, canvas.width, canvas.height)

  // Create download link
  const link = document.createElement('a')
  const timestamp = new Date().toISOString().slice(0, 19).replace(/[:-]/g, '')
  link.download = `filtered-image-${timestamp}.png`

  // Convert canvas to blob and download
  canvas.toBlob(function (blob) {
    if (blob) {
      const url = URL.createObjectURL(blob)
      link.href = url
      link.click()

      // Clean up
      URL.revokeObjectURL(url)
    } else {
      // Fallback to data URL
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  }, 'image/png')
}