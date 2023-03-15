

export const buyBoardData = {
  title: "Buy Board",
  type: "buy",
  headers: ["Product", "Quantity", "Price", "Action"],
  rows: [
    ["SoyBean(SSBS)", "2003", "6,471.39", "Buy"],
    ["Padd Rice(SPRL)", "86", "6,471.39", "Buy"],
    ["Maize(SMAZ)", "2003", "6,471.39", "Buy"],
    ["Sorghum(SSGM)", "2003", "6,471.39", "Buy"],
    ["Fair Trade ETC(FETC)", "2003", "6,471.39", "Buy"],
    ["SoyBean(SSBS)", "2003", "6,471.39", "Buy"],
    ["SSoyBean(SSBS)", "2003", "6,471.39", "Buy"],
  ]
}


export const sellBoardData = {
  title: "Sell Board",
  type: "sell",
  headers: ["Product", "Quantity", "Price", "Action"],
  rows: [
    ["SoyBean(SSBS)", "267", "6,471.39", "Sell"],
    ["Padd Rice(SPRL)", "353", "6,471.39", "Sell"],
    ["Maize(SMAZ)", "2035", "6,471.39", "Sell"],
    ["Sorghum(SSGM)", "353", "6,471.39", "Sell"],
    ["Fair Trade ETC(FETC)", "2035", "6,471.39", "Sell"],
    ["SoyBean(SSBS)", "143", "6,471.39",  "Sell"],
    ["SoyBean(SSBS)", "206", "6,471.39", "Sell"],
  ]
}


export const logBoardData = {
  title: "Trade Log",
  type: "log",
  headers: ["Security", "Board", "OrderType", "MatchedPrice", "Quantity", "Date", "Time"],
  rows: [
    ["SoyBean(SSBS)", "X-Traded", "Sell", "1792.65", "2003", "17 Oct, 2020", "07:38" ],
    ["Padd Rice(SPRL)", "X-Traded", "Sell", "1792.65", "86", "17 Oct, 2020", "07:38"],
    ["Maize(SMAZ)", "OTC", "Buy", "1792.65", "2003", "17 Oct, 2020", "07:38"],
    ["Sorghum(SSGM)", "FI", "Buy", "1792.65", "2003", "17 Oct, 2020", "07:38"],
    ["Fair Trade ETC(FETC)", "FI", "Buy", "1792.65", "2003", "17 Oct, 2020", "07:38"],
    ["SoyBean(SSBS)", "X-Traded", "Sell", "1792.65", "2003", "17 Oct, 2020", "07:38"],
    ["SoyBean(SSBS)", "X-Traded", "Sell", "1792.65", "2003", "17 Oct, 2020", "07:38"],
  ]
}

export const boardCat = ["X-Rated", "OTC" , "FI", "Derivatives"]

export const prodCodes = ["All", "SBBS", "SPRL", "SGNG", "SCOC", "SMAZ", "SGNG", "SSGM", "FETC"]