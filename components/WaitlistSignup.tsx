'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Checkbox } from "./ui/checkbox"
import { X } from 'lucide-react'
import { db } from '../src/db/index'
import { userTable, InsertUser} from '../src/db/schema'

export const WaitlistSignup = (props) => {
  let isOpen = props.isOpen;
  let setIsOpen = props.setIsOpen;

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: '',
    country: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, notifyUpdates: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Waitlist sign-up:', formData)
    sentDb();
    setIsOpen(false)
  }

  const sentDb = async () => {
    await db.insert(userTable).values(formData);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2 text-yellow-400">Join the Waitlist</h2>
              <p className="text-gray-600 mb-6">Be the first to know when we launch!</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-gray-700">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-gray-700">Company Name (Optional)</label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full mt-1"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="text-gray-700">Country</label>
                  <Input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1"
                    placeholder="United States"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-700 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By joining, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}