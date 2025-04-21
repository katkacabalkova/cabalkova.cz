interface TestimonialCardProps {
  text: string
  author: string
  role?: string
}

export default function TestimonialCard({ text, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          {role && <p className="text-gray-600">{role}</p>}
        </div>
      </div>
      <p className="text-gray-700 italic">{text}</p>
    </div>
  )
}
