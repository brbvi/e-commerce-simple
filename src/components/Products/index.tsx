import { BoxProducts, Container, SquareGalery, Wrapper } from './style'
import { Product } from '../Product'

import data from '../../../data.json'

import Carousel from 'react-elastic-carousel'
import { useEffect } from 'react'

export const Products: React.FC = () => {
  useEffect(() => {
    return console.log(data)
  }, [])

  const breakPoints = [{ width: 1366, itemsToShow: 1 }]
  return (
    <Container>
      <SquareGalery id="galery">
        <Carousel isRTL={false} breakPoints={breakPoints}>
          <img src="/caurosel1.jpeg" alt="caurosel" />
          <img src="/caurosel2.jpeg" alt="caurosel" />
          <img src="/caurosel3.jpeg" alt="caurosel" />
        </Carousel>
      </SquareGalery>

      <BoxProducts>
        <div className="title">
          <h1>Promoções</h1>
          <div className="lineBack" />
        </div>

        <Wrapper>
          {data.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                type={product.type}
                price={product.price}
              />
            )
          })}
        </Wrapper>

        <div className="title">
          <h1>Destaques</h1>
          <div className="lineBack" />
        </div>

        <Wrapper>
          {data.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                type={product.type}
                price={product.price}
              />
            )
          })}
        </Wrapper>
      </BoxProducts>
    </Container>
  )
}
