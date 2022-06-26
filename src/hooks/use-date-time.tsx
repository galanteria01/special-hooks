import React from 'react'

export default function useDateTime() {
  const [dateTime, setDateTime] = React.useState(new Date())
  const [date, setDate] = React.useState('')
  const [time, setTime] = React.useState('')

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000)


    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    setDate(dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear())
    setTime(dateTime.getHours() + ':' + dateTime.getMinutes() + ':' + dateTime.getSeconds())
  }, [dateTime])

  return [date, time]
}