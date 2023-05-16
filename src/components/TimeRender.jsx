import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function TimeRender({id}) {

  const defaultTimer = { hh: 0, mm: 0, ss: 1 }
  const defaultDiff = 1000;

  const [timer, setTimer] = useState(defaultTimer)
  const [timerFormat, setTimerFormat] = useState(defaultTimer)
  const [diffTimer, setDiffTimer] = useState(defaultDiff)
  const [target, setTarget] = useState(0)

  useEffect(() => {
    const minutesRandom = Math.round(Math.random() * 5 + 1);
    setTarget(new Date().getTime() + (minutesRandom * (1000 * 60)))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {

      setTimer(() => {

        setDiffTimer(target - new Date().getTime())

        setTimerFormat({
          hh: Math.floor(new Date(diffTimer).getHours()) - 1,
          mm: new Date(diffTimer).getMinutes(),
          ss: new Date(diffTimer).getSeconds(),
        })

        return timerFormat
      });

    }, 1000)

    if (timer.hh === 0 && timer.mm === 0 && timer.ss === 0) { clearInterval(interval) }
    return () => clearInterval(interval)

  }, [timer, diffTimer, target, timerFormat])

  return (
    <>
      {
        timer.hh === 0 && timer.mm === 0 && timer.ss === 0
        ? <button className="btn">Article not available</button>
        : <Link to={`/product-detail/${id}`}> 
          <button className="btn">{`${timer.hh}:${timer.mm}:${timer.ss}`}</button>
        </Link> 
      }
    </>
  )
}

export default TimeRender