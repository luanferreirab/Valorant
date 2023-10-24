import Image from 'next/image'
import { Triangle } from '@phosphor-icons/react'
import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <div className={styles.header_content}>
      <Image
        src="/riot-games.svg"
        width={52}
        height={26}
        alt="Logo da riot games"
      />

      <span className={styles.divider} />

      <Image
        src="/valorant.svg"
        width={32}
        height={26}
        alt="Logo do valorant"
      />

      <nav className={styles.nav}>
        <a href="#">GAME</a>
        <a href="#">CHAMPIONS</a>
        <a href="#">NEWS</a>
        <a href="#">PATCH NOTES</a>
        <a href="#">SHOP</a>
        <a href="#">SUPPORT</a>
      </nav>

      <div className={styles.user}>
        <picture>
          <Image
            src="/luan.PNG"
            alt="Imagem de avatar do usuario"
            layout="fill"
          />
        </picture>

        <strong>Luan Ferreira</strong>
        <Triangle size={8} weight="fill" />
      </div>
    </div>
  </header>
)
