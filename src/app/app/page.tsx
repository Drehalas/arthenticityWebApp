'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'

export default function MythOSApp() {
  // State for form inputs
  const [formData, setFormData] = useState({
    projectName: '',
    parameters: '',
    resources: '',
    timeframe: '',
    objectives: '',
    additionalNotes: ''
  })
  
  // State for file uploads
  const [files, setFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setFiles(prev => [...prev, ...fileArray])
    }
  }

  // Remove a file from the list
  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      // In a real application, you would send the form data and files to your backend
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSuccess(true)
      // Reset form after successful submission
      setFormData({
        projectName: '',
        parameters: '',
        resources: '',
        timeframe: '',
        objectives: '',
        additionalNotes: ''
      })
      setFiles([])
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen p-6 md:p-12 bg-base-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Myth.OS</h1>
          <p className="text-xl text-base-content opacity-80 max-w-2xl mx-auto">
            Launch your project by providing parameters and uploading necessary files below.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-success/10 border border-success rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-success mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Project Launched Successfully!</h2>
            <p className="mb-6">Your project is now being processed. You'll receive updates via email.</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setIsSuccess(false)} 
                className="btn btn-primary"
              >
                Launch Another Project
              </button>
              <Link href="/" className="btn btn-outline">
                Return Home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-base-200 rounded-lg p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Project Name</span>
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="Enter your project name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Parameters */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Parameters</span>
                </label>
                <input
                  type="text"
                  name="parameters"
                  value={formData.parameters}
                  onChange={handleInputChange}
                  placeholder="Enter key parameters"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Resources */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Resources</span>
                </label>
                <input
                  type="text"
                  name="resources"
                  value={formData.resources}
                  onChange={handleInputChange}
                  placeholder="Required resources"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Timeframe */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Timeframe</span>
                </label>
                <input
                  type="text"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 weeks, 1 month"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Objectives */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Objectives</span>
                </label>
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  placeholder="Describe your project objectives"
                  className="textarea textarea-bordered w-full h-24"
                  required
                />
              </div>

              {/* File Upload */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Upload Files</span>
                  <span className="label-text-alt">Project assets, documentation, etc.</span>
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-base-100 border-base-300 hover:bg-base-200 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-base-content opacity-70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-base-content opacity-70"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-base-content opacity-60">SVG, PNG, JPG, PDF or DOCX (MAX. 10MB)</p>
                    </div>
                    <input 
                      ref={fileInputRef}
                      type="file" 
                      className="hidden" 
                      multiple 
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="md:col-span-2">
                  <h3 className="font-medium mb-2">Selected Files:</h3>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex justify-between items-center p-2 bg-base-100 rounded-md">
                        <span className="truncate max-w-xs">{file.name}</span>
                        <button 
                          type="button" 
                          onClick={() => removeFile(index)}
                          className="btn btn-ghost btn-xs text-error"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Additional Notes */}
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-medium">Additional Notes</span>
                  <span className="label-text-alt">Optional</span>
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional information you'd like to provide"
                  className="textarea textarea-bordered w-full h-24"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button 
                type="submit" 
                className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Launching...' : 'Launch dApp'}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}