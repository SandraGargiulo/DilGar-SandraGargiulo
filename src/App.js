import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from 'routes/AppRouter'
import { CartProvider } from 'context/CartContext'

const App = () => (
  <BrowserRouter>
        <CartProvider>
              <AppRouter />
        </CartProvider>
      </BrowserRouter>
);

export default App;