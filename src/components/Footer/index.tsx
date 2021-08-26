import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

import { Container, BoxFooter, WrapperFooter } from './style'

export const Footer: React.FC = () => {
  return (
    <Container>
      <section className="up">
        <BoxFooter>
          <h2>Atendimento</h2>
          <div className="lineFooter" />
          <WrapperFooter>
            <p>Vendas e dúvidas</p>
            <h3>
              <FaWhatsapp /> 11 98765-4321
            </h3>
            <h4>
              <HiOutlineMail /> sac@ecommerce.com
            </h4>
          </WrapperFooter>
        </BoxFooter>
        <BoxFooter>
          <h2>Categorias</h2>
          <div className="lineFooter" />

          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
        </BoxFooter>
        <BoxFooter>
          <h2>Informações</h2>
          <div className="lineFooter" />
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
        </BoxFooter>
        <BoxFooter>
          <h2>Meu Cadastro</h2>
          <div className="lineFooter" />
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
          <Link href="/">
            <span>Amendoim</span>
          </Link>
        </BoxFooter>
      </section>
      <section className="down">
        <p>Ecommerce - Todos os direitos reservados.</p>
      </section>
    </Container>
  )
}
