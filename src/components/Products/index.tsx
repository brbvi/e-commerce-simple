import {
  BoxProducts,
  Container,
  SquareGalery,
  Wrapper,
  BoxParallax,
  WrapperParallax
} from './style'

import { Product } from '../Product'

import data from '../../../data.json'

import Carousel from 'react-elastic-carousel'
import { Parallax } from 'react-parallax'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useEffect } from 'react'
import Link from 'next/link'

export const Products: React.FC = () => {
  useEffect(() => {
    return console.log(data)
  }, [])

  const latestProducts = data.slice(0, 8)

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
          {latestProducts.map((product) => {
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
          {latestProducts.map((product) => {
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

        <div className="all">
          <Link href="/allProducts">
            <button type="button">Todos os itens</button>
          </Link>

          <div className="lineBackAll" />
        </div>
      </BoxProducts>

      <BoxParallax>
        <WrapperParallax>
          <Parallax
            blur={5}
            bgImage="/caurosel1.jpeg"
            bgImageAlt="the cat"
            strength={330}
          >
            <div className="insideParallax">
              <h2>Goji Berry</h2>
              <p>fornece energia, emagrece e é rica em vitamina C</p>
              <button type="button">
                <AiOutlineShoppingCart fontSize="20" />
                Comprar agora
              </button>
            </div>
          </Parallax>
          <div className="groupFotos">
            <div>
              <img src="/caurosel1.jpeg" alt="caurosel1" />
            </div>
            <div>
              <img src="/caurosel2.jpeg" alt="caurosel2" />
            </div>
            <div>
              <img src="/caurosel3.jpeg" alt="caurosel3" />
            </div>
            <div>
              <img src="/caurosel1.jpeg" alt="caurosel1" />
            </div>
          </div>
        </WrapperParallax>

        <Parallax
          blur={5}
          bgImage="/caurosel2.jpeg"
          bgImageAlt="the cat"
          strength={330}
        >
          <div className="textParallax">
            <h2>PRODUTOS DE QUALIDADE</h2>
            <p>Produtos selecionados e frescos</p>
          </div>
        </Parallax>
      </BoxParallax>
    </Container>
  )
}
