'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeTab, setActiveTab] = useState('how-it-works')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null)
    } else {
      setActiveFaq(index)
    }
  }

  const faqs = [
    {
      question: "What is Arthenticity?",
      answer: "Arthenticity is a revolutionary blockchain-based art verification platform, made by artists for artists under the European Artist Bank. Our platform provides secure, transparent, and immutable authentication for artworks, ensuring provenance and protecting artists' intellectual property rights through advanced blockchain technology."
    },
    {
      question: "How does Arthenticity work?",
      answer: "Arthenticity uses blockchain technology to create permanent, tamper-proof records of artwork authenticity. Artists can register their works, establish provenance, and create digital certificates that follow their art throughout its lifetime. Our platform integrates with European Artist Bank standards to ensure compliance and recognition across the art community."
    },
    {
      question: "What can I verify with Arthenticity?",
      answer: "You can verify paintings, sculptures, digital art, photography, mixed media, and any form of artistic creation. Our platform supports comprehensive documentation including creation process, materials used, artist biography, and ownership history, all secured on the blockchain."
    },
    {
      question: 'Is the verification process secure?',
      answer: 'Yes, our blockchain-based verification system provides the highest level of security. Each artwork receives a unique digital fingerprint that cannot be forged or duplicated, ensuring permanent and immutable proof of authenticity.'
    },
    {
      question: 'Can I track my artwork\'s history?',
      answer: 'Absolutely! Every verified artwork maintains a complete provenance chain on the blockchain, tracking ownership transfers, exhibitions, sales, and any significant events in the artwork\'s history.'
    },
    {
      question: 'What support does European Artist Bank provide?',
      answer: 'As part of the European Artist Bank ecosystem, we offer comprehensive support including artist education programs, legal guidance for intellectual property protection, and integration with European art market standards.'
    }
  ]

  const blockchains = [
    'Solana',
    'Polkadot',
    'Ethereum',
    'Polygon'
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-screen gradient-hero">
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 hero-title animate-fade-in">Arthenticity</h1>
            <p className="text-2xl md:text-3xl mb-8 hero-subtitle animate-fade-in animate-delay-200 text-white font-light tracking-wide">Blockchain Art Verification Platform—Made By Artists for Artists</p>
            <p className="text-lg md:text-xl pb-8 hero-description text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Secure your artistic legacy with immutable blockchain verification. Protect, authenticate, and track your artwork's provenance under the European Artist Bank ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in animate-delay-400">
              <a href="/app" className="floating-btn btn btn-primary btn-lg text-lg px-8 py-4 border-2 border-primary text-primary-content hover:bg-primary-focus transform transition-all duration-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Launch dApp
                </span>
              </a>
              <a href="/docs" className="floating-btn btn btn-outline btn-lg text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10 transform transition-all duration-300">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Documentation
                </span>
              </a>
            </div>
            
            {/* Floating elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-80 animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-70 animate-ping" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-60 animate-ping" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Blockchains */}
      <div className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Art Verification on Leading Blockchain Networks</h2>
          <p className="text-center mb-8 animate-fade-in animate-delay-100">Secure your artwork's authenticity across multiple trusted blockchain platforms with Hyperbridge Network</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {blockchains.map((chain, index) => (
              <div key={index} className={`flex flex-col items-center animate-bounce-in animate-delay-${(index % 5) * 100}`}>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-3 hover:animate-pulse-soft">
                  <span className="text-primary-content text-xl font-bold">{chain.charAt(0)}</span>
                </div>
                <span className="font-medium">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-4 animate-fade-in">Advanced Art Authentication Technology</h2>
        <p className="text-center mb-12 animate-fade-in animate-delay-100">Our platform combines blockchain security with artist-focused tools to deliver comprehensive art verification and provenance tracking.</p>
        
        <div className="tabs tabs-boxed flex justify-center mb-12 animate-fade-in animate-delay-200">
          <a 
            className={`tab ${activeTab === 'features' ? 'tab-active' : ''} transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </a>
          <a 
            className={`tab ${activeTab === 'how-it-works' ? 'tab-active' : ''} transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab('how-it-works')}
          >
            How It Works
          </a>
        </div>

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in">Blockchain Art Authentication</h3>
                <p className="animate-fade-in animate-delay-100">Create immutable digital certificates for your artworks with tamper-proof blockchain technology.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in animate-delay-200">Provenance Tracking</h3>
                <p className="animate-fade-in animate-delay-300">Maintain complete ownership history and exhibition records for your artworks throughout their lifetime.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in animate-delay-400">Artist Rights Protection</h3>
                <p className="animate-fade-in animate-delay-500">Protect your intellectual property with legally recognized digital certificates and ownership proofs.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in">European Artist Bank Integration</h3>
                <p className="animate-fade-in animate-delay-100">Seamlessly integrate with European Artist Bank standards and recognition systems.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in animate-delay-200">Digital Art Certificates</h3>
                <p className="animate-fade-in animate-delay-300">Generate professional digital certificates that can be verified by galleries, collectors, and institutions.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <h3 className="card-title animate-fade-in animate-delay-400">Artist-Friendly Interface</h3>
                <p className="animate-fade-in animate-delay-500">Designed by artists for artists—intuitive tools that understand the creative process and artistic needs.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'how-it-works' && (
          <div id="how-it-works" className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 animate-bounce-in">
                  <span className="text-primary-content font-bold">01</span>
                </div>
                <h3 className="card-title animate-fade-in">Register Your Artwork</h3>
                <p className="animate-fade-in animate-delay-100">Upload your artwork details, images, and documentation to create a comprehensive digital record.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 animate-bounce-in animate-delay-200">
                  <span className="text-primary-content font-bold">02</span>
                </div>
                <h3 className="card-title animate-fade-in animate-delay-200">Blockchain Verification</h3>
                <p className="animate-fade-in animate-delay-300">Our system creates a unique digital fingerprint and stores it permanently on the blockchain.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 animate-bounce-in animate-delay-400">
                  <span className="text-primary-content font-bold">03</span>
                </div>
                <h3 className="card-title animate-fade-in animate-delay-400">Receive Certificate</h3>
                <p className="animate-fade-in animate-delay-500">Get your official digital certificate of authenticity, recognized by the European Artist Bank.</p>
              </div>
            </div>
          </div>
        )}
        
      {/* Testimonials - Now placed outside of tab structure */}
      <div id="testimonials" className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What Our Users Say</h2>
          
          {/* Single testimonial centered */}
          <div className="flex justify-center animate-slide-up">
            <div className="card bg-base-100 shadow-xl max-w-2xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body items-center text-center">
                <div className="avatar mb-6 animate-bounce-in">
                  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="/ines.jpeg" alt="Dr. Ines O'Donovan" className="rounded-full" />
                  </div>
                </div>
                <blockquote className="text-lg mb-6 animate-fade-in animate-delay-200 italic leading-relaxed max-w-xl">
                  "Since integrating Arthenticity into our gallery's authentication process, we've gained unprecedented confidence in artwork provenance. The blockchain verification gives both artists and collectors the security they need in today's art market."
                </blockquote>
                <div className="animate-fade-in animate-delay-300">
                  <h3 className="text-xl font-bold text-primary mb-1">Dr. Ines O'Donovan, PhD</h3>
                  <p className="text-lg font-semibold text-secondary mb-1">The Ageless Futurist</p>
                  <p className="text-base font-medium text-accent">CEO, Jeunessima Magazine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>

      {/* Call to Action */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Authenticate Your Artwork?</h2>
          <p className="mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">Join the growing community of artists protecting their creative works with blockchain-verified authenticity certificates.</p>
          <button className="btn btn-secondary btn-lg animate-bounce-in animate-delay-200 hover:animate-pulse-soft">Start Verification Today</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Frequently Asked Questions</h2>
        <p className="text-center mb-8 animate-fade-in animate-delay-100">Everything you need to know about blockchain art verification and authentication</p>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`collapse collapse-arrow bg-base-100 mb-4 animate-fade-in animate-delay-${index * 100} hover:shadow-md transition-all duration-300`}
            >
              <input 
                type="radio" 
                name="faq-accordion" 
                checked={activeFaq === index}
                onChange={() => toggleFaq(index)}
                className="min-h-[3rem]" 
              />
              <div className="collapse-title text-xl font-medium min-h-[3rem] flex items-center">
                {faq.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="animate-fade-in">
          <span className="footer-title">Services</span> 
          <a className="link link-hover transition-all duration-300">Art Verification</a>
          <a className="link link-hover transition-all duration-300">Provenance Tracking</a>
          <a className="link link-hover transition-all duration-300">Digital Certificates</a>
        </div> 
        <div className="animate-fade-in animate-delay-100">
          <span className="footer-title">European Artist Bank</span> 
          <a className="link link-hover transition-all duration-300">About us</a>
          <a className="link link-hover transition-all duration-300">Contact</a>
          <a className="link link-hover transition-all duration-300">Artist Support</a>
          <a className="link link-hover transition-all duration-300">Resources</a>
        </div> 
        <div className="animate-fade-in animate-delay-200">
          <span className="footer-title">Legal</span> 
          <a className="link link-hover transition-all duration-300">Terms of use</a>
          <a className="link link-hover transition-all duration-300">Privacy policy</a>
          <a className="link link-hover transition-all duration-300">Artist Rights</a>
        </div>
      </footer>
    </main>
  )
}