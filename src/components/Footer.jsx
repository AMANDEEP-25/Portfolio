import React from 'react'

export function Footer() {
  return (
    <footer  className="bg-purple-600 dark:bg-purple-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}