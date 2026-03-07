'use client'

import { useState, useEffect } from 'react'
import type { Locale, Dictionary } from '@/lib/i18n'
import { testQuestions, calculateTestResult } from '@/data/test-questions'

interface DyslexiaTestProps {
  locale: Locale
  dict: Dictionary
}

const QUESTIONS_PER_PAGE = 5
const STORAGE_KEY = 'unmaze-test-answers'

export function DyslexiaTest({ locale, dict }: DyslexiaTestProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [page, setPage] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const totalPages = Math.ceil(testQuestions.length / QUESTIONS_PER_PAGE)
  const pageQuestions = testQuestions.slice(
    page * QUESTIONS_PER_PAGE,
    (page + 1) * QUESTIONS_PER_PAGE
  )

  const allPageAnswered = pageQuestions.every((q) => answers[q.id] !== undefined)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setAnswers(JSON.parse(saved))
      } catch {
        // ignore
      }
    }
  }, [])

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
    }
  }, [answers])

  function handleAnswer(questionId: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function handleSubmit() {
    setShowResult(true)
  }

  function handleRestart() {
    setAnswers({})
    setPage(0)
    setShowResult(false)
    localStorage.removeItem(STORAGE_KEY)
  }

  if (showResult) {
    const result = calculateTestResult(answers)
    const resultText = dict.test.result[result.level]
    const bgColor =
      result.level === 'low'
        ? 'bg-green-50 border-green-200'
        : result.level === 'medium'
          ? 'bg-yellow-50 border-yellow-200'
          : 'bg-red-50 border-red-200'

    return (
      <div className={`rounded-2xl border-2 p-8 text-center ${bgColor}`}>
        <p className="mb-2 text-5xl font-bold">{result.percentage}%</p>
        <p className="mb-6 text-lg">{resultText}</p>
        <button
          onClick={handleRestart}
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          {dict.test.restart}
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-8 flex gap-1">
        {Array.from({ length: totalPages }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= page ? 'bg-black' : 'bg-border'
            }`}
          />
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {pageQuestions.map((q) => (
          <div key={q.id} className="rounded-xl bg-bg-light p-6">
            <p className="mb-4 font-medium">{q.text[locale]}</p>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-text-muted">{dict.test.scale.disagree}</span>
              <div className="flex gap-2">
                {[-3, -2, -1, 0, 1, 2, 3].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(q.id, value)}
                    className={`h-8 w-8 rounded-full border-2 text-xs transition-colors ${
                      answers[q.id] === value
                        ? 'border-black bg-black text-white'
                        : 'border-border hover:border-black'
                    }`}
                  >
                    {value > 0 ? `+${value}` : value}
                  </button>
                ))}
              </div>
              <span className="text-xs text-text-muted">{dict.test.scale.agree}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
          className="rounded-lg px-6 py-3 text-text-muted transition-colors hover:text-text disabled:opacity-30"
        >
          {dict.test.prev}
        </button>
        {page < totalPages - 1 ? (
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={!allPageAnswered}
            className="rounded-lg bg-black px-6 py-3 text-white transition-opacity disabled:opacity-30"
          >
            {dict.test.next}
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allPageAnswered}
            className="rounded-lg bg-black px-6 py-3 text-white transition-opacity disabled:opacity-30"
          >
            {dict.test.submit}
          </button>
        )}
      </div>
    </div>
  )
}
