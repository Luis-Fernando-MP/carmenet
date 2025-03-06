import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

type TCounter = {
  number: string
  duration?: number
}

const Counter = ({ number, duration = 2 }: TCounter) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)

  const rounded = useTransform(count, latest => {
    if (number.includes(',')) {
      const decimals = number.split(',')[1]?.length || 0
      return latest.toFixed(decimals).replace('.', ',')
    }
    return Math.round(latest).toString()
  })

  useEffect(() => {
    if (!isInView || !Number(number.replace(',', '.'))) return
    let finalNumber = Number(number.replace(',', '.'))
    animate(count, finalNumber, {
      duration: duration,
      ease: 'easeOut'
    })
  }, [isInView, number, duration, count])

  if (!Number(number.replace(',', '.'))) return <h2>{number}</h2>

  return (
    <motion.h2 ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      {rounded}
    </motion.h2>
  )
}

export default Counter
