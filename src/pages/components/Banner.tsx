import { BannerCSS } from '../../styles/components/banner'

const Banner: React.FC = () => {
  return (
    <BannerCSS>
      <div>
        <h2>Olá, eu sou Junior Bytes</h2>

        <p>
          Back-end developer
          <span>/</span>
          Front-end developer
          <span>/</span>
          Design & Web
        </p>

        <button type="submit" data-anime="left">
          Contrate-me
        </button>
      </div>
    </BannerCSS>
  )
}

export default Banner
