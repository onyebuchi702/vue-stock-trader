import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if(data) {
        //info from the db
        const stocks = data.stocks
        const funds = data.funds
        const stockPortfolio = data.stockPortfolio

        const portfolio = {
          //from the portfolio.js in the states file
          stockPortfolio,
          funds
        }

        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
