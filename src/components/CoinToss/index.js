// Write your code here
import {useState} from 'react'
import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const CoinToss = () => {
  const [firstImg, setImg] = useState(headImg)
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)

  const tossResult = Math.floor(Math.random() * 2)

  const OnClickChangeTossCoin = () => {
    if (tossResult === 0) {
      setImg(headImg)
      setHeadCount(headCount + 1)
    } else {
      setImg(tailImg)
      setTailCount(tailCount + 1)
    }
  }

  return (
    <div className="app-container">
      <div className="coin-toss-container">
        <h1 className="heading">Coin Toss Game</h1>
        <p className="description">Heads (or) Tails</p>

        <img className="toss-result-img" src={firstImg} alt="toss result" />
        <button
          className="button"
          onClick={OnClickChangeTossCoin}
          type="button"
        >
          Toss Coin
        </button>
        <div className="counts-container">
          <p className="count">Total: {headCount + tailCount}</p>
          <p className="count">Heads: {headCount}</p>
          <p className="count">Tails: {tailCount}</p>
        </div>
      </div>
    </div>
  )
}
export default CoinToss
