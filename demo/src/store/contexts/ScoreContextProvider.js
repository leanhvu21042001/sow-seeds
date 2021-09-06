import { createContext, useState } from "react";

export const ScoreContext = createContext();


export function ScoreProvider({ children }) {
  const [score, setScore] = useState(() =>  1200);

  const getScore = () => {
    return score
  }
  const truTien = (value) => {
    setScore(score - value)
  }
  const cayDaTrong = [
    {
      id: 12312312,
      name: "ha giong 1",
      xGiay: 120,
      thoiGianTrong: 123456,
      thoiGianThu: () => (this.xGiay + this.thoiGianTrong),
    },
    {
      id: 123134312,
      name: "ha giong 2",
      xGiay: 120,
      thoiGianTrong: 1234545,
      thoiGianThu: () => (this.xGiay + this.thoiGianTrong),
    },
  ]
  // localStorage.setItem("cayDaTrong", JSON.stringify(cayDaTrong))
  setInterval(() => {

    const data = JSON.parse(localStorage.getItem("cayDaTrong"));
    const thoiGianHienTai = 123123412345
    // if (data[0].thoiGianThu === thoiGianHienTai) {

    // }


   }, 1000)
  const data = {
    score,
    setScore,
    getScore,
    truTien,
  }

  return (
    <ScoreContext.Provider value={data}>
      {children}
    </ScoreContext.Provider>
  )
}

