// import stocks from '../../data/stocks'

const state = {
  funds: 10000,
  stocks: [] //stocks in portfolio
};

const mutations = {
  //when a user buys stock(its properties)
  'BUY_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId) //finding stock by id
    if (record) {
      record.quantity += quantity
    } else {
        state.stocks.push({
          id: stockId,
          quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK'(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id == stockId) //finding stock by id
    if (record.quantity > quantity) {
      // check if quantity is more that what you wanna sell to prevent selling what you dont have
      record.quantity -= quantity
    } else {
        state.stocks.splice(state.stocks.indexOf(record))
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
  }
}

const actions = {
  sellStock({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id)
      return {
        id: stock.id,
        quanity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
