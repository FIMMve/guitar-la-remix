import imagen from "../../public/img/nosotros.jpg"
import styles from '../styles/nosotros.css'

export function meta(){
  return{
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música y más'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quasi odit quia dolores vel aspernatur eius eveniet. Aspernatur blanditiis eaque quo alias deserunt exercitationem hic nostrum enim rem? Harum, earum.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto placeat architecto vel mollitia in libero quam tenetur distinctio sequi ad. Culpa mollitia inventore reprehenderit, hic provident eius dolorum rerum dolores?</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
