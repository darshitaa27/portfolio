import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// --- Custom Cursor ---
const initCursor = () => {
  const dot = document.querySelector('.cursor-dot')
  const outline = document.querySelector('.cursor-outline')

  if (!dot || !outline) return

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX
    const posY = e.clientY

    // Dot follows instantly
    dot.style.transform = `translate(${posX}px, ${posY}px)`

    // Outline lags slightly via animation
    outline.animate({
      transform: `translate(${posX - 20}px, ${posY - 20}px)`
    }, {
      duration: 500,
      fill: "forwards"
    })
  })

  // Hover effects
  const interactiveElements = document.querySelectorAll('a, button, input, textarea')
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      outline.style.transform = `scale(1.5)`
      outline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
      dot.style.opacity = '0'
    })
    el.addEventListener('mouseleave', () => {
      outline.style.transform = `scale(1)`
      outline.style.backgroundColor = 'transparent'
      dot.style.opacity = '1'
    })
  })
}

// --- 3D Background (Abstract Tech Particles) ---
const initHeroScene = () => {
  const canvas = document.querySelector('#hero-canvas')
  if (!canvas) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // Particles
  const particlesGeometry = new THREE.BufferGeometry()
  const count = 1500
  const posArray = new Float32Array(count * 3)
  const originalPos = new Float32Array(count * 3) // Store original to animate back/forth

  for (let i = 0; i < count * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15 // Spread out
    originalPos[i] = posArray[i]
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

  // Abstract material: minimal dots
  const material = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x5e6ad2, // Accent color
    transparent: true,
    opacity: 0.6,
  })

  const particlesMesh = new THREE.Points(particlesGeometry, material)
  scene.add(particlesMesh)

  camera.position.z = 5

  // Mouse Parallax factor
  let mouseX = 0
  let mouseY = 0
  let targetX = 0
  let targetY = 0

  const windowHalfX = window.innerWidth / 2
  const windowHalfY = window.innerHeight / 2

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX)
    mouseY = (event.clientY - windowHalfY)
  })

  const clock = new THREE.Clock()

  const animate = () => {
    const elapsedTime = clock.getElapsedTime()

    targetX = mouseX * 0.001
    targetY = mouseY * 0.001

    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y)
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x)

    // Wave motion
    const positions = particlesGeometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Animate Y position based on X and Time
      positions[i3 + 1] = originalPos[i3 + 1] + Math.sin(elapsedTime * 0.5 + originalPos[i3] * 0.5) * 0.5
    }
    particlesGeometry.attributes.position.needsUpdate = true

    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
}

// --- GSAP Reveals ---
const initRevels = () => {
  // Hero Text Load
  gsap.utils.toArray('.reveal-text').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('active')
    }, 300 + (i * 100))
  })

  // Scroll Triggers
  gsap.utils.toArray('.reveal-up').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => el.classList.add('active'),
      once: true
    })
  })
}

// --- Modal Logic ---
const initModal = () => {
  const modal = document.getElementById('design-modal')
  const closeBtn = document.querySelector('.close-modal')
  const cards = document.querySelectorAll('.design-card')
  const titleEl = document.getElementById('modal-title')
  const descEl = document.getElementById('modal-desc')
  const imgEl = document.getElementById('modal-img-placeholder')

  if (!modal) return

  const openModal = (data) => {
    titleEl.textContent = data.title
    descEl.textContent = data.desc

    // Mock image class or placeholder
    imgEl.className = 'modal-img ' + (data.img || '')

    modal.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    modal.classList.remove('open')
    document.body.style.overflow = 'auto'
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset)
    })
  })

  if (closeBtn) closeBtn.addEventListener('click', closeModal)

  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal()
  })
}

// --- Back To Top ---
const initBackToTop = () => {
  const btn = document.getElementById('back-to-top')
  if (!btn) return

  // Style explicitly just in case CSS didn't catch 
  // (though best practice is CSS, we ensure visibility logic here)
  btn.style.display = 'none'

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.style.display = 'flex'
    } else {
      btn.style.display = 'none'
    }
  })

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

// --- Init ---
window.addEventListener('DOMContentLoaded', () => {
  initCursor()
  initHeroScene()
  initRevels()
  initModal()
  initBackToTop()
})
