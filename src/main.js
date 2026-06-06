import './style.css'

// Dynamically generate favicon with white circular background for dark mode visibility
const img = new Image()
img.src = '/logo.png'
img.onload = () => {
  const canvas = document.createElement('canvas')
  const size = 64
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  // Draw circular white background
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()

  // Draw the logo centered with padding
  const padding = 8
  const destSize = size - padding * 2
  ctx.drawImage(img, padding, padding, destSize, destSize)

  // Update favicon link
  const link = document.querySelector("link[rel~='icon']")
  if (link) {
    link.href = canvas.toDataURL('image/png')
  }
}
