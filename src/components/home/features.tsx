import type { Dictionary } from '@/lib/i18n'

interface FeaturesProps {
  dict: Dictionary
}

export function Features({ dict }: FeaturesProps) {
  return (
    <section id="about" className="wrapper">
      <div className="reveal-group">
        {dict.features.items.map((item, i) => {
          const isEven = i % 2 === 0
          return (
            <div key={i}>
              <div
                className={`flex border-b border-border py-8 transition-transform duration-500 ease-in-out hover:translate-x-3 md:py-12 ${
                  isEven ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className="flex gap-5 md:max-w-[65%] md:gap-8">
                  <span className="shrink-0 text-[length:var(--text-subheading)] font-normal leading-none text-text-muted opacity-40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="m-0 text-[length:var(--text-subheading)] font-medium leading-tight md:text-[length:var(--text-heading)] md:font-normal md:leading-[0.95]">
                      {item.title}
                    </h3>
                    <p className="mb-0 mt-2 text-[length:var(--text-body)] leading-relaxed text-text-body md:mt-4 md:max-w-[500px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
