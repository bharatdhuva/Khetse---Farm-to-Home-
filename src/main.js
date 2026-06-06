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

// ==========================================
// Interactive App Screen Mockups Data
// ==========================================
const appScreens = {
  home: `
    <div class="screen-fade h-full flex flex-col bg-[#fbfcf8] p-3 font-sans text-[#1a1c18]">
      <div class="flex items-center justify-between mb-2">
        <span class="material-symbols-outlined text-[#1a5319] font-bold text-base" style="font-variation-settings: 'opsz' 18">menu</span>
        <span class="font-bold text-[#1a5319] text-xs">Khetse</span>
        <span class="material-symbols-outlined text-[#1a5319] text-base relative" style="font-variation-settings: 'opsz' 18">shopping_cart<span class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-[7px] w-2.5 h-2.5 flex items-center justify-center font-bold">2</span></span>
      </div>
      <div class="flex items-center gap-1 text-[8px] text-[#43493e] bg-[#f1f4e8] p-1 rounded-lg mb-2">
        <span class="material-symbols-outlined text-[10px] text-[#1a5319]">location_on</span>
        <span class="truncate">Delivering to Home - Jaipur, Rajasthan</span>
      </div>
      <div class="bg-[#d0f1c3] p-2 rounded-lg flex items-center justify-between gap-1 mb-2 shadow-sm">
        <div class="space-y-0.5">
          <p class="text-[8px] font-bold text-[#1a5319] leading-tight">Farm Fresh Goodness, Delivered Daily.</p>
          <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-semibold">Shop Now</button>
        </div>
        <span class="material-symbols-outlined text-2xl text-[#1a5319] opacity-80">spa</span>
      </div>
      <p class="text-[8px] font-bold mb-1">Shop by Category</p>
      <div class="grid grid-cols-4 gap-1.5 mb-2">
        <div class="flex flex-col items-center"><div class="w-7 h-7 rounded-full bg-[#1a5319]/10 flex items-center justify-center text-xs">🥦</div><span class="text-[6px] text-center font-medium">Vegetable</span></div>
        <div class="flex flex-col items-center"><div class="w-7 h-7 rounded-full bg-[#ffdbcf] flex items-center justify-center text-xs">🍎</div><span class="text-[6px] text-center font-medium">Fruits</span></div>
        <div class="flex flex-col items-center"><div class="w-7 h-7 rounded-full bg-[#ffdcc2] flex items-center justify-center text-xs">🥛</div><span class="text-[6px] text-center font-medium">Dairy</span></div>
        <div class="flex flex-col items-center"><div class="w-7 h-7 rounded-full bg-[#f1f4e8] flex items-center justify-center text-xs">➕</div><span class="text-[6px] text-center font-medium">More</span></div>
      </div>
      <p class="text-[8px] font-bold mb-1">Best Sellers</p>
      <div class="grid grid-cols-2 gap-1.5 flex-1">
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30 flex flex-col justify-between">
          <div>
            <div class="text-center text-base">🍅</div>
            <p class="text-[8px] font-bold leading-tight">Tomato</p>
            <p class="text-[6px] text-[#43493e]">1 kg</p>
          </div>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹25</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30 flex flex-col justify-between">
          <div>
            <div class="text-center text-base">🥛</div>
            <p class="text-[8px] font-bold leading-tight">Cow Milk</p>
            <p class="text-[6px] text-[#43493e]">1 Ltr</p>
          </div>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹60</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
      </div>
    </div>
  `,
  listing: `
    <div class="screen-fade h-full flex flex-col bg-[#fbfcf8] p-3 font-sans text-[#1a1c18]">
      <div class="flex items-center gap-1.5 mb-2">
        <span class="material-symbols-outlined text-[#43493e] font-bold text-sm">arrow_back</span>
        <div class="flex-1 bg-[#f1f4e8] p-1 rounded-lg flex items-center gap-1.5 text-[8px] text-[#43493e]">
          <span class="material-symbols-outlined text-[10px]">search</span>
          <span>Search fresh vegetables...</span>
        </div>
      </div>
      <div class="flex gap-1.5 mb-2 overflow-x-auto no-scrollbar">
        <span class="bg-[#1a5319] text-white text-[7px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">All Veggies</span>
        <span class="bg-[#f1f4e8] text-[#43493e] text-[7px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">Leafy Greens</span>
        <span class="bg-[#f1f4e8] text-[#43493e] text-[7px] px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">Roots</span>
      </div>
      <div class="grid grid-cols-2 gap-1.5 overflow-y-auto max-h-[240px] no-scrollbar">
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30">
          <div class="text-center text-base">🥕</div>
          <p class="text-[8px] font-bold">Carrot</p>
          <p class="text-[6px] text-[#43493e]">500 gm</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹30</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30">
          <div class="text-center text-base">🥦</div>
          <p class="text-[8px] font-bold">Broccoli</p>
          <p class="text-[6px] text-[#43493e]">1 pc</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹40</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30">
          <div class="text-center text-base">🥔</div>
          <p class="text-[8px] font-bold">Potato</p>
          <p class="text-[6px] text-[#43493e]">1 kg</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹20</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30">
          <div class="text-center text-base">🧅</div>
          <p class="text-[8px] font-bold">Red Onion</p>
          <p class="text-[6px] text-[#43493e]">1 kg</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold">₹35</span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Add</button>
          </div>
        </div>
      </div>
    </div>
  `,
  cart: `
    <div class="screen-fade h-full flex flex-col bg-[#fbfcf8] p-3 font-sans text-[#1a1c18]">
      <p class="text-[10px] font-bold mb-2.5 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm font-bold">arrow_back</span>
        My Shopping Cart
      </p>
      <div class="space-y-1.5 flex-1 overflow-y-auto no-scrollbar max-h-[170px]">
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <div class="text-base">🍅</div>
            <div>
              <p class="text-[8px] font-bold leading-tight">Tomato</p>
              <p class="text-[6px] text-[#43493e]">1 kg x 1</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[8px] font-bold">₹25</span>
            <span class="text-[10px] text-red-500 material-symbols-outlined">delete</span>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <div class="text-base">🥛</div>
            <div>
              <p class="text-[8px] font-bold leading-tight">Cow Milk</p>
              <p class="text-[6px] text-[#43493e]">1 Ltr x 2</p>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="text-[8px] font-bold">₹120</span>
            <span class="text-[10px] text-red-500 material-symbols-outlined">delete</span>
          </div>
        </div>
      </div>
      <div class="border-t border-[#c3c8bc]/30 pt-1.5 mt-1.5 space-y-0.5 text-[7px]">
        <div class="flex justify-between text-[#43493e]"><span>Item Total</span><span>₹145</span></div>
        <div class="flex justify-between text-[#43493e]"><span>Delivery Fee</span><span class="text-[#1a5319] font-bold">FREE</span></div>
        <div class="flex justify-between font-bold text-[8px] border-t border-dashed border-[#c3c8bc]/30 pt-1 mt-1 text-on-surface"><span>To Pay</span><span>₹145</span></div>
      </div>
      <button class="w-full bg-[#1a5319] text-white text-[8px] py-1.5 rounded-lg font-bold mt-2.5">Proceed to Checkout</button>
    </div>
  `,
  subscription: `
    <div class="screen-fade h-full flex flex-col bg-[#fbfcf8] p-3 font-sans text-[#1a1c18]">
      <p class="text-[10px] font-bold mb-2 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm font-bold">calendar_month</span>
        Khetse Subscriptions
      </p>
      <div class="bg-[#ffdcc2] p-1.5 rounded-lg mb-2">
        <p class="text-[8px] font-bold text-[#2e1500]">Never Run Out of Essentials!</p>
        <p class="text-[6px] text-[#2e1500]/95 leading-tight mt-0.5">Pause, resume, or modify schedule anytime.</p>
      </div>
      <div class="space-y-1.5 flex-1 overflow-y-auto no-scrollbar max-h-[170px]">
        <div class="bg-white p-1.5 rounded-lg border-1.5 border-[#1a5319] relative">
          <span class="absolute top-1 right-1 bg-[#1a5319] text-white text-[5px] px-1 rounded font-bold uppercase">Popular</span>
          <p class="text-[8px] font-bold text-[#1a5319]">Family Plan</p>
          <p class="text-[6px] text-[#43493e]">Daily fresh milk & veg</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold text-on-surface">₹999<span class="text-[6px] text-[#43493e] font-normal">/mo</span></span>
            <button class="bg-[#1a5319] text-white text-[6px] px-1.5 py-0.5 rounded font-bold">Subscribe</button>
          </div>
        </div>
        <div class="bg-white p-1.5 rounded-lg border border-[#c3c8bc]/30">
          <p class="text-[8px] font-bold">Essential Plan</p>
          <p class="text-[6px] text-[#43493e]">Daily morning milk</p>
          <div class="flex items-center justify-between mt-1">
            <span class="text-[8px] font-bold text-on-surface">₹499<span class="text-[6px] text-[#43493e] font-normal">/mo</span></span>
            <button class="border border-[#1a5319] text-[#1a5319] text-[6px] px-1.5 py-0.5 rounded font-bold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  `,
  tracking: `
    <div class="screen-fade h-full flex flex-col bg-[#fbfcf8] p-3 font-sans text-[#1a1c18]">
      <p class="text-[10px] font-bold mb-2 flex items-center gap-1">
        <span class="material-symbols-outlined text-sm font-bold">local_shipping</span>
        Track Your Order
      </p>
      <div class="bg-[#d0f1c3] p-1.5 rounded-lg mb-2 flex items-center justify-between">
        <div>
          <p class="text-[7px] text-[#1a5319] uppercase font-bold">Arriving Today By 6 PM</p>
          <p class="text-[8px] font-bold mt-0.5">Order #KS-84920</p>
        </div>
        <p class="text-[8px] font-bold text-[#1a5319]">On the way</p>
      </div>
      <div class="space-y-3 relative pl-3 border-l border-[#1a5319]/30 ml-1.5 py-1.5 flex-1 text-[7px]">
        <div class="relative">
          <div class="absolute -left-[16.5px] top-0.5 w-2 h-2 rounded-full bg-[#1a5319] flex items-center justify-center"><span class="w-1 h-1 bg-white rounded-full"></span></div>
          <p class="font-bold text-[#1a5319]">Out for Delivery (4:30 PM)</p>
          <p class="text-[6px] text-[#43493e] leading-tight">Rider Ramesh is on his way.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[16.5px] top-0.5 w-2 h-2 rounded-full bg-[#1a5319] flex items-center justify-center"><span class="w-1 h-1 bg-white rounded-full"></span></div>
          <p class="font-bold">Packed & Dispatched (3:00 PM)</p>
          <p class="text-[6px] text-[#43493e] leading-tight">Your basket was carefully checked.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-[16.5px] top-0.5 w-2 h-2 rounded-full bg-[#1a5319]/40 flex items-center justify-center"><span class="w-1 h-1 bg-white rounded-full"></span></div>
          <p class="font-bold text-[#43493e]">Harvested & Processed (10:00 AM)</p>
          <p class="text-[6px] text-[#43493e] leading-tight">Freshly picked from partner farms.</p>
        </div>
      </div>
    </div>
  `
}

// ==========================================
// Setup Interaction Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn')
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer')
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop')

  function toggleMenu(show) {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      if (show) {
        mobileMenuDrawer.classList.remove('translate-x-full')
        mobileMenuBackdrop.classList.remove('hidden')
      } else {
        mobileMenuDrawer.classList.add('translate-x-full')
        mobileMenuBackdrop.classList.add('hidden')
      }
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleMenu(true))
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', () => toggleMenu(false))
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', () => toggleMenu(false))

  // Close menu drawer when menu links are clicked
  const mobileLinks = document.querySelectorAll('#mobile-menu-drawer a')
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false))
  })

  // 2. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item')
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question')
    const answerDiv = item.querySelector('.faq-answer')
    const icon = item.querySelector('.faq-icon')
    
    if (questionBtn && answerDiv) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answerDiv.classList.contains('hidden')
        
        // Close all other FAQs
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer')
          const otherIcon = otherItem.querySelector('.faq-icon')
          if (otherAnswer) otherAnswer.classList.add('hidden')
          if (otherIcon) {
            otherIcon.style.transform = 'rotate(0deg)'
            otherIcon.textContent = 'add'
          }
        })
        
        // Toggle current FAQ
        if (isOpen) {
          answerDiv.classList.add('hidden')
          if (icon) {
            icon.style.transform = 'rotate(0deg)'
            icon.textContent = 'add'
          }
        } else {
          answerDiv.classList.remove('hidden')
          if (icon) {
            icon.style.transform = 'rotate(45deg)'
            icon.textContent = 'close'
          }
        }
      })
    }
  })

  // 3. App Screenshots Switcher
  const phoneScreen = document.getElementById('phone-screen-display')
  const tabButtons = document.querySelectorAll('.app-screenshot-tab')
  
  function updateScreen(screenName) {
    if (phoneScreen && appScreens[screenName]) {
      phoneScreen.innerHTML = appScreens[screenName]
    }
    
    tabButtons.forEach(btn => {
      if (btn.dataset.screen === screenName) {
        btn.classList.add('bg-[#1a5319]', 'text-white')
        btn.classList.remove('bg-white', 'text-on-surface-variant')
      } else {
        btn.classList.remove('bg-[#1a5319]', 'text-white')
        btn.classList.add('bg-white', 'text-on-surface-variant')
      }
    })
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateScreen(btn.dataset.screen)
    })
  })

  // Initialize with home screen
  updateScreen('home')

  // 4. Discount Banner Close
  const closePromoBtn = document.getElementById('close-promo-btn')
  const promoBanner = document.getElementById('promo-banner')
  
  if (closePromoBtn && promoBanner) {
    closePromoBtn.addEventListener('click', () => {
      promoBanner.classList.add('hidden')
      document.body.classList.remove('pt-8') // adjust custom layout padding if any
    })
  }

  // 5. Sticky Scroll CTA Bar
  const stickyCta = document.getElementById('sticky-cta-bar')
  window.addEventListener('scroll', () => {
    if (stickyCta) {
      if (window.scrollY > 400) {
        stickyCta.classList.remove('translate-y-full')
      } else {
        stickyCta.classList.add('translate-y-full')
      }
    }
  })

  // 6. Exit Intent Popup
  const exitPopup = document.getElementById('exit-popup')
  const closeExitPopupBtn = document.getElementById('close-exit-popup')
  const claimOfferBtn = document.getElementById('claim-offer-btn')

  if (exitPopup) {
    // Show exit intent popup when mouse leaves the viewport from the top
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 20) {
        const hasShown = sessionStorage.getItem('exit-popup-shown')
        if (!hasShown) {
          exitPopup.classList.remove('hidden')
          exitPopup.classList.add('flex')
          sessionStorage.setItem('exit-popup-shown', 'true')
        }
      }
    })

    if (closeExitPopupBtn) {
      closeExitPopupBtn.addEventListener('click', () => {
        exitPopup.classList.add('hidden')
        exitPopup.classList.remove('flex')
      })
    }

    if (claimOfferBtn) {
      claimOfferBtn.addEventListener('click', () => {
        exitPopup.classList.add('hidden')
        exitPopup.classList.remove('flex')
        // Scroll to download section
        const downloadSec = document.getElementById('download-section')
        if (downloadSec) {
          downloadSec.scrollIntoView({ behavior: 'smooth' })
        }
      })
    }
  }
})

