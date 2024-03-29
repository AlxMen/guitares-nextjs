import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css"
import {formatearFecha} from '../utils/helpers'

export default function Post({ post }) {
  const { cotenido, imagen, Titulo, url, publishedAt } = post
  const fecha = formatearFecha(publishedAt)
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${Titulo}`} />
      <div className={styles.contenido}>
        <h3>{Titulo}</h3>
        <p className={styles.fecha}>{fecha}</p>
        <p className={styles.resumen}>{cotenido[0].children[0].text}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Publicacion
        </Link>
      </div>
    </article>
  )
}
