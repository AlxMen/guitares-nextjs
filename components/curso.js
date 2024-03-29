import styles from "../styles/curso.module.css"


export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso
  return (
    <section className={`${styles.curso} curso2`}>
      <div className={`contenedor ${styles.grid}`}>
        <style jsx>{`
          .curso2 {
            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
          }
        `}</style>
        <div className={styles.contenido}>
          <h2 className="heading">{titulo}</h2>
          <p>{contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  )
}
